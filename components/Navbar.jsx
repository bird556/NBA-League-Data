import { baseUrl, apiKey, apiHost, fetchApi } from '../utils/.fetchApi';
import Link from 'next/link';
import { Flex, Box, Image, Text, Divider } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from './shared/NavLink';
import { useState, useEffect, useRef } from 'react';
import { TiThMenu } from 'react-icons/ti';
import MobileMenu from './shared/MobileMenu';
function Navbar() {
  const ref = useRef(null);
  const [name, setName] = useState('');
  const [info, setInfo] = useState([]);
  const [team, setTeam] = useState([]);
  const [res, setRes] = useState([]);
  useEffect(() => {
    searchUsers(name);
  }, [name]);

  const inputTest = (e) => {
    if (e.target.value.length >= 2 && e.target.value.length <= 15) {
      return setName(e.target.value.replace(/ /g, '%20'));
    } else {
      return setName('');
    }
  };

  const searchUsers = async (name) => {
    const res = await fetch(`${baseUrl}/api/basketball/search/${name}`, {
      headers: {
        // Hide API Below 👇
        'X-RapidAPI-Key': process.env.REACT_APP_NBAAPIKEY,
        'X-RapidAPI-Host': process.env.REACT_APP_URL_HOST,
      },
    });

    const data = await res.json();
    const searchInfo = data.results;
    setInfo(searchInfo);
    setRes(res);
  };
  const nbaTeamsFull = [
    'Miami Heat',
    'Boston Celtics',
    'Milwaukee Bucks',
    'Philadelphia 76ers',
    'Toronto Raptors',
    'Chicago Bulls',
    'Brooklyn Nets',
    'Atlanta Hawks',
    'Cleveland Cavaliers',
    'Charlotte Hornets',
    'New York Knicks',
    'Washington Wizards',
    'Indiana Pacers',
    'Detroit Pistons',
    'Orlando Magic',
    'Phoenix Suns',
    'Memphis Grizzlies',
    'Golden State Warriors',
    'Dallas Mavericks',
    'Utah Jazz',
    'Denver Nuggets',
    'Minnesota Timberwolves',
    'New Orleans Pelicans',
    'Los Angeles Clippers',
    'San Antonio Spurs',
    'Los Angeles Lakers',
    'Sacramento Kings',
    'Portland Trail Blazers',
    'Oklahoma City Thunder',
    'Houston Rockets',
  ];
  const clear = () => {
    setInfo(false);
    setName('');
    ref.current.value = '';
  };

  return (
    <>
      <nav>
        <div className="blur"></div>
        <Link href="/">
          <Image
            onClick={clear}
            src="/nba.png"
            alt="NBA Logo"
            className="navLogo"
            cursor="pointer"
          />
        </Link>
        <Flex
          className="nav-flex"
          wrap="wrap"
          justifyContent="space-between"
          alignItems="center"
        >
          {info && name ? (
            <Box
              id="Search-Box"
              zIndex="500"
              backgroundColor="rgba(34, 34, 34, 0.868)"
              position="absolute"
              top="8rem"
              right="2.6rem"
              p="1.6rem 2.6rem 1.6rem"
              borderRadius="1rem"
              w="30rem"
            >
              <Flex flexDirection="column" gap="2rem">
                {info
                  ? info
                      .filter((item, index) => index < 10)
                      .map((info) => {
                        const data = info.entity;
                        if (
                          info.type === 'player' &&
                          nbaTeamsFull.includes(data.team.name)
                        ) {
                          return (
                            <>
                              <Link
                                key={data.id}
                                href={`/player/${data.slug}/${data.id}`}
                                passHref
                              >
                                <Box cursor="pointer" onClick={clear}>
                                  <Flex gap="1.8rem" alignItems="center">
                                    <Image
                                      boxSize="5rem"
                                      src={`https://api.sofascore.app/api/v1/player/${data.id}/image`}
                                      alt={data.name}
                                      borderRadius="100%"
                                      fallbackSrc={
                                        'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                                      }
                                    />
                                    <Box>
                                      <Text fontSize="2xl">{data.name}</Text>
                                      <Flex gap="0.8rem" alignItems="center">
                                        <Image
                                          boxSize="3rem"
                                          src={`https://api.sofascore.app/api/v1/team/${data.team.id}/image`}
                                          alt={data.team.name}
                                          fallbackSrc={
                                            'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                                          }
                                        />
                                        <Text fontSize="2xl">
                                          {data.team.name}
                                        </Text>
                                      </Flex>
                                    </Box>
                                  </Flex>
                                  <Box p="1.6rem">
                                    <Divider />
                                  </Box>
                                </Box>
                              </Link>
                            </>
                          );
                        } else if (
                          info.type === 'team' &&
                          nbaTeamsFull.includes(info.entity.name)
                        ) {
                          return (
                            <Link
                              href={`/teams/${data.slug}/${data.id}`}
                              passHref
                            >
                              <Box cursor="pointer" onClick={clear}>
                                <Flex gap="1.8rem" alignItems="center">
                                  <Image
                                    boxSize="5rem"
                                    src={`https://api.sofascore.app/api/v1/team/${data.id}/image`}
                                    alt={data.name}
                                    fallbackSrc={
                                      'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                                    }
                                  />
                                  <Box>
                                    <Text fontSize="2xl">{data.name}</Text>
                                  </Box>
                                </Flex>
                                <Box p="1.6rem">
                                  <Divider />
                                </Box>
                              </Box>
                            </Link>
                          );
                        }
                      })
                  : []}
              </Flex>
            </Box>
          ) : (
            []
          )}
          <ul className="list">
            <NavLink href="/" exact className="btn" onClick={clear}>
              Home
            </NavLink>

            <NavLink href="/teams" className="btn" onClick={clear}>
              Teams
            </NavLink>

            <NavLink href="/player" className="btn" onClick={clear}>
              Player
            </NavLink>

            <NavLink href="#" className="btn" onClick={clear}>
              Stats
            </NavLink>

            {/* <NavLink href="/summerleague" className="btn 
            onClick={clear}
            
            ">
              Summer League
            </NavLink> */}
          </ul>

          <Flex zIndex="5" p="0 2.4rem" alignItems="center">
            <div className="search-input">
              <input
                ref={ref}
                onChange={inputTest}
                className="search"
                type="text"
                placeholder="Search a Player or Team"
              />
              <BiSearch fontSize="3rem" className="searchIcon" />
            </div>
          </Flex>
        </Flex>
        <TiThMenu
          fontSize="3rem"
          className="burgerMenu"
          onClick={() => {
            document.getElementById('menu').classList.remove('closed-menu');
            setInfo([]);
            setName('');
            ref.current.value = '';
          }}
        />
        <MobileMenu />
      </nav>
    </>
  );
}

export default Navbar;
