import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  IconButton
} from '@chakra-ui/core'
import { MyContext } from '../context'
import { Link } from 'react-router-dom'

function Navbar({ history }) {
  const go = path => history.push(path)
  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Flex
            pos="fixed"
            top={0}
            zIndex="99"
            backgroundColor="#626C6D"
            w="100vw"
            h="10vh"
            p={8}
            align="center"
            justify="space-between"
          >
            <Text 
            fontSize="xl" 
            fontWeight="bolder" 
            color="#E6F0F2" 
            background=""
            as={Link} to="/">
            I HEAR YOU
            </Text>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Menu"
                _hover={{ bg: "green.200" }}
                backgroundColor="#E6F0F2"
                variant="outline"
                icon="menu"
                size="lg"
                
              ></MenuButton>
              <MenuList backgroundColor="#E6F0F2" >
                {!context.state.isLogged && (
                  <>
                    <MenuItem  color="black" onClick={() => go('/')}>Inicio</MenuItem>
                    <MenuItem  color="black" onClick={() => go('/login')}>Inicia sesion</MenuItem>
                    <MenuItem  color="black" onClick={() => go('/signup')}>Registrate</MenuItem>
                    
                  </>
                )}
                {context.state.isLogged && (
                  <>
                    <MenuItem onClick={() => go('/')}>Inicio</MenuItem>
                    <MenuItem onClick={() => go('/profile')}>Perfil</MenuItem>
                    <MenuItem onClick={() => go('/config')}>Configuración</MenuItem>
                    <MenuItem onClick={() => go('/publicar')}>Públicar</MenuItem>
                    <MenuItem onClick={context.handleLogout}>Cerrar sesión</MenuItem>
                    <MenuItem onClick={ () => go ('/trabajos')}>Trabajo</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>
        )
      }}
    </MyContext.Consumer>
  )
}
export default withRouter(Navbar)