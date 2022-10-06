import Link from 'next/link';
import PropTypes from 'prop-types';
import { Image, Flex, Divider, Box } from '@chakra-ui/react';
import Button from './Button';
function PlayerTeam({
  playerDetails,
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
  playerInfo,
  nameDivider,
  teamSrc,
  teamInfo,
  teamID,
  teamRecord,
}) {
  const name = `${firstName} ${lastName}`;
  const commaNumber = require('comma-number');

  const ageCountryDraft = () => {
    if (playerDetails) {
      return (
        <Box>
          <Flex
            className="Player-Team-Info-Flex"
            flexDirection="column"
            gap="2.4rem"
          >
            {/* Born */}
            {age}
            {/* Country */}
            {country}
            {/* Draft */}
            {draftYearReal}
          </Flex>
        </Box>
      );
    }
  };

  const playerAvatar = () => {
    if (playerDetails) {
      return (
        <Image
          boxSize="8rem"
          src={avatarSrc}
          alt={avatarName}
          borderRadius="100%"
          fallbackSrc={
            'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
          }
        />
      );
    }
  };

  const roster = () => {
    if (teamInfo) {
      return (
        <Box className="roster">
          <Flex flexWrap="wrap" gap="2.4rem" justifyContent="center">
            {playerInfo.map((data, index) => {
              return (
                <Box key={data.id}>
                  <Link href={`/player/${data.slug}/${data.id}`} passHref>
                    <Flex
                      alignItems="center"
                      flexDirection="column"
                      justifyContent="center"
                      cursor="pointer"
                    >
                      <Image
                        boxSize="12rem"
                        marginBottom="1.2rem"
                        layout="fill"
                        src={`https://api.sofascore.app/api/v1/player/${data.id}/image`}
                        alt={data.name}
                        borderRadius="100%"
                        fallbackSrc={
                          'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                        }
                      />

                      <p>{data.name}</p>
                    </Flex>
                  </Link>
                </Box>
              );
            })}
          </Flex>
        </Box>
      );
    }
  };

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Flex flexWrap="wrap" flexDirection="column" alignSelf="flex-start">
          <Flex flexDirection="column" marginBottom="3.6rem">
            <Flex alignItems="center" gap="2.4rem">
              <h2 data-aos="fade-right" data-aos-delay="400">
                {firstName}
              </h2>
              {playerAvatar()}
            </Flex>
            <Flex
              alignItems="center"
              gap="2.4rem"
              w="100%"
              maxWidth="116rem"
              flexWrap="wrap"
            >
              <Box marginRight="6.4rem">
                <h1 data-aos="fade-up" data-aos-delay="600">
                  {lastName.toUpperCase()}
                </h1>
                {playerDetails ? nameDivider : false}
              </Box>
              {/* Team, Jersey Number, Position & Follow Button+ */}
              <Flex
                alignItems="center"
                gap="2.4rem"
                flexWrap="wrap"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                <Link
                  key={teamID ? teamID : 0}
                  href={linkHref ? linkHref : '#'}
                  passHref
                >
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
                {playerDetails ? playerNumberPosition : false}
                <Button name={name} />
              </Flex>
            </Flex>
            <Box>
              {playerDetails ? (
                height
              ) : (
                <>
                  <p>Record</p>
                  {teamRecord ? teamRecord : `0 - 0`}
                </>
              )}
              <Box maxWidth="36rem" marginBottom="3.6rem">
                <Divider />
              </Box>
              {/* Born, Country, Team, Draft Team & Year */}
              {ageCountryDraft()}
              {teamInfo ? (
                <Box bgColor="">
                  <Flex flexDirection="column" gap="2.4rem">
                    {/* Born */}
                    <Flex maxWidth="36rem" justifyContent="space-between">
                      <p>Stadium:</p>
                      <p>{teamInfo.team.venue.stadium.name}</p>
                    </Flex>
                    <Flex maxWidth="36rem" justifyContent="space-between">
                      <p>Capacity:</p>
                      <p>{commaNumber(teamInfo.team.venue.stadium.capacity)}</p>
                    </Flex>

                    {/* Draft */}
                  </Flex>
                </Box>
              ) : (
                false
              )}
            </Box>
          </Flex>
        </Flex>
        {roster()}
      </Flex>
    </>
  );
}

export default PlayerTeam;

PlayerTeam.defaultProps = {
  firstName: 'Not',
  lastName: 'Available',
  avatarName: 'NBA Player',
  avatarSrc:
    'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg',
  linkHref: `#`,
  playerNumberPosition: 'PG',
  teamSrc:
    'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg',
};

PlayerTeam.propTypes = {
  playerDetails: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatarName: PropTypes.string,
  avatarSrc: PropTypes.string,
  linkHref: PropTypes.string,
  playerNumberPosition: PropTypes.object,
  age: PropTypes.object,
  height: PropTypes.object,
  country: PropTypes.object,
  draftYearReal: PropTypes.object,
  playerInfo: PropTypes.array,
  nameDivider: PropTypes.object,
  teamSrc: PropTypes.string,
  teamInfo: PropTypes.object,
  teamID: PropTypes.number,
  teamRecord: PropTypes.array,
};
