import Link from 'next/link';
import styles from '../../../styles/Home.module.css';
import ImageWithFallback from '../../../components/ImageWithFallback';
import {
  Image,
  Avatar,
  Flex,
  Divider,
  Box,
  Center,
  Spacer,
} from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../../../utils/fetchApi';
import PlayerTeam from '../../../components/shared/PlayerTeam';
import Button from '../../../components/shared/Button';
const playerDetails = ({
  playerStats,
  playerDetails,
  draftDetails,
  playoffStats,
}) => {
  const team = playerDetails.player.team.name;
  console.log(playerDetails);
  const fullName = playerDetails.player.name;
  const [first, last] = fullName.split(' ');
  const country = playerDetails.player.country.name;
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const nth = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

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

  const height = () => {
    let cm = playerDetails.player.height;
    let inches = cm / 2.54;
    let foot = Math.floor(inches / 12);
    inches = Math.floor(inches - 12 * foot);
    return (
      <Flex gap="0.8rem">
        <h3>
          {foot}
          <span>ft</span>
        </h3>
        <Spacer />
        <h3>
          {inches}
          <span>in</span>
        </h3>
      </Flex>
    );
  };

  const birthDay = () => {
    let timeStamp = playerDetails.player.dateOfBirthTimestamp;
    let date = new Date(timeStamp * 1000);
    let day = date.getDate() + 1;
    return `${month[date.getMonth()]} ${day}${nth(day)}, ${date.getFullYear()}`;
  };

  const age = () => {
    let timeStamp = playerDetails.player.dateOfBirthTimestamp;
    let date = new Date(timeStamp * 1000).toLocaleDateString('en-US');
    let newDate = new Date(date);
    let month_diff = Date.now() - newDate.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return (
      <Flex maxWidth="36rem" justifyContent="space-between">
        <p>Age:</p>
        <p>{age}</p>
      </Flex>
    );
  };

  const draftYearReal = () => {
    if (draftDetails) {
      let draft =
        draftDetails.transferHistory[draftDetails.transferHistory.length - 1];
      console.log(draft);
      let unixTimeStamp = draft.transferDateTimestamp;
      let d = new Date(unixTimeStamp * 1000);
      let round = draft.round;
      let pick = draft.pick;
      let team = draft.transferTo.nameCode;
      if (round) {
        return (
          <Flex maxWidth="36rem" justifyContent="space-between">
            <p>Draft:</p>
            <p>
              {`${round}${nth(round)} Round ${pick}${nth(
                pick
              )} Pick ${d.getFullYear()} (${team})`}
            </p>
          </Flex>
        );
      } else {
        return (
          <Flex maxWidth="36rem" justifyContent="space-between">
            <p>Draft Year:</p>
            <p>{d.getFullYear()}</p>
          </Flex>
        );
      }
    }
  };

  const playerNumber = () => (
    <>
      <h4>{`#${playerDetails.player.shirtNumber}`}</h4>
      <Center height="25px">
        <Divider orientation="vertical" />
      </Center>
      <h4>{playerDetails.player.position.slice(0, 1)}</h4>
    </>
  );

  const customBackground = `/player-background/${playerDetails.player.slug}.jpg`;
  return (
    <>
      <div className="blackBackground"></div>

      <ImageWithFallback
        priority
        key={playerDetails.player.id}
        layout="fill"
        alt={`${first} ${last}`}
        src={customBackground}
        fallbackSrc={'/player-background/defaultimage1.jpg'}
        className="backgroundimg"
      />

      <div className={styles.container}>
        {/* <PlayerTeam
          teamFirstName={first}
          teamLastName={last.toUpperCase()}
          avatarName={playerDetails.player.name}
          avatarSrc={`https://api.sofascore.app/api/v1/player/${playerDetails.player.id}/image`}
          linkHref={`/teams/${playerDetails.player.team.slug}/${playerDetails.player.team.id}`}
          playerNumberPosition={playerNumber()}
          age={age()}
        /> */}
        <div className="player-team-details">
          <Box p="8rem" data-aos="fade-right">
            <Flex flexWrap="wrap" flexDirection="column">
              <Flex flexDirection="column" marginBottom="3.6rem">
                <Flex alignItems="center" gap="2.4rem">
                  <h2 data-aos="fade-right" data-aos-delay="400">
                    {first}
                  </h2>
                  {/* Avatar Image */}
                  <Avatar
                    pointerEvents="none"
                    size="2xl"
                    name={playerDetails.player.name}
                    src={`https://api.sofascore.app/api/v1/player/${playerDetails.player.id}/image`}
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
                    <Link
                      key={playerDetails.player.team.id}
                      href={`/teams/${playerDetails.player.team.slug}/${playerDetails.player.team.id}`}
                      passHref
                    >
                      <Image
                        cursor="pointer"
                        boxSize="10rem"
                        alt={playerDetails.player.name}
                        src={`https://api.sofascore.app/api/v1/team/${playerDetails.player.team.id}/image`}
                        fallbackSrc={
                          'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                        }
                      />
                    </Link>
                    {playerNumber()}
                    <Button />
                  </Flex>
                </Flex>
              </Flex>
              {/* Height & Weight */}
              <Box>
                <Flex
                  gap="6.4rem"
                  bgColor=""
                  maxWidth="36rem"
                  marginBottom="3.6rem"
                >
                  <Flex flexDirection="column">
                    <p>Height</p>
                    {height()}
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
                  {age()}

                  {/* Born */}
                  <Flex maxWidth="36rem" justifyContent="space-between">
                    <p>Born:</p>
                    <p>{birthDay()}</p>
                  </Flex>

                  {/* Country */}
                  <Flex maxWidth="36rem" justifyContent="space-between">
                    <p>Country:</p>
                    <p>{country}</p>
                  </Flex>

                  {/* Draft */}
                  {draftYearReal()}
                </Flex>
              </Box>
            </Flex>
          </Box>
          {/* </Center> */}

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
                {/* <h4>{playerStats.statistics.type.slice(7)}</h4> */}
                <h4>
                  {playerStats
                    ? playerStats.statistics.type.slice(7)
                    : 'Season 21-22'}
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

                        {/* <h4>
                          {(
                            playerStats.statistics.assists /
                            playerStats.statistics.appearances
                          ).toFixed(1)}
                        </h4> */}
                        <h4>0</h4>
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
                        {/* <h4>
                          {(
                            playerStats.statistics.blocks /
                            playerStats.statistics.appearances
                          ).toFixed(1)}
                        </h4> */}
                        <h4>0</h4>
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
                        {/* <h4>
                          {(
                            playerStats.statistics.steals /
                            playerStats.statistics.appearances
                          ).toFixed(1)}
                        </h4> */}
                        <h4>0</h4>
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
                        {/* <h4>
                          {playerStats.statistics.fieldGoalsPercentage.toFixed(
                            1
                          )}
                        </h4> */}
                        <h4>0</h4>
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
                        {/* <h4>
                          {' '}
                          {playerStats.statistics.threePointsPercentage.toFixed(
                            1
                          )}
                        </h4> */}
                        <h4>0</h4>
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
                        {/* <h4>
                          {playerStats.statistics.freeThrowsPercentage.toFixed(
                            1
                          )}
                        </h4> */}
                        <h4>0</h4>
                      </Flex>
                    </Box>
                  </Flex>
                </div>
              </Flex>
              {playoffs()}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default playerDetails;

export async function getServerSideProps({ params: { id } }) {
  const stats = await fetchApi(
    `${baseUrl}/api/basketball/player/${id}/tournament/132/season/38191/statistics/regularseason`
  );
  const statsPlayoffs = await fetchApi(
    `${baseUrl}/api/basketball/player/${id}/tournament/132/season/38191/statistics/playoffs`
  );

  const details = await fetchApi(`${baseUrl}/api/basketball/player/${id}`);

  const draft = await fetchApi(
    `${baseUrl}/api/basketball/player/${id}/transfers`
  );

  return {
    props: {
      playerStats: stats,
      playerDetails: details,
      draftDetails: draft,
      playoffStats: statsPlayoffs,
    },
  };
}
