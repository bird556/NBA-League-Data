import { MdOutlineSmartDisplay } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Center, Box, Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import TeamScore from './TeamScore';
function Games({ schedule, gameDate, teamName, title }) {
  return (
    <Flex justifyContent="center" flexWrap="wrap" p="8rem">
      {schedule ? (
        <Box>
          <Center>
            <Box p="8rem">
              <h1>{title}</h1>
            </Box>
          </Center>
          <div data-aos="fade-down">
            <Flex flexWrap="wrap" justifyContent="center" maxW="160rem">
              {schedule.events
                .map((data) => {
                  if (typeof data.homeScore.current == 'number') {
                    if (
                      data.tournament.slug === 'nba-2223' ||
                      data.tournament.slug === 'nba-preseason'
                    ) {
                      return (
                        <div key={data.id} className="leader-container">
                          <Box
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
                              </GridItem>
                              {/* AWAY TEAM */}

                              <GridItem colSpan={5}>
                                <TeamScore
                                  teamName={teamName(data.awayTeam.name)}
                                  team={data.awayTeam}
                                  score={data.awayScore}
                                />
                              </GridItem>

                              {/* HOME TEAM */}
                              <GridItem colSpan={5}>
                                <TeamScore
                                  teamName={teamName(data.homeTeam.name)}
                                  team={data.homeTeam}
                                  score={data.homeScore}
                                />
                              </GridItem>

                              <GridItem colSpan={5} b>
                                <Center>
                                  <button id="btn-boxscore">
                                    <Flex alignItems="center" gap="0.8rem">
                                      <a
                                        id="follow"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://reddit.rnbastreams.com/"
                                      >
                                        {data.status.type === 'finished'
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
        []
      )}
    </Flex>
  );
}

export default Games;

Games.propTypes = {
  schedule: PropTypes.object,
  gameDate: PropTypes.func,
  teamName: PropTypes.func,
  title: PropTypes.string,
};
