 
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

const{
  getAllServicios,
  getServicio,
  createServicio,
  updateServicio,
  deleteServicio
} = require ('../controllers/servicio')



// Project CRUD
router.get("/trabajos", getAllTrabajos);
router.post("/trabajos", createTrabajo);
router.get("/trabajos/:id", getTrabajo);
router.put("/trabajos/:id", updateTrabajo);
router.delete("/trabajos/:id", deleteTrabajo);

// Servicio CRUD
router.get("/servicios", getAllServicios);
router.post("/servicios/:trabajoId", createServicio);
router.get("/servicios/:id", getServicio);
router.put("/servicios/:id", updateServicio);
router.delete("/servicios/:id", deleteServicio);




module.exports = router;