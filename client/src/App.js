import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import all from 'react-router-dom'

import Path from "./components/Path";
import Main from "./components/Main";
import Rootlayout from './layouts/Rootlayout';
import { Box } from '@chakra-ui/react';
import bgImage from './images/bgimg.jpg'

function App() {
  return (
    <Box bgImage={bgImage}>
      <Rootlayout />
    </Box>
  );
}

export default App;
