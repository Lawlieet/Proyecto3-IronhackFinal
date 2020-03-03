import React,{ useContext} from 'react'
import { Stack, Box, Text, Image, Badge, Flex, Avatar } from '@chakra-ui/core'
import {MyContext} from '../context'


export default function Trabajo( { trabajo }){
    const context = useContext(MyContext)
  const { loggedUser } = context.state

    return(
        <Stack
            boxShadow="lg"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            bg="white"
            spacing={5}
            p={3}
        >
        <Flex>
            <h1>{ trabajo }</h1>
            
            
            <Text></Text>





        </Flex>


        </Stack>
    )



}
