import { Center } from '@chakra-ui/react';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Image } from '@chakra-ui/react';
function player() {
  return (
    <>
      <div className="blackBackground"></div>
      <Image
        src="/bron.jpg"
        alt="Ja Morant"
        className="backgroundimg"
        fallbackSrc="/1 copy.jpg"
      />

      <div className={styles.container}>
        <div className="home">
          <div data-aos="fade-up">
            <Center h="95vh">
              <h1>Player</h1>
            </Center>
          </div>
        </div>
      </div>
    </>
  );
}

export default player;
