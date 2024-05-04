import { Box,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
      axios.get('https://fogq-1.vercel.app/api/nav')
          .then(response => {
              setNavData(response.data);
          })
          .catch(err => {
              console.error('Error fetching navigation data:', err);
          })
  }, []);

  return (
      <Box position="relative" right="48px" my="8px" fontWeight="semibold">
          {navData.length > 0 && (
              <>
                  <Box display="inline-block" mx="60px">
                      <Text fontSize="12px" fontFamily="sans-serif" color="white">PLAYERS</Text>
                      <Text fontSize="12px" fontFamily="sans-serif" color="white">{navData[0].currentplayers} / {navData[0].totalplayers}</Text>
                  </Box>
                  <Box display="inline-block" mx="60px">
                      <Text fontSize="12px" fontFamily="sans-serif" color="white">PING</Text>
                      <Text fontSize="12px" fontFamily="sans-serif" color="white">{navData[0].ping}</Text>
                  </Box>
                  <Box display="inline-block" mx="60px">
                      <Text fontSize="12px" fontFamily="sans-serif" color="white">TICKRATE</Text>
                      <Text fontSize="12px" fontFamily="sans-serif" color="white">{navData[0].tickrate}</Text>
                  </Box>
              </>
          )}
      </Box>
  )
}

export default Menu;
