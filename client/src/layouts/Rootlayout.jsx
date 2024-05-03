import React from 'react';
import { Box, Grid, ChakraProvider, Container } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Main from '../components/Main';
import Path from '../components/Path';

const Rootlayout = () => {
  return (
    <ChakraProvider>
      <Grid minH="100vh" templateColumns="200px 1fr 200px">
      <Box height="100%">
      <Sidebar />
      </Box>
        
        
        <Box as="main" marginLeft="-96px">
        <Path />
        <Box>
        <div style={{"overflow-y" : "scroll", height:"100vh" }}>
        <Main />
        </div>
        
        </Box>
        </Box>
        <Box height="100%">
        <Rightbar />
        </Box>
        
      </Grid>
    </ChakraProvider>
  );
};

export default Rootlayout;
