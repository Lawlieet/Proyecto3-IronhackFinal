import React from 'react'
import { Box, Stack, Button, Heading, Text } from '@chakra-ui/core'
function Form({ width, children, title, submit, bgColor }) {
  return (
    <Box
      backgroundColor={bgColor}
      onSubmit={submit}
      as="form"
      w={width || '350px'}
      boxShadow="xl"
    >
      <Stack spacing={8} p={8}>
        <Heading textAlign="center" as="h1">
          {title}
        </Heading>
          {children}
        <Button
          backgroundColor="#E6F0F2"
          color="black"
          type="submit"
          variantColor="green"
          
        >
        <Text>Confirmar</Text>
        </Button>
      </Stack>
    </Box>
  )
}
export default Form