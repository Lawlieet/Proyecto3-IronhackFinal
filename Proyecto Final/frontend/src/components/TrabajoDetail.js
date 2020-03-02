import React, { useContext, Component } from 'react'
import { Stack, Box, Text, Image, Badge, Flex, Avatar } from '@chakra-ui/core'
import { MyContext } from '../context'
import {   getAllTrabajos  } from '../services/trabajo'


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
                <h1></h1>

            </>
        )
    }
}