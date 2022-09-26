import Link from 'next/link';
import PropTypes from 'prop-types';
import { Image, Flex, Divider, Box } from '@chakra-ui/react';
import Button from './Button';
import PlayerStats from './PlayerStats';
function PlayerTeam({
  firstName,
  lastName,
  avatarName,
  avatarSrc,
  linkHref,
  playerNumberPosition,
  age,
  height,
  country,
  draftYearReal,
  playoffStats,
  playerStats,
  teamID,
  teamSrc,
  nameDivider,
}) {
  const stats = () => {
    if (playerStats) {
      return (
        <PlayerStats playerStats={playerStats} playoffStats={playoffStats} />
      );
    }
  };

  return (
    <>
      <div className="player-team-details">
        <Box p="8rem" data-aos="fade-right">
          <Flex flexWrap="wrap" flexDirection="column">
            <Flex flexDirection="column" marginBottom="3.6rem">
              <Flex alignItems="center" gap="2.4rem">
                <h2 data-aos="fade-right" data-aos-delay="400">
                  {firstName}
                </h2>
                <Image
                  boxSize="8rem"
                  src={avatarSrc}
                  alt={avatarName}
                  borderRadius="100%"
                  fallbackSrc={
                    'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                  }
                />
              </Flex>
              <Flex
                alignItems="center"
                gap="2.4rem"
                w="100%"
                maxWidth="115rem"
                flexWrap="wrap"
              >
                <Box marginRight="6.4rem">
                  <h1 data-aos="fade-up" data-aos-delay="600">
                    {lastName}
                  </h1>
                  {nameDivider}
                </Box>
                {/* Team, Jersey Number, Position & Follow Button+ */}
                <Flex
                  alignItems="center"
                  gap="2.4rem"
                  flexWrap="wrap"
                  data-aos="fade-down"
                  data-aos-delay="500"
                >
                  <Link key={teamID} href={linkHref} passHref>
                    <Image
                      cursor="pointer"
                      boxSize="10rem"
                      alt={avatarName}
                      src={teamSrc}
                      fallbackSrc={
                        'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                      }
                    />
                  </Link>
                  {playerNumberPosition}
                  <Button />
                </Flex>
              </Flex>
            </Flex>
            {height}
            <Box maxWidth="36rem" marginBottom="3.6rem">
              <Divider />
            </Box>
            {/* Born, Country, Team, Draft Team & Year */}
            <Box bgColor="">
              <Flex flexDirection="column" gap="2.4rem">
                {/* Born */}
                {age}
                {/* Country */}
                {country}
                {/* Draft */}
                {draftYearReal}
              </Flex>
            </Box>
          </Flex>
        </Box>
        {stats()}
      </div>
    </>
  );
}

export default PlayerTeam;

PlayerTeam.defaultProps = {
  firstName: 'Not',
  lastName: 'Available',
  avatarName: 'NBA Player',
  avatarSrc: '/team-background/defaultimage.jpg',
  linkHref: `/teams/toronto-raptors/3433`,
  playerNumberPosition: 'PG',
  age: 27,
};

PlayerTeam.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
