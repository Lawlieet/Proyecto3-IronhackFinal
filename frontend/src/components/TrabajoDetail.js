import React, {  Component } from 'react'
import { withRouter } from "react-router-dom";
import {  Box,  } from '@chakra-ui/core'
import { getTrabajo ,updateTrabajo } from '../services/Delete'

class TrabajoDetail extends Component {

    state = {
        trabajos:{},
        trabajo:{},
        title:"",
        description:"",
        edit:false,      
        
    }
    async getTrabajoInfo(){
        const  trabajo  = await getTrabajo(this.props.trabajoId)
        this.setState({
            trabajo,
            title: trabajo.title,
            description: trabajo.description
        })
    }


    async componentDidMount(){
       
        this.getTrabajoInfo()
    }

    switchEditForm = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    submit = async e =>{
        e.preventDefault()
        await updateTrabajo(
            this.props.trabajoId,
            this.state.trabajos,
            this.state.title,
            this.state.description
        )
        this.getTrabajoInfo()
    }

    handleInput= ( { target : {name,value}}) =>{
        this.setState({[name] : value})
    }

    render(){
        return(


        <>
        <div>
         <Box bg="tomato" w="100%" p={4} color="black">
           <Box bg="tomato" w="100%" p={4} color="black">
          <Box bg="tomato" w="100%" p={4} color="black">

    
          <h1>{this.state.trabajos.title}</h1>
          <p>{this.state.trabajos.description}</p>
        
            <button onClick={this.switchEditForm}>Edit Project</button>
        {this.state.edit && (
          <form onSubmit={this.submit}>
            <div>
              <label htmlFor="title">
                Project title
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.handleInput}
                />
              </label>
              <label htmlFor="description">
                Project description
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                  value={this.state.description}
                  onChange={this.handleInput}
                />
              </label>
              <input type="submit" value="Update project" />
            </div>
          </form>
        )}
</Box>
          </Box>
</Box>
</div>
        </>
        )
    }
}

export default withRouter(TrabajoDetail);