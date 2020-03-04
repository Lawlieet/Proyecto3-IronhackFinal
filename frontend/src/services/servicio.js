import axios from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://ihearyou.herokuapp.com')
  : (baseURL = 'http://localhost:3000');
  
const service = axios.create({ withCredentials: true, baseURL });

const SERVICE_SERVICIO = {

    CREATE: async servicio => {
        const { data } = await service.post("/:trabajoId",servicio)
        //console.log("Creaste un Servicio ")
        return data
    },

    DELETE: async id =>{
        const { data } = await service.delete(`/${id}`)
        return data
    },
    getAllServicios: async () =>{
        const { data } = await service.get()
        //console.log(data.trabajos, "Get alll servicios")
       
        return data

    },
    getServicio : async trabajoId =>{
        const{ data } = await service.get(`/${trabajoId}`)
         //console.log(data.trabajos, "Data servicio")
         //console.log(trabajoId, "Data servicio")
         return data
    },
    updateServicio : async (id,title,description) => {
        const { data } = await service.put(`/${id}`,{title,description})
        return data
    }

}


export default SERVICE_SERVICIO

