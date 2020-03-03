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
import TrabajoList from "../../components/TrabajoList"


function Home({ history }) {
  const go = path => history.push(path)
  const context = useContext(MyContext)
  
  return (
    <MyContext.Consumer>
      {context => {
        return (
      <React.Fragment>
        <Stack
          mt="15vh"
          ml="5vw"
          mr="5vw"
          textAlign="center"
          w="90vw"
          _hover={{ bg: "green.200" }}
          backgroundColor="#E6F0F2"
          variant="outline"
        >
          <Flex>
            <Box>
              <Heading mb={1} size="sm">Te sientes deprimido, triste o con algun problma, busca algun especialista que te pueda ayudar</Heading>
              {!context.state.isLogged && (
              <Button  _hover={{ bg: "green.200" }}                
                 size="sm" color="white" backgroundColor="#444" mt="24px" onClick={() => go('/signup')}>
                Help
              </Button>
              )}
              {context.state.isLogged && (
              <Button  _hover={{ bg: "green.200" }}
                size="sm" color="white" mt="24px" backgroundColor="#444" onClick={() => go('/profile')}>
                Help
              </Button>
              )}
            </Box>
          </Flex>
        </Stack>
        <Box>
        <Heading
          mt="5vh"
          ml="5vw"
          size="sm">¿Que deseas realizar?</Heading>
        </Box>
          {!context.state.isLogged && (
          <>
          <Stack spacing={8} mt="5vh" mr="5vw" mb="3vh" ml="5vw" align="center">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" >
            <Heading  fontSize="md" as={Link} to='/login'>Buscar</Heading>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
            <Heading fontSize="md" as={Link} to='/login'>Publicar un Servicio</Heading>
          </Box>
          </Stack>
          </>
          )}
          {context.state.isLogged && (
            <>
          <Stack spacing={8} mt="5vh" mr="5vw" mb="3vh" ml="5vw" align="center">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" >
            <Heading  fontSize="md" as={Link} to='/login'>Buscar</Heading>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
            <Heading fontSize="md" as={Link} to='/login'>Publicar un Servicio</Heading>
          </Box>
          </Stack>
          </>
          )}
        <Stack
          
          ml="5vw"
          mr="5vw"
          backgroundColor="softpink"
          textAlign="center"
          w="90vw"
        >
        <Box mt="4vh">
          <Image
            rounded="full"
            ml="32vw"
            size="100px"
            src="https://stickershop.line-scdn.net/stickershop/v1/product/4863808/LINEStorePC/main.png;compress=true"
            alt="Casa"
          />
          <Heading 
            mt="4vh"
            fontSize="xl"
          >¿Para que Sirve?</Heading>
           <Heading 
            mt="4vh"
            as="h1" size="2xl"
          >I HERE YOU</Heading>
        </Box>
        <Box>
          <Text mt="3vh" color="#2D3748"> 
          Te ah pasado que en ocaciones no sabes que hacer con tus problemas ya sea personales, familiares o que estas pasando por un mal momento y no tienes a quien acudir?
          </Text>
          <Text mt="3vh" color="#2D3748">  
          I Hear You es una aplicación sin fines de lucro en la cual encontraras algun especialista el cual pueda atenderte o asesorarte, ya sea personalmente o via telefonica.

          </Text>
          <Text mt="3vh" color="#2D3748"> 
            Eres Increible Nunca Lo Olvides
          </Text>
        </Box>
            <h1>Trabajos HOME </h1>
            <TrabajoList/>
        
      </Stack>
    </React.Fragment>
      )
    }}
    </MyContext.Consumer>
  )
}

export default Home