import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import CardProfile from '../../components/CardProfile'
import { 
  Flex,
  Box,
  Heading,
  Stack
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import Trabajo from '../../components/Trabajo'


export default function Profile({ history }) {
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  return (
    <MyContext.Consumer>
      {context => {
        const { isLogged, loggedUser } = context.state
        if (isLogged)
          return (
            <React.Fragment>
              <Flex
                w="100vw"
                minH="100vh"
                flexWrap="wrap"
                direction="column"
                align="start"
              >
                <CardProfile user={loggedUser} history={history} />
                <Box>
                  <Heading mt="5vh">¿Quieres Realizar algun servicio?</Heading>
                  <Stack  align="center" spacing={8} mt="5vh" mr="5vw" mb="3vh" ml="5vw">
                    <Box p={5} shadow="md"  flex="1" rounded="md" borderWidth="1px" as={Link} to='/publicarTrabajos'>
                      <Heading fontSize="md">Brinda un Servicio</Heading>
                    </Box>
                  </Stack>
                </Box>
              </Flex>
              <Flex
                w="100vw"
                minH="100vh"
                flexWrap="wrap"
                direction="column"
                align="start"
              >
              
                <Trabajo  />
              
              </Flex>


            </React.Fragment>
          )
        else return <>Loading...</>
      }}
    </MyContext.Consumer>
  )
}