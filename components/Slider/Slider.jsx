import { Splide } from '@splidejs/react-splide';
import { Flex, Center } from '@chakra-ui/react';
import LeagueLeaders from '../LeagueLeaders';
import styles from '../../styles/Home.module.css';

const Slider = ({ data }) => {
  return (
    <>
      <div className={styles.container}>
        <div className="stats-home">
          <div className="leader-container" data-aos="fade-down">
            <Center>
              <h1>NBA League Leaders</h1>
            </Center>

            <Flex alignItems="center" flexWrap="wrap" gap="2.4rem">
              <Splide
                options={{
                  perPage: 5,
                  perPage: 5,
                  arrows: false,
                  pagination: false,
                  autoplay: true,
                  rewind: true,
                  breakpoints: {
                    2050: {
                      perPage: 3,
                    },
                  },
                  focus: 'center',
                  perMove: 1,
                  drag: 'free',
                  width: '100%',
                }}
              >
                <LeagueLeaders
                  perGame="Points Per Game"
                  perGameShort="PPG"
                  map={data.points}
                />
                <LeagueLeaders
                  perGame="Assists Per Game"
                  perGameShort="AST"
                  map={data.assists}
                />
                <LeagueLeaders
                  perGame="Rebounds Per Game"
                  perGameShort="REB"
                  map={data.rebounds}
                />
                <LeagueLeaders
                  perGame="Steals Per Game"
                  perGameShort="STL"
                  map={data.steals}
                />
                <LeagueLeaders
                  perGame="Blocks Per Game"
                  perGameShort="BPG"
                  map={data.blocks}
                />
                <LeagueLeaders
                  perGame="Triple Double Leaders"
                  perGameShort="Triple Doubles"
                  map={data.tripleDoubles}
                />

                <LeagueLeaders
                  perGame="3 Pointers Made Leaders"
                  perGameShort="3Pts Made"
                  map={data.threePointsMade}
                />
                <LeagueLeaders
                  perGame="3 Pointer Percentage Leaders"
                  perGameShort="3Pt %"
                  map={data.threePointsPercentage}
                />
                <LeagueLeaders
                  perGame="Field Goal Percentage Leaders"
                  perGameShort="FG %"
                  map={data.fieldGoalsPercentage}
                />
                <LeagueLeaders
                  perGame="Free Throw Percentage Leaders"
                  perGameShort="FT %"
                  map={data.freeThrowsPercentage}
                />
              </Splide>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
