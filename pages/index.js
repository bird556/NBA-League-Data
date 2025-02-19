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
              {/* Recent Games */}
              {/* <div data-aos="fade-down" data-aos-offset="800"> */}
              <div>
                {recentGames ? (
                  <Games
                    title="NBA Games"
                    gamesLoaded={3}
                    schedule={recentGames.events}
                    gameDate={gameDate}
                    teamName={teamName}
                    gameID={recentGames.events.id}
                  />
                ) : null}
              </div>
            </>
          ) : (
            <>
              <div data-aos="fade-up">
                <Center h="95vh">{<h1>{determineText()}</h1>}</Center>
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
  const recentGames = await fetchApi(
    `${baseUrl}/api/basketball/tournament/132/season/65360/matches/last/0`
  );

  return {
    props: {
      recentGames: recentGames,
    },
    revalidate: 60,
  };
}
