const Trabajo = require ("../models/Trabajo")
const User  = require ("../models/User")
const Servicio = require('../models/Servicio')


exports.getAllTrabajos = async (req, res) => {
    const trabajos = await Trabajo.find().populate("servicios")
    res.status(200).json({trabajos})
}

exports.getTrabajo = async (req, res) => {
    const { id } = req.params;
    const trabajo =  await Trabajo.findById(id).populate('servicios')
    //console.log(id)
    res.status(200).json(trabajo)
}

exports.createTrabajo = async (req,res, next) => {
    const { title, description, cedula } = req.body

    const newTrabajo = await Trabajo.create( { title, description, cedula})
    //const user= await User.findByIdAndUpdate(_id,{$push:{trabajos:trabajo.id}},{new:true})
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

