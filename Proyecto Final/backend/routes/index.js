 
const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working ONLINE' })
});

const {
  getAllTrabajos,
  getTrabajo,
  createTrabajo,
  updateTrabajo,
  deleteTrabajo


} = require('../controllers/trabajo')
// Project CRUD
router.get("/api/trabajos", getAllTrabajos);
router.post("/api/trabajos", createTrabajo);
router.get("/api/trabajos/:id", getTrabajo);
router.put("/api/trabajos/:id", updateTrabajo);
router.delete("/api/trabajos/:id", deleteTrabajo);



module.exports = router;