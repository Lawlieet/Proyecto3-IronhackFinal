import React, { useContext, Component } from 'react'
import { withRouter } from "react-router-dom";
import { Stack, Box, Text, Image, Badge, Flex, Avatar, SimpleGrid } from '@chakra-ui/core'
import { MyContext } from '../context'
import SERVICE_TRABAJO from '../services/trabajo'
import trabajo from '../pages/trabajo'
import { Link } from "react-router-dom";

class TrabajoDetail extends Component {

    state = {
        trabajo:{},
        title:"",
        description:"",
        edit:false
    }


    async getTrabajoInfo(){
        const  trabajo  = await SERVICE_TRABAJO.getTrabajo(this.props.trabajoId)
        this.setState({
            trabajo,
            title: trabajo.title,
            description: trabajo.description
        })
    }


    async componentDidMount(){
        console.log("Mount")  
        this.getTrabajoInfo()

        // SERVICE_TRABAJO.getAllTrabajos()
      
        // .then( ( {data} ) => {
        //     this.setState(
        //     {
        //         trabajos: data 
                
        //     }
        //     )
        // } )
        // .catch(err => console.error(err))

    }

    switchEditForm = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    submit = async e =>{
        e.preventDefault()
        await SERVICE_TRABAJO.updateTrabajo(
            this.props.trabajoId,
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
            
            <h1>Hello{this.state.trabajo.title}</h1>
            <p>{this.state.trabajo.description}</p>
        
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



        </>
        )
    }
}

export default withRouter(TrabajoDetail);