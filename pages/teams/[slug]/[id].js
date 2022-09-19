import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';
import ImageNext from 'next/image';
import { Image, Flex, Divider, Box } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../../../utils/fetchApi';
import ImageWithFallback from '../../../components/ImageWithFallback';

const teamDetails = ({ topPlayers, teamInfo, standings, media, roster }) => {
  let playerInfo = roster.players.map((data, index) => data);
  playerInfo = playerInfo.map((item) => item.player);
  const fullName = teamInfo.team.name;
  const [first, last] = fullName.split(' ');
  const team = () =>
    standings.standings.map((data, index) => {
      if (
        data.name == 'Eastern Conference' ||
        data.name == 'Western Conference'
      ) {
        return data.rows.map((item, index) => {
          if (item.team.id === teamInfo.team.id) {
            return <h1 key={index}>{`${item.wins}-${item.losses}`}</h1>;
          }
        });
      }
    });

  return (
    <>
      <div className="blackBackground"></div>

      <ImageWithFallback
        priority
        key={teamInfo.team.id}
        layout="fill"
        alt={`${first} ${last}`}
        src={`/team-background/${teamInfo.team.slug}.jpg`}
        fallbackSrc={'/team-background/defaultimage.jpg'}
        className="backgroundimg"
      />

      <div className={styles.container}>
        <div className="player-team-details">
          <Box p="8rem" data-aos="fade-right">
            <Flex alignItems="center" justifyContent="space-between">
              <Flex flexWrap="wrap" flexDirection="column">
                <Flex flexDirection="column" marginBottom="3.6rem">
                  <Flex alignItems="center" gap="2.4rem">
                    <h2 data-aos="fade-right" data-aos-delay="400">
                      {first}
                    </h2>
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
                        {last.toUpperCase()}
                      </h1>
                      <Box w="110%">
                        <Divider />
                      </Box>
                    </Box>
                    {/* Team, Jersey Number, Position & Follow Button+ */}
                    <Flex
                      alignItems="center"
                      gap="2.4rem"
                      flexWrap="wrap"
                      data-aos="fade-down"
                      data-aos-delay="500"
                    >
                      <Link href={`#`} passHref>
                        <Image
                          cursor="pointer"
                          boxSize="10rem"
                          alt={teamInfo.team.name}
                          src={`https://api.sofascore.app/api/v1/team/${teamInfo.team.id}/image`}
                        />
                      </Link>
                      <Flex gap="1.2rem" alignItems="center">
                        <Box marginLeft="3.6rem">
                          <button
                            id="btn-follow"
                            onClick={(e) => {
                              document.getElementById(
                                'btn-follow'
                              ).style.border =
                                '2px rgba(92, 148, 13, 0.7) solid';
                              document.getElementById(
                                'btn-follow'
                              ).style.backgroundColor =
                                'rgba(102, 168, 15, 0.5)';
                              const followed =
                                document.getElementById('follow');
                              followed.innerHTML = 'Followed';
                            }}
                          >
                            <a id="follow" href="#">
                              Follow
                              <span id="plus-sign"> +</span>
                            </a>
                          </button>
                        </Box>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                {/* Team Record */}
                <Box bgColor="">
                  <Flex
                    gap="6.4rem"
                    bgColor=""
                    maxWidth="36rem"
                    marginBottom="3.6rem"
                  >
                    <Flex flexDirection="column">
                      <p>Record</p>
                      {team()}
                    </Flex>
                  </Flex>
                  <Box maxWidth="36rem" marginBottom="3.6rem">
                    <Divider />
                  </Box>
                </Box>
                {/* Born, Country, Team, Draft Team & Year */}
                <Box bgColor="">
                  <Flex flexDirection="column" gap="2.4rem">
                    {/* Born */}
                    <Flex maxWidth="36rem" justifyContent="space-between">
                      <p>Age:</p>
                    </Flex>

                    {/* Born */}
                    <Flex maxWidth="36rem" justifyContent="space-between">
                      <p>Born:</p>
                    </Flex>

                    {/* Country */}
                    <Flex maxWidth="36rem" justifyContent="space-between">
                      <p>Country:</p>
                    </Flex>

                    {/* Draft */}
                  </Flex>
                </Box>
              </Flex>
              <Box w="50%">
                <Flex
                  flexWrap="wrap"
                  gap="2.4rem"
                  justifyContent="center"
                  data-aos="fade-right"
                  data-aos-offset="700"
                >
                  {playerInfo.map((data, index) => (
                    <>
                      <Link
                        key={data.id}
                        href={`/player/${data.slug}/${data.id}`}
                        passHref
                      >
                        <Flex
                          alignItems="center"
                          flexDirection="column"
                          justifyContent="center"
                          cursor="pointer"
                        >
                          <Image
                            priority
                            boxSize="150px"
                            layout="fill"
                            src={`https://api.sofascore.app/api/v1/player/${data.id}/image`}
                            alt={data.name}
                            borderRadius="100%"
                            fallbackSrc={
                              'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                            }
                          />

                          <p key={index}>{data.shortName}</p>
                        </Flex>
                      </Link>
                    </>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>
      </div>
    </>
  );
};

export default teamDetails;

export async function getServerSideProps({ params: { id } }) {
  const teamTopPlayers = await fetchApi(
    `${baseUrl}/api/basketball/team/${id}/tournament/132/season/38191/best-players/regularseason`
  );

  const teamDetails = await fetchApi(`${baseUrl}/api/basketball/team/${id}`);

  const teamMedia = await fetchApi(
    `${baseUrl}/api/basketball/team/${id}/media`
  );

  const teamStandings = await fetchApi(
    `${baseUrl}/api/basketball/tournament/132/season/38191/standings/total`
  );

  const teamRoster = await fetchApi(
    `${baseUrl}/api/basketball/team/${id}/players`
  );

  return {
    props: {
      topPlayers: teamTopPlayers,
      teamInfo: teamDetails,
      roster: teamRoster,
      standings: teamStandings,
      media: teamMedia,
    },
  };
}
