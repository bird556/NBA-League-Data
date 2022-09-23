import styles from '../styles/Home.module.css';
import { Center, useMediaQuery } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Backgroundimgvideo from '../components/Backgroundimgvideo';
import Slider from '../components/Slider/Slider';
//
export default function Home() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 1920px)',
    '(display-mode: browser)',
  ]);

  const [isLargerThanMID, isDisplayingInBrowserMID] = useMediaQuery([
    '(min-width: 1280px)',
    '(display-mode: browser)',
  ]);

  function determineText() {
    if (isLargerThanHD) {
      // return `Lebron James`;
      return `Home`;
    } else if (isLargerThanMID) {
      return (
        <>
          <h1>Hello</h1>
        </>
      );
    } else {
      return `Lebron #23`;
    }

    return isDisplayingInBrowser
      ? 'rendering in a browser'
      : 'rendering on something else, e.g. PWA';
  }
  return (
    <>
      <Backgroundimgvideo />

      <div className={styles.container}>
        <div className="home">
          <Center>
            <h1>{determineText()}</h1>
          </Center>
        </div>
      </div>
    </>
  );
}
