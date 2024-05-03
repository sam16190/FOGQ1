import { Button, Box } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Box mt="12px">
      <Button
        width="160px"
        fontSize="12px"
        mx="8px"
        fontFamily="sans-serif"
        color="white"
        bgColor="transparent"
        borderWidth="1px"
        borderColor="whitesmoke"
        _hover={{ color: 'black', bgColor: 'white' }}
      >
        JOIN
      </Button>
      <Button
        width="160px"
        fontSize="12px"
        mx="8px"
        fontFamily="sans-serif"
        color="white"
        bgColor="transparent"
        borderWidth="1px"
        borderColor="whitesmoke"
        _hover={{ color: 'black', bgColor: 'white' }}
      >
        SPECTATE
      </Button>
      <Button
        width="160px"
        fontSize="12px"
        mx="8px"
        fontFamily="sans-serif"
        color="white"
        bgColor="transparent"
        borderWidth="1px"
        borderColor="whitesmoke"
        _hover={{ color: 'black', bgColor: 'white' }}
      >
        JOIN AS COMMANDER
      </Button>
      <Button
        width="160px"
        fontSize="12px"
        mx="8px"
        fontFamily="sans-serif"
        color="white"
        bgColor="transparent"
        borderWidth="1px"
        borderColor="whitesmoke"
        _hover={{ color: 'black', bgColor: 'white' }}
      >
        13672
      </Button>
    </Box>
  );
};

export default Navbar;
