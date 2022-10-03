import styles from '../styles/Home.module.css';
import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';
import { BsBell } from 'react-icons/bs';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import {
  Center,
  useMediaQuery,
  Box,
  Flex,
  HStack,
  Text,
  Avatar,
  Image,
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
      return `Home`;
    } else if (isLargerThanMID) {
      return (
        <>
          <h1>Home</h1>
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
          <Box
            className="stats-home"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <div className="leader-container" data-aos="fade-down">
              <Box
                w="3xl"
                h="sm"
                overflow="hidden"
                p="2rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                className="box-container"
              >
                {/* <ImageWithFallback
                  className="backgroundimg-box"
                  priority
                  layout="fill"
                  alt={``}
                  src={`https://i.pinimg.com/564x/f9/4a/a8/f94aa8165977ac33b9c3f7f7eeba9b56.jpg`}
                  fallbackSrc={'/team-background/defaultimage.jpg'}
                /> */}
                <div className="blur"></div>
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  w="50rem"
                  gap="1.6rem"
                >
                  <Flex justifyContent="space-around" gap="6.4rem">
                    <Flex
                      alignItems="center"
                      gap="3.2rem"
                      flexDirection="column"
                    >
                      <Text fontSize="2xl">Memphis</Text>
                      <Image
                        boxSize="5rem"
                        objectFit="cover"
                        src="https://api.sofascore.app/api/v1/team/3415/image"
                        alt="Dan Abramov"
                      />
                    </Flex>
                    <Flex
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text fontSize="3xl">8:00pm</Text>
                      <Text fontSize="2xl">Today</Text>
                    </Flex>
                    <Flex
                      alignItems="center"
                      gap="3.2rem"
                      flexDirection="column"
                    >
                      <Text fontSize="2xl">Orlando</Text>
                      <Image
                        boxSize="5rem"
                        objectFit="cover"
                        src="https://api.sofascore.app/api/v1/team/3437/image"
                        alt="Dan Abramov"
                      />
                    </Flex>
                  </Flex>
                  <button>
                    <Flex alignItems="center" gap="0.8rem">
                      <a
                        id="follow"
                        target="_blank"
                        rel="noreferrer"
                        href="https://reddit.rnbastreams.com/"
                      >
                        Watch Live
                      </a>
                      <span id="plus-sign">
                        <MdOutlineSmartDisplay fontSize="2.4rem" />
                      </span>
                    </Flex>
                  </button>
                </Flex>
              </Box>
            </div>
          </Box>
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
