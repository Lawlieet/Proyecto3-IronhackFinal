import React, { useEffect, useContext } from 'react'
import {
  Stack,
  Heading,
  Box,
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon,
  useToast
} from '@chakra-ui/core'
import { MyContext } from '../../context'
import Form from '../../components/Form'
//Pagina publicar pasara a ser la de la creacion de Trabajo

function Publicar({ history }) {
  const toast = useToast()
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  const submit = e => {
    context
      .handleSignupSubmitServicio(e)
      .then(response => {
        toast({
          title: 'Servicio Publicado',
          description: "Servicio Registrado Gracias X Ayudar",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/servicios')
      })
      .catch(err => {
        toast({
          title: 'Algo salio mal.',
          description: 'No se pudo registrar tu Servicio :c',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      })
  }
  return (
    <MyContext.Consumer>
      {context => {
        return (
        <React.Fragment>
          <Stack
            mt="15vh"
            ml="5vw"
            mr="5vw"
            backgroundColor="white"
            textAlign="center"
            w="90vw"
          >
          <Flex>
            <Box>
              <Heading mb={1} size="sm">Gracias por tu Servicio</Heading>
            </Box>
          </Flex>
        </Stack>
        <Flex
            mt="10vh"
            w="100vw"
            h="90vh"
            align="center"
            justify="center"
          >
            <Form submit={submit} bgColor="white" title="Servicio">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    placeholder="Titulo"
                    name="title"
                    type="text"
                    value={context.state.formServicio.title}                    
                    onChange={context.handleSignupInputServicio}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                   
                    placeholder="Descripcion"
                    name="description"
                    type="text"
                    value={context.state.formServicio.description}                    
                    onChange={context.handleSignupInputServicio}
                  />
                </InputGroup>
              </FormControl>
            </Form>
          </Flex>
      </React.Fragment>
      )
    }}
    </MyContext.Consumer>
  )
}

export default Publicar