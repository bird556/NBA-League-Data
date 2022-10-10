import { Center } from '@chakra-ui/react';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Image } from '@chakra-ui/react';

function summerleague() {
  const formatAMPM = () => {
    let unixTimestamp = 1649804400;
    let date = new Date(unixTimestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const strTime = `${hours}:${minutes} ${ampm}`;

    return strTime;
  };

  return (
    <>
      <div className="blackBackground"></div>
      <Image
        src="https://media.gettyimages.com/photos/brandon-boston-jr-4-of-the-clippers-celebrates-during-the-game-the-picture-id1241810749?s=2048x2048"
        // src="/1.jpg"
        alt="Ja Morant"
        className="backgroundimg"
        fallbackSrc="/1 copy.jpg"
      />

      <div className={styles.container}>
        <div className="home">
          <Center>
            <h1>Summer League</h1>
          </Center>
        </div>
      </div>
    </>
  );
}

export default summerleague;
