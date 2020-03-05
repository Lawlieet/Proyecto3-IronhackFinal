import axios from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://ihearyou.herokuapp.com/trabajos')
  : (baseURL = 'http://localhost:3000/trabajos');

  
const service = axios.create({ withCredentials: true, baseURL });

const SERVICE_TRABAJO = {

    CREATE: async trabajo => {
        const { data } = await service.post("/",trabajo)
        return data
    },

    DELETE: async id =>{
        const { data } = await service.delete(`/${id}`)
        return data
    },
    getAllTrabajos: async () =>{
        const { data } = await service.get()
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