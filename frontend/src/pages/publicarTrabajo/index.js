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

function PublicarTrabajo({ history }) {
  const toast = useToast()
  const context = useContext(MyContext)
  useEffect(() => {
    if (!context.state.isLogged) return history.push('/login')
  })
  const submit = e => {
    context
      .handleSignupSubmitTrabajo(e)
      .then(response => {
        toast({
          title: 'Servicio Publicado',
          description: " Gracias por ayudar",
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        history.push('/publicarTrabajos')
      })
      .catch(err => {
        toast({
          title: 'Algo salio mal.',
          description: 'No se pudo registrar tu trabajo :c',
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
              <Heading mb={1} size="sm">Publica un Trabajo ^^</Heading>
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
            <Form submit={submit} bgColor="white" title="Trabajo">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    placeholder="Titulo"
                    name="title"
                    type="text"
                    value={context.state.formTrabajo.title}                    
                    onChange={context.handleSignupInputTrabajo}
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
                    value={context.state.formTrabajo.description}                    
                    onChange={context.handleSignupInputTrabajo}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftAddon children={<Icon name="minus" />} />
                  <Input
                    
                    placeholder="CEDULA"
                    name="cedula"
                    type="text"
                    value={context.state.formTrabajo.cedula}
                    onChange={context.handleSignupInputTrabajo}
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

export default PublicarTrabajo