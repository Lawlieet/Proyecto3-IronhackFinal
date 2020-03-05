const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const uploadCloud = require('../config/cloudinary')

const User = require('../models/User');
const Project = require('../models/Project');






router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .populate('trabajos')
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/publicar', isAuth, async(req, res, next) => {
  const {description, title } = req.body
  const { _id } = req.user
  const proy = await Project.create( { title,description , trabajo:_id})

  return res.status(200).json( {user})
  
});


router.post(
  '/upload',
  isAuth,
  uploadCloud.single('photoURL'),
  async (req, res, next) => {
    const { secure_url } = req.file
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { photoURL: secure_url },
      { new: true }
    )
    res.status(200).json({ user })
  }
)
router.get('/create', isAuth, async (req, res, next) => {
  const { direction, cedula,description } = req.body
  const { _id } = req.user
  const project = await Project.create({ direction, cedula, description })
  const projectPopulated = await Project.findById(project._id).populate('author')
  const user = await User.findByIdAndUpdate(
    _id,
    { $push: { projects: project._id } },
    { new: true }
  ).populate({
    path: 'project',
    populate: {
      path: 'author',
      model: 'User'
    }
  })
  return res.status(201).json({ user, project: projectPopulated })
})

router.get('/project', async (req, res, next) => {
  const projects = await Project.find()
    .sort({ createdAt: -1 })
  res.status(200).json({ projects })
})

router.get('/projects/:id', async (req, res, next) => {
  const {id} = req.params;
  const project = await Project.findById(id)
  res.status(200).json(project)
})
router.patch('/cards/:id', async(req, res, next) => {
  const {id} = req.params
  const {name,description} = req.body
  await Project.findByIdAndUpdate(id, {
    name, description, 
  })
  res.status(200).json({message: "Project update"})
})

router.delete('/project/:id', async(req, res, next) => {
  const {id} = req.params
  await Project.findByIdAndDelete(id)
  res.status(200).json({ message: "Project delete"})
})

module.exports = router;
  function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Inicia Session primero' });
  }

  