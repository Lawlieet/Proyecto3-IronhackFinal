const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Project = require('../models/Project');


const passport = require('../config/passport');
const uploadCloud = require('../config/cloudinary')


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

    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/publicar', isAuth, async(req, res, next) => {
  // console.log(req.user)
  // console.log(req.body)
  const {description, direction, cedula } = req.body
  const { _id } = req.user
  const proy = await Project.create( { direction,description, cedula , author:_id})

  return res.status(200).json( {user})
  



  // proy.create ( {description, direction, cedula }) 
  //   .then((user) => res.status(200).json({ user }))
  //   .catch((err) => res.status(500).json({ err }));
});


//Para actualizar la imagen,  Nota  hacer que al momento de subirla
//La foto que redirija al perfil para que no tenga que esperarse
router.post(
  '/upload',
  isAuth,
  uploadCloud.single('imageURL'),
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
//Ruta para la creacion de un projcto
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

//Ruta donde se ordenan los proyectos
router.get('/project', async (req, res, next) => {
  const projects = await Project.find()
    .sort({ createdAt: -1 })
  res.status(200).json({ projects })
})

//Buscar una projecto x ID
router.get('/projects/:id', async (req, res, next) => {
  const {id} = req.params;
  const project = await Project.findById(id)
  res.status(200).json(project)
})
//Creacion de la ruta Cards la cual va a contener por Id al hacer update
router.patch('/cards/:id', async(req, res, next) => {
  const {id} = req.params
  const {name,description} = req.body
  await Project.findByIdAndUpdate(id, {
    name, description, 
  })
  res.status(200).json({message: "Project update"})
})

//Eliminar un projecto por su ID - Recordar pornelro bien porque anterioente elmine todo
router.delete('/project/:id', async(req, res, next) => {
  const {id} = req.params
  await Project.findByIdAndDelete(id)
  res.status(200).json({ message: "Project delete"})
})



/////Creacion de crud






///Fianl del crud

module.exports = router;
  function isAuth(req, res, next) {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Inicia Session primero' });
  }

  