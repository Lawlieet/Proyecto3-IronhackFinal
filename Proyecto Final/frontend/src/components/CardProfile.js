import React from 'react'
import { Stack, Heading, Box, Image } from '@chakra-ui/core'

export default function CardProfile({ props, user, history }) {
  return (
    <Box
      p={5}
      w="450px"
      mt="10vh"
    >
      <Stack spacing={1}>
        <Heading as="h2" size="xl">Me da gusto verte</Heading>
        <Heading as="h3" size="lg"> {user.name} </Heading>
        {console.log("User",user)}
        {console.log("trabajos",history,"nada")}

        <Image
          rounded="full"
          backgroundColor="black"
          objectFit="cover"
          size="250px"
          src={user.photoURL}
          alt={user.name}
        />
      </Stack>

    </Box>
  )
}