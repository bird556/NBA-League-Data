import { Center, Box, Flex, Text, Image, VStack } from '@chakra-ui/react';
import Link from 'next/link';
function TeamScore({ team, score, teamName }) {
  return (
    <Flex alignItems="center" alignSelf="center" justifyContent="space-between">
      <Flex alignItems="center" justifyContent="center" w="15rem" gap={5}>
        <Link key={team.id} href={`/teams/${team.slug}/${team.id}`} passHref>
          <Image
            cursor="pointer"
            boxSize="5rem"
            objectFit="cover"
            src={`https://api.sofascore.app/api/v1/team/${team.id}/image`}
            alt={team.shortName}
          />
        </Link>
        <Center w="16rem">
          <Text fontSize="2xl" fontWeight="extrabold">
            {teamName}
          </Text>
        </Center>
      </Flex>

      {/* Score */}
      <Flex>
        <Box w="18rem">
          <Flex alignItems="center" justifyContent="space-around" gap="0.8rem">
            <VStack w="3.2rem">
              <Text fontSize="1.2rem">1</Text>
              <Text fontSize="1.6rem">{score.period1 ? score.period1 : 0}</Text>
            </VStack>
            <VStack w="3.2rem">
              <Text fontSize="1.2rem">2</Text>

              <Text fontSize="1.6rem">{score.period2 ? score.period2 : 0}</Text>
            </VStack>

            <VStack w="3.2rem">
              <Text fontSize="1.2rem">3</Text>

              <Text fontSize="1.6rem">{score.period3 ? score.period3 : 0}</Text>
            </VStack>

            <VStack w="3.2rem">
              <Text fontSize="1.2rem">4</Text>

              <Text fontSize="1.6rem">{score.period4 ? score.period4 : 0}</Text>
            </VStack>
            {score.overtime ? (
              <VStack w="3.2rem">
                <Text fontSize="1.2rem">OT</Text>

                <Text fontSize="1.6rem">
                  {score.overtime ? score.overtime : 0}
                </Text>
              </VStack>
            ) : (
              score.overtime
            )}
            <VStack w="3.2rem">
              <Text fontSize="1.2rem" fontWeight="extrabold">
                {`total`.toUpperCase()}
              </Text>

              <Text fontSize="1.6rem">{score.current}</Text>
            </VStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default TeamScore;
