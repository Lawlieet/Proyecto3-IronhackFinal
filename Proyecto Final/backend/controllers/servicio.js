const Trabajo = require ("../models/Trabajo")
const Servicio = require ("../models/Servicio")


exports.getAllServicios = async (req, res) => {
    const servicios = await Servicio.find()
    res.status(200).json({servicios})
}

exports.getServicio = async (req, res) => {
    const { id } = req.params;
    const servicio =  await Servicio.findById(id)
    res.status(200).json(servicio)
}

exports.createServicio = async (req,res) => {
    const { trabajoId } =req.params
    const { title, description } = req.body
    const newServicio = await Servicio.create({title, description, trabajo:trabajoId})
    await Servicio.findByIdAndUpdate(trabajoId,{ $push: {servicios:newServicio.id}  } )
    res.status(201).json( {message: "Servicio Creado"})
} 

exports.updateServicio = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    await Servicio.findByIdAndUpdate(id, {title , description})
    res.status(200).json( { message: "Servicio update"})
}

exports.deleteServicio = async (req, res) => {
    const { id } = req.params
    await Servicio.findByIdAndDelete(id)
    res.status(200).json( { message: "Servicio Eliminado" })
}

