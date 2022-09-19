import styles from '../styles/Home.module.css';
import { Center, useMediaQuery } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Backgroundimgvideo from '../components/Backgroundimgvideo';
import Slider from '../components/Slider/Slider';
//
export default function Home(data) {
  const topPlayers = data.top50Players;
  console.log(topPlayers.assists);
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
      return `Ja Morant`;
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

// export async function getStaticProps() {
//   const top50Players = await fetchApi(
//     `${baseUrl}/api/basketball/tournament/132/season/38191/best-players/regularseason`
//   );
//   return {
//     props: {
//       top50Players: top50Players?.topPlayers,
//     },
//   };
// }
