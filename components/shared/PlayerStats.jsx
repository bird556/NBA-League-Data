import { Flex, Box, Center, Divider } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function PlayerStats({ playerStats, playoffStats }) {
  const playoffs = () => {
    if (playoffStats) {
      return (
        <>
          <Center p="0 8rem">
            <Divider orientation="horizontal" />
          </Center>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            p="0.8rem 8rem"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-offset="-700"
          >
            <h4>{playoffStats.statistics.type}</h4>
            <Box>
              <Flex gap="4.4rem">
                {/* Points Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>PPG</p>
                    <h4>
                      {(
                        playoffStats.statistics.points /
                        playoffStats.statistics.appearances
                      ).toFixed(1)}
                    </h4>
                  </Flex>
                </Box>

                {/* Rebounds Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>RPG</p>
                    <h4>
                      {(
                        playoffStats.statistics.rebounds /
                        playoffStats.statistics.appearances
                      ).toFixed(1)}
                    </h4>
                  </Flex>
                </Box>

                {/* Assists Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>AST</p>

                    <h4>
                      {(
                        playoffStats.statistics.assists /
                        playoffStats.statistics.appearances
                      ).toFixed(1)}
                    </h4>
                  </Flex>
                </Box>

                {/* Blocks Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>BLK</p>
                    <h4>
                      {(
                        playoffStats.statistics.blocks /
                        playoffStats.statistics.appearances
                      ).toFixed(1)}
                    </h4>
                  </Flex>
                </Box>

                {/* Steals Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>STL</p>
                    <h4>
                      {(
                        playoffStats.statistics.steals /
                        playoffStats.statistics.appearances
                      ).toFixed(1)}
                    </h4>
                  </Flex>
                </Box>

                {/* FG % */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>FG%</p>
                    <h4>
                      {playoffStats.statistics.fieldGoalsPercentage.toFixed(1)}
                    </h4>
                  </Flex>
                </Box>

                {/* 3P% */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>3P%</p>
                    <h4>
                      {' '}
                      {playoffStats.statistics.threePointsPercentage.toFixed(1)}
                    </h4>
                  </Flex>
                </Box>

                {/* FT% */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>FT%</p>
                    <h4>
                      {playoffStats.statistics.freeThrowsPercentage.toFixed(1)}
                    </h4>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </>
      );
    }
  };

  if (playerStats) {
    return (
      <div
        className="season-careers-stats"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-offset="-100"
      >
        <div className="blur"></div>
        <Flex flexDirection="column">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            p="0.8rem 8rem"
          >
            <h4>
              {playerStats ? playerStats.statistics.type.slice(7) : 'Season'}
            </h4>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-offset="-700"
            >
              <Flex gap="4.4rem">
                {/* Points Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>PPG</p>
                    <h4>
                      {playerStats
                        ? (
                            playerStats.statistics.points /
                            playerStats.statistics.appearances
                          ).toFixed(1)
                        : 0}
                    </h4>
                  </Flex>
                </Box>

                {/* Rebounds Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>RPG</p>
                    <h4>
                      {playerStats
                        ? (
                            playerStats.statistics.rebounds /
                            playerStats.statistics.appearances
                          ).toFixed(1)
                        : 0}
                    </h4>
                  </Flex>
                </Box>

                {/* Assists Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>AST</p>
                    <h4>
                      {playerStats
                        ? (
                            playerStats.statistics.assists /
                            playerStats.statistics.appearances
                          ).toFixed(1)
                        : 0}
                    </h4>
                  </Flex>
                </Box>

                {/* Blocks Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>BLK</p>
                    <h4>
                      {playerStats
                        ? (
                            playerStats.statistics.blocks /
                            playerStats.statistics.appearances
                          ).toFixed(1)
                        : 0}
                    </h4>
                  </Flex>
                </Box>

                {/* Steals Per Game */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>STL</p>
                    <h4>
                      {playerStats
                        ? (
                            playerStats.statistics.steals /
                            playerStats.statistics.appearances
                          ).toFixed(1)
                        : 0}
                    </h4>
                  </Flex>
                </Box>

                {/* FG % */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>FG%</p>
                    <h4>
                      {playerStats
                        ? playerStats.statistics.fieldGoalsPercentage.toFixed(1)
                        : 0}
                    </h4>
                  </Flex>
                </Box>

                {/* 3P% */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>3P%</p>
                    <h4>
                      {playerStats
                        ? playerStats.statistics.threePointsPercentage.toFixed(
                            1
                          )
                        : 0}
                    </h4>
                  </Flex>
                </Box>

                {/* FT% */}
                <Box w="5rem">
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <p>FT%</p>
                    <h4>
                      {playerStats
                        ? playerStats.statistics.freeThrowsPercentage.toFixed(1)
                        : 0}
                    </h4>
                  </Flex>
                </Box>
              </Flex>
            </div>
          </Flex>
          {playoffs()}
        </Flex>
      </div>
    );
  }
}

export default PlayerStats;
