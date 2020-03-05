import axios from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://ihearyou.herokuapp.com')
  : (baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  SIGNUP: async form => {
    const { data } = await service.post('/signup', form)
    return data
  },
  LOGIN: async form => {
    const { data } = await service.post('/login', form)
    return data
  },
  LOGOUT: async () => {
    const { data } = await service.get('/logout')
    return data
  },
  CREATE: async servicios => {
    //console.log(servicios)
    const { data } = await service.post('/servicios/:trabajoId', servicios)
    //console.log(data)
    return data
  },
  uploadPhoto: async photo => {
    return await service.post('/upload', photo)
  }
}

export default AUTH_SERVICE