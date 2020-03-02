 
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
router.get("/api/trabajos", getAllTrabajos);
router.post("/api/trabajos", createTrabajo);
router.get("/api/trabajos/:id", getTrabajo);
router.put("/api/trabajos/:id", updateTrabajo);
router.delete("/api/trabajos/:id", deleteTrabajo);

// Servicio CRUD
router.get("/api/servicios", getAllServicios);
router.post("/api/servicios/:trabajoId", createServicio);
router.get("/api/servicios/:id", getServicio);
router.put("/api/servicios/:id", updateServicio);
router.delete("/api/servicios/:id", deleteServicio);




module.exports = router;