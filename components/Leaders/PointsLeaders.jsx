import React from 'react';
import Link from 'next/link';
import {
  Image,
  Avatar,
  Flex,
  Divider,
  HStack,
  VStack,
  Text,
  Center,
} from '@chakra-ui/react';

const PointsLeaders = ({ data, index }) => {
  return (
    <Link
      key={data.player.id}
      href={`/players-info/${data.player.slug}/${data.player.id}`}
      passHref
    >
      <Flex
        alignItems="center"
        gap="30px"
        backgroundColor="rgba(34, 34, 34, 0.768)"
        margin="2rem"
        cursor="pointer"
        className="stats-flex"
        borderRadius="2rem"
        wrap="wrap"
      >
        <VStack>
          <h1>{index + 1}</h1>
          <h3>Place</h3>
        </VStack>
        <Avatar
          // size="3xl"
          pointerEvents="none"
          size="2xl"
          name={data.player.name}
          bgColor="white"
          src={`https://api.sofascore.app/api/v1/player/${data.player.id}/image`}
        />
        {/* Player Name, Team, Position */}
        <VStack align="stretch">
          <Text fontSize="3xl">{data.player.name.toUpperCase()}</Text>
          <HStack
            height="30px"
            gap="2rem"
            align="stretch"
            width="30rem"
            alignItems="center"
          >
            <Text fontSize="2xl" w="15rem">
              {data.team.name}
            </Text>
            <Image
              boxSize="30px"
              alt={data.team.name}
              src={`https://api.sofascore.app/api/v1/team/${data.team.id}/image`}
            />
            <Divider orientation="vertical" />
            <Text fontSize="2xl">{data.player.position}</Text>
          </HStack>
        </VStack>
        <Divider orientation="vertical" height="150px" />
        <VStack justifyContent="center">
          <Center>
            <Text fontSize="3xl">PPG</Text>
          </Center>
          <Text fontSize="5xl" as="b">
            {(data.statistics.points / data.statistics.appearances).toFixed(1)}
          </Text>
        </VStack>
      </Flex>
    </Link>
  );
};

export default PointsLeaders;

export async function getServerSideProps() {
  const stats = await fetchApi(
    `${baseUrl}/api/basketball/player/${data.player.id}/tournament/132/season/38191/statistics/regularseason`
  );

  const details = await fetchApi(
    `${baseUrl}/api/basketball/player/${data.player.id}`
  );

  return {
    props: {
      playerStats: stats,
      playerDetails: details,
    },
  };
}
