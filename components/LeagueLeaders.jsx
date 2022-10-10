import { SplideSlide } from '@splidejs/react-splide';
import { Avatar, Flex, Box, HStack, Text } from '@chakra-ui/react';
import ImageWithFallback from '../components/ImageWithFallback';
import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';

function LeagueLeaders({ perGame, perGameShort, map }) {
  return (
    <SplideSlide>
      <Box w="3xl" overflow="hidden" p="2rem" className="box-container">
        <div className="blur"></div>
        <Flex flexDirection="column" gap="2rem" zIndex="100">
          <Flex alignItems="center" justifyContent="space-between">
            <HStack gap="0.5rem">
              <FaBasketballBall fontSize="16px" />
              <Text fontSize="3xl">{perGame} </Text>
            </HStack>
            <Text fontSize="2xl">More</Text>
          </Flex>

          <Box>
            <Text float="right" fontSize="lg">
              {perGameShort}
            </Text>
          </Box>
          {map
            .filter((item, index) => index < 3)
            .map((data, index) => {
              let stats = () => {
                if (
                  data.statistics.points ||
                  data.statistics.rebounds ||
                  data.statistics.steals
                ) {
                  return (
                    Object.values(data.statistics)[2] /
                    data.statistics.appearances
                  ).toFixed(1);
                } else if (data.statistics.assists || data.statistics.blocks) {
                  return (
                    Object.values(data.statistics)[1] /
                    data.statistics.appearances
                  ).toFixed(1);
                } else if (
                  data.statistics.fieldGoalsPercentage ||
                  data.statistics.freeThrowsPercentage
                ) {
                  return `${Object.values(data.statistics)[2].toFixed(1)}%`;
                } else if (data.statistics.threePointsPercentage) {
                  return `${Object.values(data.statistics)[3].toFixed(1)}%`;
                } else {
                  return Object.values(data.statistics)[2];
                }
              };

              if (data.team.name === `Los Angeles Lakers`) {
                data.team.name = 'Lal';
              }
              return (
                <Link
                  key={data.player.id}
                  href={`/player/${data.player.slug}/${data.player.id}`}
                  passHref
                >
                  <Flex
                    cursor="pointer"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <HStack gap="1rem">
                      <Text fontSize="2xl" w="1.5rem" textAlign="center">
                        {index + 1}
                      </Text>
                      <Avatar
                        pointerEvents="none"
                        size="lg"
                        name={data.player.name}
                        src={`https://api.sofascore.app/api/v1/player/${data.player.id}/image`}
                      />
                      <Text fontSize="2xl">{data.player.name}</Text>
                      <Text fontSize="lg">
                        {data.team.name.slice(0, 3).toUpperCase()}
                      </Text>
                    </HStack>
                    <Text fontSize="2xl" className="stat-number">
                      {stats()}
                    </Text>
                  </Flex>
                </Link>
              );
            })}
        </Flex>
      </Box>
    </SplideSlide>
  );
}

export default LeagueLeaders;
