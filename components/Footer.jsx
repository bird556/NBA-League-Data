import React from 'react';
import { Center, Square, Circle } from '@chakra-ui/react';
const footer = () => {
  const d = new Date().getFullYear();
  return (
    <Center>
      <footer>
        <p>Copyright &#169; {d} Rashaun Bennett All Rights Reserved</p>
      </footer>
    </Center>
  );
};
export default footer;
