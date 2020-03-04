import React, { Component } from "react";
import { Link } from "react-router-dom";
import  SERVICE_TRABAJO from '../services/trabajo'
import {deleteTrabajo} from '../services/Delete'
// import CardProfile from '../components/CardProfile.js'
//import {Box, AccordionPanel,AccordionItem,AccordionIcon ,AccordionHeader,ListIcon,Heading,Text} from '@chakra-ui/core'
//import CardProfile from '../components/CardProfile'


class TrabajoList extends Component {
    state = {
        trabajos:[],
    }
    
    async getTrabajoInfo(){
        const { trabajos } =  await SERVICE_TRABAJO.getAllTrabajos()
        this.setState({
            trabajos
        })       
    }

// 
    async componentDidMount(){
        this.getTrabajoInfo()
    }

    async deleteTrabajo (trabajoId){
        await deleteTrabajo(trabajoId)
        this.getTrabajoInfo()
        
    }


     breakpoints = ["30em", "48em", "62em", "80em"];
// aliases

    // async SERVICE_TRABAJO.DELETE (projectId) {
    //     await SERVICE_TRABAJO(projectId);
    //     this.getProjectsInfo();
    //   }

    render(){
        return(
           
            <ul> 
             
                {this.state.trabajos.map((trabajo, idx) =>(
                
                    
                    <li  key={idx}   _expanded={{ bg: "#48BB78", color: "black" }}>
                     
                        
                        <Link to={`/trabajo/${trabajo._id}`}>{trabajo.title}</Link>
                        <button onClick={() => this.deleteTrabajo(trabajo._id)}>╳</button>
                    
                    
                    </li>
                   
                ) )}

            </ul>
        )
    }


}

export default TrabajoList