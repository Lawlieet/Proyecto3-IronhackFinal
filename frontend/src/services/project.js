import axios from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://module-3-ironhack.herokuapp.com/projects')
  : (baseURL = 'http://localhost:3000/projects');
  
const MY_SERVICE = axios.create({
    baseURL,
    withCredentials: true
})

const PROJECTS_SERVICE = {
    getAll: async () => {
        return await MY_SERVICE.get('/')
    },
    create: async data => {
        return await MY_SERVICE.post('/new', data)
    }
}

export default PROJECTS_SERVICE