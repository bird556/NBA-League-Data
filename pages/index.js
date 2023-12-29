import styles from '../styles/Home.module.css';
import { Center, useMediaQuery } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/.fetchApi';
import Backgroundimgvideo from '../components/Backgroundimgvideo';
import Games from '../components/shared/Games';

//

export default function Home({ recentGames, nextGames, liveGames }) {
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
      return `NBA League Data`;
    } else if (isLargerThanMID) {
      return `NBA League Data`;
    } else {
      return `NBA League Data`;
    }
  }

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const nth = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const gameDate = (stamp) => {
    let timeStamp = stamp;
    let date = new Date(timeStamp * 1000);
    let day = date.getDate();
    return `${month[date.getMonth()]} ${day}${nth(day)}, ${date.getFullYear()}`;
  };

  const teamName = (name) => {
    const fullName = name;
    const teamName = fullName.split(' ');
    return teamName[teamName.length - 1];
  };

  return (
    <>
      <Backgroundimgvideo />
      <div className={styles.container}>
        <div className="home">
          {recentGames || nextGames || liveGames ? (
            <>
              <div data-aos="fade-down">
                {liveGames ? (
                  <Games
                    title="Today's Games"
                    schedule={liveGames.events}
                    gameDate={gameDate}
                    teamName={teamName}
                    gameID={liveGames.events.id}
                  />
                ) : null}
              </div>
              {/* <div data-aos="fade-down">
                {nextGames ? (
                  <Games
                    title="Today's Games"
                    schedule={nextGames.events}
                    gameDate={gameDate}
                    teamName={teamName}
                    gameID={nextGames.events.id}
                  />
                ) : null}
              </div> */}
              {/* Recent Games */}
              {/* <div data-aos="fade-down" data-aos-offset="800"> */}
              {/* <div>
                {recentGames ? (
                  <Games
                    title="NBA Games"
                    gamesLoaded={-8}
                    schedule={recentGames.events}
                    gameDate={gameDate}
                    teamName={teamName}
                    gameID={recentGames.events.id}
                  />
                ) : null}
              </div> */}
            </>
          ) : (
            <>
              <div data-aos="fade-up">
                <Center h="95vh">
                  <h1>{determineText()}</h1>
                </Center>
              </div>
              ;
            </>
          )}
          {/* Upcoming Games of today */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const recentGames = await fetchApi(
  //   // `${baseUrl}/api/basketball/matches/${day}/${month}/${year}`
  //   `${baseUrl}/api/basketball/tournament/132/season/54105/matches/last/0`
  // );
  // const nextGames = await fetchApi(
  //   `${baseUrl}/api/basketball/tournament/132/season/54105/matches/next/0`
  // );

  const liveGames = await fetchApi(`${baseUrl}/api/basketball/matches/live`);

  return {
    props: {
      // recentGames: recentGames,
      // nextGames: nextGames,
      liveGames: liveGames,
    },
    revalidate: 60,
  };
}
