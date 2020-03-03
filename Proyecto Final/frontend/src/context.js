import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'
//import { createTrabajo } from "./services/trabajo" 
import SERVICE_TRABAJO from './services/trabajo'

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    formServicio:{
      title:'',
      direction:'',
      cedula:''
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
    loggedUser: null,
    isLogged: false
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
  console.log(form)
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
    this.setState({ formServicio: { title: '', direction: '', cedula: ''}})
    
    return await AUTH_SERVICE.CREATE(form)
  }
//Envio de Servicios cambiar a crear trabajo
//----------------------------
  handleLogout = async () => {
    await AUTH_SERVICE.LOGOUT()
    this.props.history.push('/')
    this.setState({ loggedUser: null, isLogged: false })
  }
  //Esta función destructura de el estado la form para poder acceder a
  //a sus key value pairs.
  //Destructuramos la key y su valor de element y con . target lo 
  //obtenemos.
  //A formSignUp en su llave name le damos el valor que pasa en value del
  //e.target
  //Se actualiza el estado al final.
  handleSignupInput = e => {
    const { formSignup } = this.state
    const { name, value } = e.target
    formSignup[name] = value
    this.setState({ formSignup })
  }
  //Esta función destructura de el estado la form para poder acceder a
  //a sus key value pairs.
  //Destructuramos la key y su valor de element y con . target lo 
  //obtenemos.
  //A formLogin en su llave name le damos el valor que pasa en value del
  //e.target
  //Se actualiza el estado al final.
  handleLoginInput = e => {
    const { formLogin } = this.state
    const { name, value } = e.target
    formLogin[name] = value
    this.setState({ formLogin })
  }
  //La funcion asincrona recibe un evento; lo primero que hace es evitar la recarga 
  //de pagina con preventDefault. En seguida en una constante llamada form guardamos 
  //el state que actualizamos en la funcion handleSignUpInput. Despues limpiamos la informacion del signup
  //para terminar pasamos nuestra constante form a AUTH_SERVICE para mandar esa info al servidor. 
  handleSignupSubmit = async e => {
    e.preventDefault()
    const form = this.state.formSignup
    this.setState({ formSignup: { name: '', email: '', password: ''}})
    return await AUTH_SERVICE.SIGNUP(form)
  }


//
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
