import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'



import Home from './pages/home';
import Profile from './pages/profile'
import Signup from './pages/signup'
import Login from './pages/login'
import Config from './pages/config'


//import Servicio from './pages/publicar'
//<Route exact path="/servicios" component={Servicio} />
//import Trabajo from './pages/trabajo' 
//<Route exact path="/trabajos" component={Trabajo}/>
import PublicarTrabajo from './pages/publicarTrabajo'


// estas no
import NotFound from './components/404/NotFound.js';
// estyas no
export default () => (
  
  <BrowserRouter>  
    <Navbar/>  
    <Switch>      
      <Route exact path="/" component={Home} />

      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
     
      <Route exact path="/config" component={Config} />

      <Route exact path="/publicarTrabajos" component={PublicarTrabajo} />
      <Route component={NotFound} />    
    </Switch>
  
  </BrowserRouter>
  )