import React, { Component } from "react";
import  SERVICE_TRABAJO from '../services/trabajo'
import {deleteTrabajo} from '../services/Delete'

import {
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
  } from "@chakra-ui/core";


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


    render(){
        return(
           <Box mt="75px" >
            
             
                {this.state.trabajos.map((trabajo, idx) =>(
                
                    <AccordionItem key={idx}>
                    <AccordionHeader  _hover={{ bg: "green.200" }} _expanded={{ bg: "green.200", color: "black" }}>
    <Box flex="1" textAlign="left"  >
    {trabajo.title}
    </Box>
    <AccordionIcon />
  </AccordionHeader>
                    <AccordionPanel   _expanded={{ bg: "#48BB78", color: "black" }}>                                             
                       <h2> {trabajo.description} </h2>  
                        {/* <button onClick={() => this.deleteTrabajo(trabajo._id)}>╳</button> */}                                        
                     </AccordionPanel>
                    </AccordionItem>
                ) )}

        
            </Box>
        )
    }


}

export default TrabajoList