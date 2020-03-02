import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'



import Home from './pages/home';
import Profile from './pages/profile'
import Signup from './pages/signup'
import Login from './pages/login'

import Publicar from './pages/publicar'
import Config from './pages/config'

import Trabajo from './pages/trabajo'


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
      
      <Route exact path="/trabajos" component={Trabajo}/>

      <Route exact path="/config" component={Config} />
      <Route exact path="/publicar" component={Publicar} />



    

      <Route component={NotFound} />    
    </Switch>
  
  </BrowserRouter>
  )