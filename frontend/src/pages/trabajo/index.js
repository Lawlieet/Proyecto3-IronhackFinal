// import React, { useEffect, useContext } from 'react'
// // import {
// //   Stack,
// //   Heading,
// //   Box,
// //   Flex,
// //   FormControl,
// //   InputGroup,
// //   InputLeftAddon,
// //   Input,
// //   Icon,
// //   useToast
// // } from '@chakra-ui/core'

// import TrabajoDetail from '../../components/TrabajoDetail'

// const  Trabajo  = props =>{
//     return(
//         <>
//             <h2>Trabajo detalles</h2>
//             <TrabajoDetail trabajoId= {props.match.params.trabajoId}></TrabajoDetail>   
           
//         </>

//     )
// }

// export default Trabajo

import React,{ useContext} from 'react'
import { Stack, Box, Text, Image, Badge, Flex, Avatar } from '@chakra-ui/core'
import {MyContext} from '../../context'
import TrabajoDetail from '../../components/TrabajoDetail'
const Trabajo = props =>{
    
    const context = useContext(MyContext)
    console.log(context)
    const { loggedUser } = context.state
    return(
        <Stack
            boxShadow="lg"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            bg="white"
            spacing={5}
            p={3}
        >
        <Flex>
            <Text>Trabajo Detalles</Text>
            <TrabajoDetail trabajoId = {props.match.params.trabajoId} />
        </Flex>
        </Stack>
    )
}
export default Trabajo




