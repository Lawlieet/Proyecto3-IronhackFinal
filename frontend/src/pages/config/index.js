import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../context'
import { 
  Flex,
  Box,
  Heading,
  Stack,
  Text,
  Input,
  Image,
  Button
} from '@chakra-ui/core'

export default function Config({ history }) {
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
                mt="5vh"
                ml="5vw"
              >
                <Box>
                  <Heading mt="5vh">Cambiar Foto de Perfil</Heading>
                  <Text>La foto de Perfil debe ser tuya, en caso contrario tu cuenta sera dada de baja.</Text>
                  <Stack spacing={8} mt="5vh" mr="5vw" mb="3vh" ml="5vw" align="center">
                    <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                      <Text fontSize="md">Actualizar foto de perfil.</Text>
                      <Button type="file" to="/perfil" onChange={context.uploadPhoto}  accept="image/*" name="photoURL" multiple = {false} ></Button>
                      <Box>
                        <Image
                        rounded="full"
                        backgroundColor="#000"
                        size="150px"/>
                      </Box>
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