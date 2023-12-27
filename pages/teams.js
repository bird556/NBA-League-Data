import styles from '../styles/Home.module.css';
import { Center, Flex } from '@chakra-ui/react';
import ImageWithFallback from '../components/ImageWithFallback';
import { baseUrl, fetchApi } from '../utils/.fetchApi';
import Divisions from '../components/Divisions';
import UseAnimations from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity';
const teams = ({ teams }) => {
  return (
    <>
      <div className="blackBackground"></div>
      <div className="backgroundimg">
        <ImageWithFallback
          className="backgroundimg"
          priority
          layout="fill"
          alt={``}
          src="/teams.jpg"
          fallbackSrc={'/team-background/defaultimage.jpg'}
        />
      </div>
      <div className={styles.container}>
        <div className="stats-home">
          {teams ? (
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
                        map={teams.standings}
                      />
                    </div>
                    <Divisions
                      division="Pacific"
                      divisionIfStatement="Pacific Division"
                      map={teams.standings}
                    />
                  </Flex>
                </Center>
                <Center>
                  <Flex flexWrap="wrap" justifyContent="center" gap="2rem">
                    <Divisions
                      division="Central"
                      divisionIfStatement="Central Division"
                      map={teams.standings}
                    />
                  </Flex>
                </Center>
                <Center>
                  <Flex flexWrap="wrap" justifyContent="center" gap="2rem">
                    <Divisions
                      division="Northwest"
                      divisionIfStatement="Northwest Division"
                      map={teams.standings}
                    />
                    <Divisions
                      division="Southeast"
                      divisionIfStatement="Southeast Division"
                      map={teams.standings}
                    />
                    <Divisions
                      division="Southwest"
                      divisionIfStatement="Southwest Division"
                      map={teams.standings}
                    />
                  </Flex>
                </Center>
              </Flex>
            </div>
          ) : (
            <div data-aos="fade-up">
              <Center h="100vh">
                <Flex flexDirection="column" alignItems="center">
                  <h1>API Loading</h1>
                  <UseAnimations
                    animation={infinity}
                    size="24"
                    strokeColor="#fff"
                  />
                </Flex>
              </Center>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default teams;

// export async function getServerSideProps() {
export async function getStaticProps() {
  const teamsStandings = await fetchApi(
    `${baseUrl}/api/basketball/tournament/132/season/54105/standings/total`
  );

  return {
    props: {
      teams: teamsStandings,
    },
  };
}
