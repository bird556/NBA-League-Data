import { Center } from '@chakra-ui/react';
import React from 'react';
import styles from '../styles/Home.module.css';
function standings() {
  return (
    <div className={styles.container}>
      <div className="home">
        <Center>
          <h1>Standings</h1>
        </Center>
      </div>
    </div>
  );
}

export default standings;
