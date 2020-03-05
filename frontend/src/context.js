import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'
import SERVICE_TRABAJO from './services/trabajo'
import SERVICE_SERVICIO from './services/servicio'

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    formServicio:{
      title:'',
      description:'',
    }
   ,formTrabajo:{
      title:'',
      description:'',
      cedula:''
    },
    formSignup: {
      name: '',
      email: '',
      password: ''
    },
    formLogin: {
      email: '',
      password: ''
    },
    feed:null,
    loggedUser: null,
    isLogged: false,
    servicios:[],
    
    
    
  }

//handleSignupInputTrabajo
handleSignupInputTrabajo = e => {
  const { formTrabajo } = this.state
  const { name, value } = e.target
  formTrabajo[name] = value
  this.setState({ formTrabajo })
}


handleSignupSubmitTrabajo = async e => {
  e.preventDefault()
  const form = this.state.formTrabajo
  const trabajos = this.state.trabajos

  this.setState({ formTrabajo: { title: '', description: '', cedula: ''}})
  
  return await SERVICE_TRABAJO.CREATE(form)
}
//handleSignupInputTrabajo

//Envios de Servicios Cambiar a CrearTrabajo
  handleSignupInputServicio = e => {
    const { formServicio } = this.state
    const { name, value } = e.target
    formServicio[name] = value
    this.setState({ formServicio })
  }
  handleSignupSubmitServicio = async e => {
    e.preventDefault()
    const form = this.state.formServicio
    console.log(form)
    this.setState({ formServicio: { title: '', description: ''}})
    
    return await SERVICE_SERVICIO.CREATE(form)
  }
//Envio de Servicios cambiar a crear trabajo
//----------------------------

  handleLogout = async () => {
    await AUTH_SERVICE.LOGOUT()
    this.props.history.push('/')
    this.setState({ loggedUser: null, isLogged: false })
  }
  //Actualizar el valor del inout al escribir
  handleSignupInput = e => {
    const { formSignup } = this.state
    const { name, value } = e.target
    formSignup[name] = value
    this.setState({ formSignup })
  }
  //Actualizar el valor del inout al escribir
  handleLoginInput = e => {
    const { formLogin } = this.state
    const { name, value } = e.target
    formLogin[name] = value
    this.setState({ formLogin })
  }
  //Envio del formulario de registro
  handleSignupSubmit = async e => {
    e.preventDefault()
    const form = this.state.formSignup
    this.setState({ formSignup: { name: '', email: '', password: ''}})
    return await AUTH_SERVICE.SIGNUP(form)
  }

  //Cambiar foto de perfil//
  uploadPhoto = e => {
  const formPhoto = new FormData()
  formPhoto.append('photoURL', e.target.files[0])
  AUTH_SERVICE.uploadPhoto(formPhoto)
    .then(({ data }) => {
      this.setState({ loggedUser: data.user })
    })
    .catch(err => {
      console.log(err)
    })
}

//Regitro deusuario
  handleLoginSubmit = e => {
    e.preventDefault()
    const form = this.state.formLogin
    return AUTH_SERVICE.LOGIN(form)
      .then(({ user }) => {
        this.setState({
          loggedUser: user,
          isLogged: true
        })
        return { user, msg: 'Registro Exitoso' }
      })
      .catch(err => {
        this.setState({
          loggedUser: null,
          isLogged: false,
          formLogin: { email: '', password: '' }
        })
        return { user: null, msg: 'El usuario o contraseña son incorrectos' }
      })
      .finally(() => this.setState({ formLogin: { email: '', password: '' } }))
  }
  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      handleLogout,
      handleSignupSubmitServicio,
      handleSignupInputServicio,
      uploadPhoto,
      handleSignupInputTrabajo,
      handleSignupSubmitTrabajo
    } = this
    return (
      <MyContext.Provider
        value={{
          state,
          handleSignupInput,
          handleSignupSubmit,
          handleLoginInput,
          handleLoginSubmit,
          handleLogout,

          handleSignupSubmitServicio,
          handleSignupInputServicio,

          uploadPhoto,
          handleSignupInputTrabajo,
          handleSignupSubmitTrabajo


      }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default withRouter(MyProvider)
