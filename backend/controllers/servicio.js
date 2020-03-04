//Revisar los servicios
const Trabajo = require ("../models/Trabajo")
const Servicio = require ("../models/Servicio")
const User = require("../models/User")


exports.getAllServicios = async (req, res) => {
    const servicios = await Servicio.find().populate("trabajo")
    res.status(200).json({servicios})
}

exports.getServicio = async (req, res) => {
    const { _id } = req.params;

    const servicio =  await Servicio.findById(_id)
        //console.log(req.params)
        //console.log("Esto es el ID", _id)
    res.status(200).json(servicio)
}

exports.createServicio = async (req,res) => {
    const { trabajoId } =req.params
    //console.log("->",trabajoId)
    //console.log("reqparams",req.params)
    const { title, description } = req.body
    const newServicio = await Servicio.create({trabajo:trabajoId,title, description})
    await Servicio.findOneAndUpdate(trabajoId,{ $push: {servicio:newServicio._id}  } )
    //console.log("Estos esel crear servicio",req.params)
    //console.log("req user",req.user)
    //console.log("Estos esel crear servicio trabajoId",trabajoId)
   


    res.status(201).json( {message: "Servicio Creado"})
} 

exports.updateServicio = async (req, res) => {
    const { _id } = req.params;
    const { title, description } = req.body;
    await Servicio.findByIdAndUpdate(_id, {title , description})
    res.status(200).json( { message: "Servicio update"})
}

exports.deleteServicio = async (req, res) => {
    const { _id } = req.params
    await Servicio.findByIdAndDelete(_id)
    res.status(200).json( { message: "Servicio Eliminado" })
}

