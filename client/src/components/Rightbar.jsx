import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg'
function Rightbar() {
  return (
    <Box position="relative" left="128px" top="48px">
      <Image src={img8} width="40px" height="48px" my="12px" />
      <Image src={img9} width="40px" height="48px" my="12px" />
      <Image src={img10} width="40px" height="48px" my="12px" />
    </Box>
  )
}

export default Rightbar
