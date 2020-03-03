import React, { useContext } from 'react'
import { Stack, Box, Text, Image, Badge, Flex, Avatar } from '@chakra-ui/core'
import { MyContext } from '../context'

export default function Project({ project }) {
  const context = useContext(MyContext)
  const { loggedUser } = context.state
  return (
    <Stack
      boxShadow="lg"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      bg="white"
      spacing={5}
      p={3}
    >
      <Image src={project.photoURL} alt={project.name} />
      <Flex>
        <Avatar name={project.author.name} src={project.author.photoURL} />
        <Box ml="3">
          <Text textAlign="left" fontWeight="bold">
            @
            {loggedUser && project.author.name === loggedUser.name
              ? 'Me'
              : project.author.name}
          </Text>
          <Text fontSize="sm">Publicado :{project.created}</Text>
        </Box>
      </Flex>
    </Stack>
  )
}