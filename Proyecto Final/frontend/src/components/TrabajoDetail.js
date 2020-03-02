import React, { useContext, Component } from 'react'
import { Stack, Box, Text, Image, Badge, Flex, Avatar, SimpleGrid } from '@chakra-ui/core'
import { MyContext } from '../context'
import {   getAllTrabajos  } from '../services/trabajo'
import trabajo from '../pages/trabajo'
import { Link } from "react-router-dom";

export default class TrabajoDetail extends Component {

    state = {
        trabajos:[]
    }

    componentDidMount(){
        console.log("Mount")
        getAllTrabajos()
        .then( ( {data} ) => {
            this.setState(
            {
                trabajos: data 
            }
            )
        } )
        .catch(err => console.error(err))

    }


    render(){
        return(
        <>
            <h1>Cosas para mostrar</h1>
            <SimpleGrid minChildWidth="250px" spacing={8}>
                {! this.state.trabajos && <Text>No hay nada </Text>  }
            
             { this.state.trabajos && this.state.trabajos.map((trabajo ,idx ) => (
                    <li key={idx}>
                        <Link> { trabajo.cedula  }  </Link>
                    </li>
                ))
            }
            
            </SimpleGrid>
        
        
        </>
        )
    }
}