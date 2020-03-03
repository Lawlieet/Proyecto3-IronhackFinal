import axios from 'axios'

const baseURL = "http://localhost:3000/trabajos"

const service = axios.create({ withCredentials: true, baseURL });

const SERVICE_TRABAJO = {

    CREATE: async trabajo => {
        const { data } = await service.post("/",trabajo)
        console.log("Creaste un trabajoperro")
        return data
    },

    DELETE: async id =>{
        const { data } = await service.delete(`/${id}`)
        return data
    },
    getAllTrabajos: async () =>{
        const { data } = await service.get()
        console.log(data, "Data Get all")
        return data

    },
    getTrabajo : async trabajoId =>{
        const{ data } = await service.get(`/${trabajoId}`)
        return data
    },
    updateTrabajo : async (id,title,description,cedula) => {
        const { data } = await service.put(`/${id}`,{title,description,cedula})
        return data
    }

}


export default SERVICE_TRABAJO



// const trabajos_Service = axios.create( {
//     baseURL
// })

// export const getAllTrabajos = async () => {
//     const { data } = await trabajos_Service.get()
//     console.log(data, "Carpeta de Servicios")
//     return data
// }

// export const getTrabajo = async trabajoId => {
//     const { data } = await trabajos_Service.get(`/${trabajoId}`)
//     return data
// }

// export const createTrabajo = async ( title, description, cedula) => {
//     const { data } = await trabajos_Service.post("/",{title,description,cedula})
//     return data
// }

// export const updateTrabajo = async (id , title, description) =>{
//     const { data } = await trabajos_Service.put(`/${id}`, { title, description})
//     return data
// }

// export const deleteTrabajo = async id => {
//     const { data } = await trabajos_Service.delete(`/${id}`)
//     return data
// }