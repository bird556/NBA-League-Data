import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Center, Flex, Box, Avatar, Image } from '@chakra-ui/react';
import ImageWithFallback from '../components/ImageWithFallback';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Divisions from '../components/Divisions';
const teams = (team) => {
  const eastTeams = () =>
    team.teams.standings.map((data, index) => {
      if (data.name == 'Eastern Conference') {
        return data.rows.map((item, index) => {
          return (
            <Link
              key={item.team.id}
              href={`/teams/${item.team.slug}/${item.team.id}`}
              passHref
            >
              <Flex cursor="pointer" alignItems="center">
                <Image
                  boxSize="10rem"
                  alt={item.team.name}
                  src={`https://api.sofascore.app/api/v1/team/${item.team.id}/image`}
                />
                {/* <h4>
                  {`
                  # ${index + 1} 
                  ${item.team.name}`}</h4> */}
                <h4>{item.team.name}</h4>
              </Flex>
            </Link>
          );
        });
      }
    });

  return (
    <>
      <div className="blackBackground"></div>

      <div className="backgroundimg">
        <ImageWithFallback
          className="backgroundimg"
          priority
          layout="fill"
          alt={``}
          src={`https://media.gettyimages.com/photos/the-memphis-grizzlies-huddle-up-during-round-1-game-4-of-the-2022-nba-picture-id1240194361?s=2048x2048`}
          fallbackSrc={'/team-background/defaultimage.jpg'}
        />
      </div>
      {/* <img
        className="backgroundimg"
        src={`https://media.gettyimages.com/photos/the-memphis-grizzlies-huddle-up-during-round-1-game-4-of-the-2022-nba-picture-id1240194361?s=2048x2048`}
        alt=""
      /> */}
      <div className={styles.container}>
        <div className="stats-home">
          <div className="leader-container" data-aos="fade-down">
            <Center>
              <h1 data-aos="fade-down" data-aos-delay="600">
                Teams
              </h1>
            </Center>
            <Flex flexDirection="column" flexWrap="wrap" gap="2rem">
              <Center>
                <Flex justifyContent="center" flexWrap="wrap" gap="2rem">
                  <div data-aos="fade-right" data-aos-delay="200">
                    <Divisions
                      division="Atlantic"
                      divisionIfStatement="Atlantic Division"
                      map={team.teams.standings}
                    />
                  </div>
                  <Divisions
                    division="Pacific"
                    divisionIfStatement="Pacific Division"
                    map={team.teams.standings}
                  />
                </Flex>
              </Center>
              <Center>
                <Flex flexWrap="wrap" justifyContent="center" gap="2rem">
                  <Divisions
                    division="Central"
                    divisionIfStatement="Central Division"
                    map={team.teams.standings}
                  />
                </Flex>
              </Center>
              <Center>
                <Flex flexWrap="wrap" justifyContent="center" gap="2rem">
                  <Divisions
                    division="Northwest"
                    divisionIfStatement="Northwest Division"
                    map={team.teams.standings}
                  />
                  <Divisions
                    division="Southeast"
                    divisionIfStatement="Southeast Division"
                    map={team.teams.standings}
                  />
                  <Divisions
                    division="Southwest"
                    divisionIfStatement="Southwest Division"
                    map={team.teams.standings}
                  />
                </Flex>
              </Center>
            </Flex>
          </div>
        </div>
      </div>
      {/* <div className={styles.container}>
        <Divisions />
      </div> */}
      {/* <div className={styles.container}>
        <div className="player-team-details team">
          <Center marginTop="2.4rem">
            <h2>Teams</h2>
          </Center>
          <Flex justifyContent="space-around">
            <Box>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Box>
                  <h3>Eastern Conference</h3>
                </Box>
                {eastTeams()}
              </Flex>
            </Box>
            <Box>
              <h3>Western Conference</h3>
            </Box>
          </Flex>
        </div>
      </div> */}
    </>
  );
};

export default teams;

export async function getServerSideProps() {
  const teamsStandings = await fetchApi(
    `${baseUrl}/api/basketball/tournament/132/season/38191/standings/total`
  );

  return {
    props: {
      teams: teamsStandings,
    },
  };
}
