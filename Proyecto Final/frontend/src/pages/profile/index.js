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
                wrap="wrap"
                direction="column"
                align="start"
              >
                <CardProfile user={loggedUser} history={history} />
                <Box>
                  <Heading mt="5vh">¿Quieres Realizar algun servicio?</Heading>
                  <Stack spacing={8} mt="5vh" mr="5vw" mb="3vh" ml="5vw" align="center">
                    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md" as={Link} to='/publicar'>
                      <Heading fontSize="md">Brinda un Servicio</Heading>
                    </Box>
                  </Stack>
                </Box>
              </Flex>
            </React.Fragment>
          )
        else return <>Loading...</>
      }}
    </MyContext.Consumer>
  )
}