import styles from '../styles/Home.module.css';
import { Center, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// pages/404.js
export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, [router]);
  return (
    <>
      <div className="blackBackground"></div>
      <Image
        src="/error.jpg"
        alt="Ja Morant"
        className="backgroundimg"
        fallbackSrc="/1 copy.jpg"
      />
      <div className={styles.container}>
        <div className="home">
          <Center h="95vh">
            <h1>404 - Page Not Found</h1>
          </Center>
        </div>
      </div>
    </>
  );
}
