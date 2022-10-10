import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { Center, useMediaQuery } from '@chakra-ui/react';
import { baseUrl } from '../utils/fetchApi';
import Backgroundimgvideo from '../components/Backgroundimgvideo';
import Games from '../components/shared/Games';
import Footer from '../components/Footer';
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
      return `NBA League Data`;
    } else if (isLargerThanMID) {
      return `NBA League Data`;
    } else {
      return `NBA League Data`;
    }
  }

  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    getSchedule();
  }, []);

  const getSchedule = async () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;

    const res = await fetch(
      `${baseUrl}/api/basketball/matches/${day}/${month}/2022`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_REACT_APP_NBAAPIKEY,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_REACT_APP_URL_HOST,
        },
      }
    );

    const data = await res.json();
    const schedules = data;
    setSchedule(schedules);
  };

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
    console.log(name);
    const fullName = name;
    const teamName = fullName.split(' ');
    return teamName[teamName.length - 1];
  };

  return (
    <>
      <Backgroundimgvideo />
      <div className={styles.container}>
        <div className="home">
          <div data-aos="fade-down">
            {schedule.events ? (
              <Games
                title={`Today's Games`}
                schedule={schedule}
                gameDate={gameDate}
                teamName={teamName}
              />
            ) : (
              <div data-aos="fade-up">
                <Center h="95vh">
                  <h1>{determineText()}</h1>
                </Center>
              </div>
            )}
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
