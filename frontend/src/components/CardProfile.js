import React from 'react'
import { Stack, Heading, Box, Image,Flex } from '@chakra-ui/core'
import TrabajoList from './TrabajoList'
import{ Link} from 'react-router-dom'

export default function CardProfile({  user }) {
  return (
  
  <Box
  w="100vw"
  mt="10vh"
  > 
    
      <Stack align="center" spacing={6} mt="2vh" mr="2vw" mb="3vh" ml="2vw">
        <Heading as="h2" size="xl">Me da gusto verte :D</Heading>
       
        <Heading as="h3" size="lg"> {user.name} </Heading>
        {/* {console.log("User",user)} 
         <Heading as="h3" size="lg"> {user._id} </Heading>
        */}
        {/* {console.log("trabajos",trabajos,"nada")} */}
        {/* <p>{user._id}</p> */}
        
        <Image
          rounded="full"
          backgroundColor="black"
          objectFit="cover"
          size="250px"
          src={user.photoURL}
          alt={user.name}
        />
        
      </Stack>
          <Box>
        
            
            <Stack  align="center" spacing={6} mt="5vh" mr="5vw" mb="3vh" ml="5vw">
<Heading mt="5vh">¿Quieres Realizar algun servicio?</Heading>
              <Box p={5} shadow="md"  flex="1" rounded="md" borderWidth="1px" as={Link} to='/publicarTrabajos'>
                <Heading fontSize="md">Brinda un Servicio</Heading>
              </Box>

                <TrabajoList/>
            </Stack>
          </Box>
        
        <Flex
          w="100vw"
          minH="100vh"
          flexWrap="wrap"
          direction="column"
          align="start"
        >
      </Flex>
         
      
  </Box>


  )
}