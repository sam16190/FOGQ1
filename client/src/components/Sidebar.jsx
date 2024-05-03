import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
function Sidebar() {
  return (
    <Box position="relative" top="80px" ml="18px">
      <CustomImage src={img1} text="BATTLEFIELD V" />
      <CustomImage src={img2} text="BATTLEFIELD 1" />
      <CustomImage src={img3} text="BATTLEFIELD 4" />
      <CustomImage src={img4} text="BATTLEFIELD HARDLINE" />
      <CustomImage src={img5} text="CAREER" />
      <CustomImage src={img6} text="WATCH" />
      <CustomImage src={img7} text="NEWS" />
    </Box>
  );
}


function CustomImage({ src, text }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Box position="relative" my="5px"  style={{ position: 'relative' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image src={src} width="40px" height="48px" _hover={{ filter: 'brightness(120%)' }} opacity={isHovered ? 0.8 : 1} />
      {isHovered && (
        <Text
          position="absolute"
          top="50%"
          left="45%"
          transform="translate(-50%, -50%)"
          bg="black"
          color="white"
          px="2"
          py="1"
          borderRadius="md"
          fontSize="8px"
        >
          {text}
        </Text>
      )}
    </Box>
  );
}


export default Sidebar;

