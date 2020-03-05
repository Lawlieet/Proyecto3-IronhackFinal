import React from 'react';
import { Link } from "react-router-dom";
import  { Box } from '@chakra-ui/core'

function NotFound() {
  return (
    <Box>
      <h2>Not found</h2>
      <h2>Not found</h2>
      <h2>Not found</h2>
      <h2>Not found</h2>
      <h2>Not found</h2>
      <h2>Not found</h2>
      <h2>Not found</h2>
      <h2>Not found</h2>
      <h2>Not found</h2>
      <h2>Not found</h2>
      <h2> Aquí no existe nada  </h2>
      <h1> Da click ----><Link to={'/'}>Go BACK</Link>  </h1>

    </Box>
  );
}

export default NotFound;
