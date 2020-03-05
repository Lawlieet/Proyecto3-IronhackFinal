import React ,{ useContext}from 'react'
import {
  Stack,
  Heading,
  Box,
  Button,
  Text,
  Flex,
  Image
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import { Link } from 'react-router-dom'

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
          variant="outline"
          align="center"
        >
          <Flex textAlign="center" mt="2%" isInline spacing={10} align="center">
            <Box textAlign="center"  align="center" >
              {!context.state.isLogged && (
              <>
                <Stack w="100vw"   align="center">
                    <Box    p={5} shadow="md" borderWidth="1px"  rounded="md">
                      <Heading mb={1} size="sm" textAlign="center" align="center" >Te sientes deprimido, triste o con algun problema, busca algun especialista que te pueda ayudar</Heading>

                      <Button  _hover={{ bg: "green.200" }}                
                          size="sm" color="white" backgroundColor="#444" mt="24px" onClick={() => go('/signup')}>
                        Registrate

                      </Button>

                      <Heading mb={1} size="sm" textAlign="center" align="center"> o </Heading>


                      <Button  _hover={{ bg: "green.200" }}                
                          size="sm" color="white" backgroundColor="#444"  onClick={() => go('/ayuda')}>
                        Busca Ayuda Directa 

                      </Button>



                    </Box>
                </Stack>
              </>
              )}
              {context.state.isLogged && (
              <Button  _hover={{ bg: "green.200" }}
                size="sm" color="white" mt="2%" backgroundColor="#444" onClick={() => go('/profile')}>
                Ir al perfil
              </Button>
              )}
            </Box>
          </Flex>
        </Stack>
        
 
          {context.state.isLogged && (
            <>
            <Stack  mt="2%" align="center">
        <Heading
         
          size="sm">o</Heading>
        </Stack>
          <Stack w="100vw"  mt="2%" align="center">
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
        <Stack  mt="2%" align="center">
          
          <Flex  alignContent="cennter">
          <Image 
            size="240px"
            bg="#FFF"
            src="https://stickershop.line-scdn.net/stickershop/v1/product/4863808/LINEStorePC/main.png;compress=true"
            alt="help"
            
          />
          </Flex>
          </Stack>

          <Box  mt="2%" align="center">
          <Flex  flexDirection="column" alignContent="cennter">
        
          <Heading 
            mt="4%"
            fontSize="2xl" 
          >¿Para que Sirve?</Heading>
           <Heading 
            mt="4vh"
            as="h1" size="2xl"
          >I HERE YOU</Heading>
          </Flex>
        </Box>

        <Stack w="100vw"  mt="1%" align="center">
        <Flex  textAlign="center" w="80vw" flexDirection="column" bg="#626C6D" alignContent="cennter">
        
          <Text mt="1%" color="#000" > 
          Te ah pasado que en ocaciones no sabes que hacer con tus problemas ya sea personales, familiares o que estas pasando por un mal momento y no tienes a quien acudir?
          </Text>
          <Text mt="2%" color="#000" >  
          I Hear You es una aplicación sin fines de lucro en la cual encontraras algun especialista el cual pueda atenderte o asesorarte, ya sea personalmente o via telefonica.

          </Text>
          <Text mt="2%" color="#000"  fontSize="5xl"> 
            Eres Increible Nunca Lo Olvides
          </Text>
          </Flex>
        </Stack>

        <Button  _hover={{ bg: "green.200" }}                
          size="sm" color="white" backgroundColor="#444" mt="10px" onClick={() => go('/allTrabajos')}>
              Ir a los trabajos Disponibles
        </Button>
            
     




      </Stack>
</Box>
    </React.Fragment>
      )
    }}
    </MyContext.Consumer>
  )
}

export default Home