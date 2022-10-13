import styles from '../../../styles/Home.module.css';
import { Box } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../../../utils/.fetchApi';
import ImageWithFallback from '../../../components/ImageWithFallback';
import PlayerTeam from '../../../components/shared/PlayerTeam';

const teamDetails = ({ teamInfo, standings, roster }) => {
  let playerInfo = roster.players.map((data, index) => data);
  playerInfo = playerInfo.map((item) => item.player);
  // console.log(playerInfo.map((data, index) => console.log(data.name)));
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
            <PlayerTeam
              teamInfo={teamInfo}
              firstName={first}
              lastName={last}
              avatarName={teamInfo.team.name}
              teamSrc={`https://api.sofascore.app/api/v1/team/${teamInfo.team.id}/image`}
              teamRecord={team()}
              teamID={teamInfo.team.id}
              playerInfo={playerInfo}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default teamDetails;

export async function getServerSideProps({ params: { id } }) {
  const teamDetails = await fetchApi(`${baseUrl}/api/basketball/team/${id}`);

  const teamStandings = await fetchApi(
    `${baseUrl}/api/basketball/tournament/132/season/38191/standings/total`
  );

  const teamRoster = await fetchApi(
    `${baseUrl}/api/basketball/team/${id}/players`
  );

  return {
    props: {
      teamInfo: teamDetails,
      roster: teamRoster,
      standings: teamStandings,
    },
  };
}
