import axios from 'axios'

const baseURL = "http://localhost:3000/api/trabajos"

const trabajosService = axios.create( {
    baseURL
})

export const getAllTrabajos = async () => {
    const { data } = await trabajosService.get()
    console.log(data, "Carpeta de Servicios")
    return data
}

export const getTrabajo = async trabajoId => {
    const { data } = await trabajosService.get(`/${trabajoId}`)
    return data
}

export const createTrabajo = async ( title, description, cedula) => {
    const { data } = await trabajosService.post("/",{title,description,cedula})
    return data
}

export const updateTrabajo = async (id , title, description) =>{
    const { data } = await trabajosService.put(`/${id}`, { title, description})
    return data
}

export const deleteTrabajo = async id => {
    const { data } = await trabajosService.delete(`/${id}`)
    return data
}