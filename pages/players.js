import { Center } from '@chakra-ui/react';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Image } from '@chakra-ui/react';
function players() {
  return (
    <>
      <Image
        src="/bron.jpg"
        alt="Ja Morant"
        className="backgroundimg"
        fallbackSrc="/1 copy.jpg"
      />

      <div className={styles.container}>
        <div className="home">
          <Center>
            <h1>Players</h1>
          </Center>
        </div>
      </div>
    </>
  );
}

export default players;
