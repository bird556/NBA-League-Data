import { Center } from '@chakra-ui/react';
import styles from '../styles/Home.module.css';
import { Image } from '@chakra-ui/react';

function summerleague() {
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
