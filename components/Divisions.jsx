import {
  Box,
  Flex,
  HStack,
  Text,
  Image,
  Center,
  Divider,
} from '@chakra-ui/react';
import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';

function Divisions({ division, divisionIfStatement, map }) {
  const divisions = () =>
    map.map((data) => {
      if (data.name == divisionIfStatement) {
        return data.rows.map((item) => {
          return (
            <div key={item.id}>
              <Flex
                gap="3.2rem"
                alignItems="center"
                h="10rem"
                flexWrap="wrap"
                borderRadius="2xl"
              >
                <Flex alignItems="center" gap="2rem">
                  <Text fontSize="2xl" w="1.5rem" textAlign="center">
                    {item.position}
                  </Text>
                  <Link
                    key={item.id}
                    href={`/teams/${item.team.slug}/${item.team.id}`}
                    passHref
                  >
                    <Image
                      boxSize="6rem"
                      cursor="pointer"
                      alt={item.team.name}
                      src={`https://api.sofascore.app/api/v1/team/${item.team.id}/image`}
                    />
                  </Link>
                </Flex>

                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  flexWrap="wrap"
                >
                  <Box>
                    <Flex align="center" gap="1.5rem" flexWrap="wrap">
                      <Text fontSize="3xl" w="20rem">
                        {item.team.name}
                      </Text>
                      <Text fontSize="2xl">
                        {item.wins}-{item.losses}
                      </Text>
                    </Flex>
                    <div className="Links">
                      <Flex gap="1.5rem" alignItems="center">
                        <Link
                          key={item.id}
                          href={`/teams/${item.team.slug}/${item.team.id}`}
                          passHref
                        >
                          <a href={`#`}>Statistics</a>
                        </Link>
                        <Link
                          key={item.id}
                          href={`/teams/${item.team.slug}/${item.team.id}`}
                          passHref
                        >
                          <a href={`#`}>Schedule</a>
                        </Link>
                        <Link
                          key={item.id}
                          href={`/teams/${item.team.slug}/${item.team.id}`}
                          passHref
                        >
                          <a>Roster</a>
                        </Link>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`https://www.nba.com/${item.team.name
                            .split(' ')
                            .pop()
                            .toLowerCase()}/tickets`}
                        >
                          Tickets
                        </a>
                      </Flex>
                    </div>
                  </Box>
                </Flex>
              </Flex>
              <Center>
                <Divider w="80%" />
              </Center>
            </div>
          );
        });
      }
    });
  return (
    <>
      <Box
        maxW="48rem"
        overflow="hidden"
        p="2rem"
        className="box-container divisions"
      >
        <Flex flexDirection="column" gap="2rem" zIndex="100" flexWrap="wrap">
          <Flex alignItems="center">
            <HStack gap="0.5rem">
              <FaBasketballBall fontSize="16px" />
              <Text fontSize="3xl">{division}</Text>
            </HStack>
          </Flex>
          {divisions()}
        </Flex>
      </Box>
    </>
  );
}

export default Divisions;
