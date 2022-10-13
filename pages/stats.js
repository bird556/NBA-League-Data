import styles from '../styles/Home.module.css';
import { Image, Flex, Center, Text } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/.fetchApi';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PointsLeaders from '../components/Leaders/PointsLeaders';
import LeagueLeaders from '../components/LeagueLeaders';
import Slider from '../components/Slider/Slider';
export default function stats(data) {
  //NBA API OutDated Though lol 😒
  // const nba = require('nba-api-client');
  const topPlayers = data.top50Players;
  console.log(data);
  // let teamName = (team) => nba.getTeamID(team).Abbrev;
  //

  return (
    <>
      <div className="blackBackground"></div>
      <Image
        src="/1.jpg"
        alt="Ja Morant"
        className="backgroundimg"
        fallbackSrc="/1 copy.jpg"
      />

      <Slider data={topPlayers} />
      <div className={styles.container}>
        <div className="home">
          <Center>
            <h1>Stats</h1>
          </Center>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const top50Players = await fetchApi(
    `${baseUrl}/api/basketball/tournament/132/season/38191/best-players/regularseason`
  );
  return {
    props: {
      top50Players: top50Players?.topPlayers,
    },
  };
}
