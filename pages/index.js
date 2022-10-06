import styles from '../styles/Home.module.css';
import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';
import { BsBell } from 'react-icons/bs';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { useState, useEffect } from 'react';
import {
  Center,
  useMediaQuery,
  Box,
  Flex,
  Text,
  Image,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Backgroundimgvideo from '../components/Backgroundimgvideo';
import Slider from '../components/Slider/Slider';
import ImageWithFallback from '../components/ImageWithFallback';
import Games from '../components/shared/Games';
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
      return (
        <>
          <h1>NBA League Data</h1>
        </>
      );
    } else {
      return `Lebron #23`;
    }

    return isDisplayingInBrowser
      ? 'rendering in a browser'
      : 'rendering on something else, e.g. PWA';
  }

  const [schedule, setSchedule] = useState([]);
  const [highlights, setHighlights] = useState([]);
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
          'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com',
        },
      }
    );

    const data = await res.json();
    const schedules = data;
    setSchedule(schedules);
    // console.log(schedules.events.map((data) => data.tournament.slug));
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
    const fullName = name;
    const [first, last] = fullName.split(' ');
    return last;
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
              <Center>
                <h1>{determineText()}</h1>
              </Center>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
