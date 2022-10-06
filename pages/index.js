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
  HStack,
  Text,
  Avatar,
  Image,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Backgroundimgvideo from '../components/Backgroundimgvideo';
import Slider from '../components/Slider/Slider';
import ImageWithFallback from '../components/ImageWithFallback';
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
              <Flex justifyContent="center" flexWrap="wrap" p="8rem">
                {schedule ? (
                  <Box>
                    <Center>
                      <Box p="8rem">
                        <h1>Recent Games</h1>
                      </Box>
                    </Center>
                    <div data-aos="fade-down">
                      <Flex
                        flexWrap="wrap"
                        justifyContent="center"
                        maxW="160rem"
                      >
                        {schedule.events
                          .map((data) => {
                            if (typeof data.homeScore.current == 'number') {
                              if (
                                data.tournament.slug === 'nba-2223' ||
                                data.tournament.slug === 'nba-preseason'
                              ) {
                                return (
                                  <div className="leader-container">
                                    <Box
                                      key={data.id}
                                      maxW="38rem"
                                      h="24rem"
                                      overflow="hidden"
                                      p="2rem"
                                      display="flex"
                                      justifyContent="center"
                                      alignItems="center"
                                      className="box-container"
                                    >
                                      <Grid
                                        key={data.id}
                                        w="3xl"
                                        gap="0.8rem"
                                        templateRows="repeat(4, 1fr)"
                                        templateColumns="repeat(5, 2fr)"
                                      >
                                        <div className="blur"></div>

                                        <GridItem rowSpan={4} colSpan={5}>
                                          <Text fontSize="1.2rem">
                                            {gameDate(data.startTimestamp)}
                                          </Text>

                                          <Text
                                            fontSize="1.2rem"
                                            fontWeight="extrabold"
                                            float="right"
                                            mr="0.5rem"
                                          >
                                            {`total`.toUpperCase()}
                                          </Text>
                                        </GridItem>

                                        <GridItem colSpan={5}>
                                          <Flex
                                            alignItems="center"
                                            alignSelf="center"
                                            justifyContent="space-between"
                                          >
                                            <Flex
                                              alignItems="center"
                                              justifyContent="center"
                                              w="15rem"
                                              gap={5}
                                            >
                                              <Link
                                                key={data.awayTeam.id}
                                                href={`/teams/${data.awayTeam.slug}/${data.awayTeam.id}`}
                                                passHref
                                              >
                                                <Image
                                                  cursor="pointer"
                                                  boxSize="5rem"
                                                  objectFit="cover"
                                                  src={`https://api.sofascore.app/api/v1/team/${data.awayTeam.id}/image`}
                                                  alt={data.awayTeam.shortName}
                                                />
                                              </Link>
                                              <Center w="16rem">
                                                <Text
                                                  fontSize="2xl"
                                                  fontWeight="extrabold"
                                                >
                                                  {teamName(data.awayTeam.name)}
                                                </Text>
                                              </Center>
                                            </Flex>

                                            {/* Score */}
                                            <Flex>
                                              <Box w="18rem">
                                                <Flex
                                                  alignItems="center"
                                                  justifyContent="space-around"
                                                  gap="0.8rem"
                                                >
                                                  <VStack w="3.2rem">
                                                    <Text fontSize="1.2rem">
                                                      1
                                                    </Text>
                                                    <Text fontSize="1.6rem">
                                                      {data.awayScore.period1
                                                        ? data.awayScore.period1
                                                        : 0}
                                                    </Text>
                                                  </VStack>
                                                  <VStack w="3.2rem">
                                                    <Text fontSize="1.2rem">
                                                      2
                                                    </Text>

                                                    <Text fontSize="1.6rem">
                                                      {data.awayScore.period2
                                                        ? data.awayScore.period2
                                                        : 0}
                                                    </Text>
                                                  </VStack>

                                                  <VStack w="3.2rem">
                                                    <Text fontSize="1.2rem">
                                                      3
                                                    </Text>

                                                    <Text fontSize="1.6rem">
                                                      {data.awayScore.period3
                                                        ? data.awayScore.period3
                                                        : 0}
                                                    </Text>
                                                  </VStack>

                                                  <VStack w="3.2rem">
                                                    <Text fontSize="1.2rem">
                                                      4
                                                    </Text>

                                                    <Text fontSize="1.6rem">
                                                      {data.awayScore.period4
                                                        ? data.awayScore.period4
                                                        : 0}
                                                    </Text>
                                                  </VStack>
                                                  {data.awayScore.overtime ? (
                                                    <VStack w="3.2rem">
                                                      <Text fontSize="1.2rem">
                                                        OT
                                                      </Text>

                                                      <Text fontSize="1.6rem">
                                                        {data.awayScore.overtime
                                                          ? data.awayScore
                                                              .overtime
                                                          : 0}
                                                      </Text>
                                                    </VStack>
                                                  ) : (
                                                    data.awayScore.overtime
                                                  )}
                                                  <Flex
                                                    w="4.8rem"
                                                    alignItems="center"
                                                    justifyContent="space-around"
                                                    alignSelf="end"
                                                  >
                                                    <Text fontSize="1.6rem">
                                                      {data.awayScore.current}
                                                    </Text>
                                                  </Flex>
                                                </Flex>
                                              </Box>
                                            </Flex>
                                          </Flex>
                                        </GridItem>

                                        {/* HOME TEAM */}
                                        <GridItem colSpan={5}>
                                          <Flex
                                            alignItems="center"
                                            alignSelf="center"
                                            justifyContent="space-between"
                                          >
                                            <Flex
                                              alignItems="center"
                                              justifyContent="center"
                                              w="15rem"
                                              gap={5}
                                            >
                                              <Link
                                                key={data.homeTeam.id}
                                                href={`/teams/${data.homeTeam.slug}/${data.homeTeam.id}`}
                                                passHref
                                              >
                                                <Image
                                                  cursor="pointer"
                                                  boxSize="5rem"
                                                  objectFit="cover"
                                                  src={`https://api.sofascore.app/api/v1/team/${data.homeTeam.id}/image`}
                                                  alt={data.homeTeam.shortName}
                                                />
                                              </Link>
                                              <Center w="16rem">
                                                <Text
                                                  fontSize="2xl"
                                                  fontWeight="extrabold"
                                                >
                                                  {teamName(data.homeTeam.name)}
                                                </Text>
                                              </Center>
                                            </Flex>

                                            {/* Score */}
                                            <Flex>
                                              <Box w="18rem">
                                                <Flex
                                                  alignItems="center"
                                                  justifyContent="space-around"
                                                  gap="0.8rem"
                                                >
                                                  <VStack w="3.2rem">
                                                    <Text fontSize="1.2rem">
                                                      1
                                                    </Text>
                                                    <Text fontSize="1.6rem">
                                                      {data.homeScore.period1
                                                        ? data.homeScore.period1
                                                        : 0}
                                                    </Text>
                                                  </VStack>
                                                  <VStack w="3.2rem">
                                                    <Text fontSize="1.2rem">
                                                      2
                                                    </Text>

                                                    <Text fontSize="1.6rem">
                                                      {data.homeScore.period2
                                                        ? data.homeScore.period2
                                                        : 0}
                                                    </Text>
                                                  </VStack>

                                                  <VStack w="3.2rem">
                                                    <Text fontSize="1.2rem">
                                                      3
                                                    </Text>

                                                    <Text fontSize="1.6rem">
                                                      {data.homeScore.period3
                                                        ? data.homeScore.period3
                                                        : 0}
                                                    </Text>
                                                  </VStack>

                                                  <VStack w="3.2rem">
                                                    <Text fontSize="1.2rem">
                                                      4
                                                    </Text>

                                                    <Text fontSize="1.6rem">
                                                      {data.homeScore.period4
                                                        ? data.homeScore.period4
                                                        : 0}
                                                    </Text>
                                                  </VStack>
                                                  {data.homeScore.overtime ? (
                                                    <VStack w="3.2rem">
                                                      <Text fontSize="1.2rem">
                                                        OT
                                                      </Text>

                                                      <Text fontSize="1.6rem">
                                                        {data.homeScore.overtime
                                                          ? data.homeScore
                                                              .overtime
                                                          : 0}
                                                      </Text>
                                                    </VStack>
                                                  ) : (
                                                    data.homeScore.overtime
                                                  )}
                                                  <Flex
                                                    w="4.8rem"
                                                    alignItems="center"
                                                    justifyContent="space-around"
                                                    alignSelf="end"
                                                  >
                                                    <Text fontSize="1.6rem">
                                                      {data.homeScore.current}
                                                    </Text>
                                                  </Flex>
                                                </Flex>
                                              </Box>
                                            </Flex>
                                          </Flex>
                                        </GridItem>

                                        <GridItem colSpan={5} b>
                                          <Center>
                                            <button id="btn-boxscore">
                                              <Flex
                                                alignItems="center"
                                                gap="0.8rem"
                                              >
                                                <a
                                                  id="follow"
                                                  target="_blank"
                                                  rel="noreferrer"
                                                  href="https://reddit.rnbastreams.com/"
                                                >
                                                  {data.status.type ===
                                                  'finished'
                                                    ? `Highlights`
                                                    : `Watch Live`}
                                                </a>
                                                <span id="plus-sign">
                                                  <MdOutlineSmartDisplay fontSize="2.4rem" />
                                                </span>
                                              </Flex>
                                            </button>
                                          </Center>
                                        </GridItem>
                                      </Grid>
                                    </Box>
                                  </div>
                                );
                              }
                            }
                          })
                          .reverse()}
                      </Flex>
                    </div>
                  </Box>
                ) : (
                  <Center>
                    <h1>{determineText()}</h1>
                  </Center>
                )}
              </Flex>
            ) : (
              <Center>
                <h1>{determineText()}</h1>
              </Center>
            )}
          </div>
        </div>

        {/* <div className="home">
          <Center>
            <h1>{determineText()}</h1>
          </Center>
        </div> */}
      </div>
    </>
  );
}
