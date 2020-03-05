import axios from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://ihearyou.herokuapp.com/trabajos')
  : (baseURL = 'http://localhost:3000/trabajos');

const projectsService = axios.create({
  withCredentials: true,
    baseURL
  });

  export const updateTrabajo = async (id, title, description) => {
    const { data } = await projectsService.put(`/${id}`, { title, description });
    return data;
  };
  
  export const deleteTrabajo = async id => {
    const { data } = await projectsService.delete(`/${id}`);
    return data;
  };

  export const getTrabajo = async trabajoId => {
    const { data } = await projectsService.get(`/${trabajoId}`)
    return data
  }