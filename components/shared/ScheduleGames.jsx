import Link from 'next/link';
import { MdOutlineSmartDisplay } from 'react-icons/md';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
function ScheduleGames() {
  return (
    // if (
    //   data.tournament.slug === 'nba-2223' ||
    //   data.tournament.slug === 'nba-preseason'
    // ) {

    //   return (
    <Box
      key={data.id}
      className="stats-home"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="auto"
      w="auto"
      m="8rem 0 0"
    >
      <div className="leader-container">
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
          <div className="blur"></div>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="50rem"
            gap="1.6rem"
          >
            <Flex justifyContent="space-around" gap="3.2rem">
              <Flex
                alignItems="center"
                gap="3.2rem"
                flexDirection="column"
                width="12rem"
                alignSelf="center"
              >
                <Text fontSize="2xl">{data.awayTeam.shortName}</Text>
                <Link
                  key={data.awayTeam.id}
                  href={`/teams/${data.awayTeam.slug}/${data.awayTeam.id}`}
                  passHref
                >
                  <Image
                    cursor="pointer"
                    boxSize="7rem"
                    objectFit="cover"
                    src={`https://api.sofascore.app/api/v1/team/${data.awayTeam.id}/image`}
                    alt={data.awayTeam.shortName}
                  />
                </Link>
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                w="16rem"
              >
                <Text fontSize="1.8rem">
                  {formatAMPM(new Date(data.startTimestamp))}
                </Text>
                <Text fontSize="1.4rem">{gameDate()}</Text>
                <Text fontSize="1.2rem">{data.status.description}</Text>
              </Flex>
              <Flex
                alignItems="center"
                gap="3.2rem"
                flexDirection="column"
                width="12rem"
                alignSelf="center"
              >
                <Text fontSize="2xl">{data.homeTeam.shortName}</Text>
                <Link
                  key={data.homeTeam.id}
                  href={`/teams/${data.homeTeam.slug}/${data.homeTeam.id}`}
                  passHref
                >
                  <Image
                    cursor="pointer"
                    boxSize="7rem"
                    objectFit="cover"
                    src={`https://api.sofascore.app/api/v1/team/${data.homeTeam.id}/image`}
                    alt={data.homeTeam.shortName}
                  />
                </Link>
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
    //   );
    // }
  );
}

export default ScheduleGames;
