import styles from '../styles/Home.module.css';
import { Center, Image } from '@chakra-ui/react';
// pages/500.js
export default function Custom500() {
  return (
    <>
      <div className="blackBackground"></div>
      <Image
        src="/error.jpg"
        alt="Steph Curry"
        className="backgroundimg"
        fallbackSrc="/error.jpg"
      />
      <div className={styles.container}>
        <div className="home">
          <Center h="95vh">
            <h1>500 - Server-side error occurred</h1>
          </Center>
        </div>
      </div>
    </>
  );
}
