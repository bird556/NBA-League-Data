import { Center } from '@chakra-ui/react';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Image } from '@chakra-ui/react';
function playoffs() {
  return (
    <>
      <div className="blackBackground"></div>
      <Image
        src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-04/NBA-playoff-schedule_1.jpg?itok=Qe6RwVII"
        alt="Ja Morant"
        className="backgroundimg"
        fallbackSrc="/1 copy.jpg"
      />
      <div className={styles.container}>
        <div className="home" data-aos="fade-in">
          <Center>
            <h1>Playoffs</h1>
          </Center>
        </div>
      </div>
    </>
  );
}

export default playoffs;
