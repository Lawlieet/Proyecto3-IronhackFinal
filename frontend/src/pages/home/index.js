import React ,{ useContext, useReducer}from 'react'
import {
  Stack,
  Heading,
  Box,
  Button,
  Text,
  Flex,
  Image,List, ListItem, ListIcon
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import { Link } from 'react-router-dom'
import TrabajoList from '../../components/TrabajoList'


function Home({ history,user }) {
  const go = path => history.push(path)
  const context = useContext(MyContext)
  
  return (
    <MyContext.Consumer>
      {context => {
        return (
      <React.Fragment>


<Box w="100vw">
  
        <Stack
          mt="10vh"
          textAlign="center"
        
          _hover={{ bg: "green.200" }}
          backgroundColor="#E6F0F2"
          variant="outline"
          align="center"
        >
          <Flex textAlign="center" isInline spacing={10} align="center">
            <Box textAlign="center"  align="center" >
              {!context.state.isLogged && (
              <>
                <Stack   spacing={8} mt="3vh"  mb="5vh"  align="center">
                    <Box    p={5} shadow="md" borderWidth="1px"  rounded="md">
                      <Heading mb={1} size="sm" textAlign="center" align="center" >Te sientes deprimido, triste o con algun problma, busca algun especialista que te pueda ayudar</Heading>

                      <Button  _hover={{ bg: "green.200" }}                
                          size="sm" color="white" backgroundColor="#444" mt="24px" onClick={() => go('/signup')}>
                        Registrate

                      </Button>

                    </Box>
                </Stack>
              </>
              )}
              {context.state.isLogged && (
              <Button  _hover={{ bg: "green.200" }}
                size="sm" color="white" mt="24px" backgroundColor="#444" onClick={() => go('/profile')}>
                Ir al perfil
              </Button>
              )}
            </Box>
          </Flex>
        </Stack>
        
 
          {context.state.isLogged && (
            <>
            <Box textAlign={[ 'left', 'center' ]}>
        <Heading
          mt="5vh"
          ml="5vw"
          size="sm">¿Que deseas realizar?</Heading>
        </Box>
          <Stack spacing={8} mt="5vh" mr="5vw" mb="3vh" w="90vw" ml="5vw" align="center">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
            <Heading fontSize="md" as={Link} to='/publicarTrabajos'>Publicar Trabajo</Heading>
          </Box>
          </Stack>
          </>
          )}
        <Stack
          
          
          backgroundColor="softpink"
          textAlign="center"
          w="100vw"
          alignItems="center"
        >
        <Box  mt="8%" align="center">
          
          <Flex   bg="#999" alignContent="cennter">
          <Image 
            size="300px"
            bg="#FFF"
            src="https://stickershop.line-scdn.net/stickershop/v1/product/4863808/LINEStorePC/main.png;compress=true"
            alt="help"
            
          />
          </Flex>
          </Box>

          <Box  mt="8%" align="center">
          <Flex  flexDirection="column" bg="#999" alignContent="cennter">
        
          <Heading 
            mt="4vh"
            fontSize="xl"
          >¿Para que Sirve?</Heading>
           <Heading 
            mt="4vh"
            as="h1" size="2xl"
          >I HERE YOU</Heading>
          </Flex>
        </Box>

        <Box w="100vw" mr="1vw" mt="8%" align="center">
        <Flex  w="80vw" flexDirection="column" bg="#999" alignContent="cennter">
        
          <Text mt="3vh" color="#2D3748" > 
          Te ah pasado que en ocaciones no sabes que hacer con tus problemas ya sea personales, familiares o que estas pasando por un mal momento y no tienes a quien acudir?
          </Text>
          <Text mt="3vh" color="#2D3748" >  
          I Hear You es una aplicación sin fines de lucro en la cual encontraras algun especialista el cual pueda atenderte o asesorarte, ya sea personalmente o via telefonica.

          </Text>
          <Text mt="3vh" color="#2D3748"> 
            Eres Increible Nunca Lo Olvides
          </Text>
          </Flex>
        </Box>

            { user}
            <h1>Trabajos HOME </h1>
                <TrabajoList/>

     




      </Stack>
</Box>
    </React.Fragment>
      )
    }}
    </MyContext.Consumer>
  )
}

export default Home