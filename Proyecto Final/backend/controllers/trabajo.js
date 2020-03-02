const Trabajo = require ("../models/Project")



exports.getAllTrabajos = async (req, res) => {
    const trabajos = await Trabajo.find()
    res.status(200).json({trabajos})
}

exports.getTrabajo = async (req, res) => {
    const { id } = req.params;
    const trabajo =  await Trabajo.findById(id)
    res.status(200).json(trabajo)
}

exports.createTrabajo = async (req,res) => {
    const { title, description, cedula } = req.body
    const { _id} = req.user
    await Trabajo.create( { title, description, cedula ,author: _id})
    res.status(201).json( {message: "Trabajo Creado"})
} 

exports.updateTrabajo = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    await Trabajo.findByIdAndUpdate(id, {title , description})
    res.status(200).json( { message: "Trabajo update"})
}

exports.deleteTrabajo = async (req, res) => {
    const { id } = req.params
    await Trabajo.findByIdAndDelete(id)
    res.status(200).json( { message: "Trabajo Eliminado" })
}

