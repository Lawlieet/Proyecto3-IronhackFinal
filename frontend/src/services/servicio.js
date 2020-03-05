import axios from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://ihearyou.herokuapp.com')
  : (baseURL = 'http://localhost:3000');
  
const service = axios.create({ withCredentials: true, baseURL });

const SERVICE_SERVICIO = {

    CREATE: async servicio => {
        const { data } = await service.post("/:trabajoId",servicio)
        return data
    },

    DELETE: async id =>{
        const { data } = await service.delete(`/${id}`)
        return data
    },
    getAllServicios: async () =>{
        const { data } = await service.get()     
        return data

    },
    getServicio : async trabajoId =>{
        const{ data } = await service.get(`/${trabajoId}`)

         return data
    },
    updateServicio : async (id,title,description) => {
        const { data } = await service.put(`/${id}`,{title,description})
        return data
    }

}


export default SERVICE_SERVICIO

