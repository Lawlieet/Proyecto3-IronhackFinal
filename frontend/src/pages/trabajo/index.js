import React, { useEffect, useContext } from 'react'
// import {
//   Stack,
//   Heading,
//   Box,
//   Flex,
//   FormControl,
//   InputGroup,
//   InputLeftAddon,
//   Input,
//   Icon,
//   useToast
// } from '@chakra-ui/core'

import TrabajoDetail from '../../components/TrabajoDetail'

const  Trabajo  = props =>{
    return(
        <>
            <h2>Trabajo detalles</h2>
            <TrabajoDetail trabajoId= {props.match.params.trabajoId}></TrabajoDetail>   
           
        </>

    )
}

export default Trabajo