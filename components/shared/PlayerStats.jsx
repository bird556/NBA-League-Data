import { Flex, Box, Center, Divider } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import StatsBox from './StatsBox';

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
            className="Stats-Flex"
          >
            <h4>{playoffStats.statistics.type}</h4>
            <Box>
              <Flex gap="4.4rem" className="Avg-Flex">
                {/* Points Per Game */}
                <StatsBox
                  perGame="PPG"
                  stat={(
                    playoffStats.statistics.points /
                    playoffStats.statistics.appearances
                  ).toFixed(1)}
                />
                {/* Rebounds Per Game */}
                <StatsBox
                  perGame="RPG"
                  stat={(
                    playoffStats.statistics.rebounds /
                    playoffStats.statistics.appearances
                  ).toFixed(1)}
                />
                {/* Assists Per Game */}
                <StatsBox
                  perGame="AST"
                  stat={(
                    playoffStats.statistics.assists /
                    playoffStats.statistics.appearances
                  ).toFixed(1)}
                />

                {/* Blocks Per Game */}
                <StatsBox
                  perGame="BLK"
                  stat={(
                    playoffStats.statistics.blocks /
                    playoffStats.statistics.appearances
                  ).toFixed(1)}
                />

                {/* Steals Per Game */}
                <StatsBox
                  perGame="STL"
                  stat={(
                    playoffStats.statistics.steals /
                    playoffStats.statistics.appearances
                  ).toFixed(1)}
                />
                {/* FG% */}
                <StatsBox
                  perGame="FG%"
                  stat={playoffStats.statistics.fieldGoalsPercentage.toFixed(1)}
                />
                {/* 3P% */}
                <StatsBox
                  perGame="3P%"
                  stat={playoffStats.statistics.threePointsPercentage.toFixed(
                    1
                  )}
                />
                {/* FT% */}
                <StatsBox
                  perGame="FT%"
                  stat={playoffStats.statistics.freeThrowsPercentage.toFixed(1)}
                />
              </Flex>
            </Box>
          </Flex>
        </>
      );
    }
  };

  if (playerStats) {
    return (
      <div className="season-careers-stats">
        <div className="blur"></div>
        <Flex flexDirection="column">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            p="0.8rem 8rem"
            className="Stats-Flex"
          >
            <h4>
              {playerStats ? playerStats.statistics.type.slice(7) : 'Season'}
            </h4>
            <div
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-offset="-700"
            >
              <Flex gap="4.4rem" className="Avg-Flex">
                {/* Points Per Game */}
                <StatsBox
                  perGame="PPG"
                  stat={(
                    playerStats.statistics.points /
                    playerStats.statistics.appearances
                  ).toFixed(1)}
                />
                {/* Rebounds Per Game */}
                <StatsBox
                  perGame="RPG"
                  stat={(
                    playerStats.statistics.rebounds /
                    playerStats.statistics.appearances
                  ).toFixed(1)}
                />
                {/* Assists Per Game */}
                <StatsBox
                  perGame="AST"
                  stat={(
                    playerStats.statistics.assists /
                    playerStats.statistics.appearances
                  ).toFixed(1)}
                />

                {/* Blocks Per Game */}
                <StatsBox
                  perGame="BLK"
                  stat={(
                    playerStats.statistics.blocks /
                    playerStats.statistics.appearances
                  ).toFixed(1)}
                />

                {/* Steals Per Game */}
                <StatsBox
                  perGame="STL"
                  stat={(
                    playerStats.statistics.steals /
                    playerStats.statistics.appearances
                  ).toFixed(1)}
                />
                {/* FG% */}
                <StatsBox
                  perGame="FG%"
                  stat={playerStats.statistics.fieldGoalsPercentage.toFixed(1)}
                />
                {/* 3P% */}
                <StatsBox
                  perGame="3P%"
                  stat={playerStats.statistics.threePointsPercentage.toFixed(1)}
                />
                {/* FT% */}
                <StatsBox
                  perGame="FT%"
                  stat={playerStats.statistics.freeThrowsPercentage.toFixed(1)}
                />
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

PlayerStats.propTypes = {
  playerStats: PropTypes.string,
  playoffStats: PropTypes.string,
};
