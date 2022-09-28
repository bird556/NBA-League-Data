import axios from 'axios';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Link from 'next/link';
import { Flex, Box, Image, Text, Divider, Center } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from './shared/NavLink';
import { useState } from 'react';
import { useEffect } from 'react';

// export async function getServerSideProps() {
//   const res = await fetch;
// }

function Navbar(data) {
  const [name, setName] = useState('');
  const [info, setInfo] = useState([]);
  const [res, setRes] = useState([]);
  console.log(typeof name);
  console.log(info);
  useEffect(() => {
    // searchPlayer();
    searchUsers(name);
  }, [name]);

  const inputTest = (e) => {
    if (e.target.value.length >= 2 && e.target.value.length <= 15) {
      return setName(e.target.value.replace(/ /g, '%20'));
    }
    return setName('');
  };
  // setName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  // setName(e.target.value);

  const searchUsers = async (name) => {
    const res = await fetch(`${baseUrl}/api/basketball/search/${name}`, {
      headers: {
        'X-RapidAPI-Key': 'ffab0449d9msh821216a3c72087fp1edd91jsn59babfa2c26d',
        'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com',
      },
    });

    const data = await res.json();

    // console.log(data.results.map((data) => console.log(data.entity.name)));

    // console.log(data.results.map((data) => console.log(data)));
    const searchInfo = data.results;
    setInfo(searchInfo);
    setRes(res);
  };
  console.log(res);

  return (
    <>
      <nav>
        <div className="blur"></div>
        <Link href="/">
          <Image
            src="/nba.png"
            alt="NBA Logo"
            className="navLogo"
            cursor="pointer"
          />
        </Link>
        <Flex wrap="wrap" justifyContent="space-between" alignItems="center">
          <ul className="list">
            <NavLink href="/" exact className="btn">
              Home
              {/* {fetchApi()} */}
            </NavLink>

            <NavLink href="/stats" className="btn">
              Stats
            </NavLink>

            <NavLink href="/playoffs" className="btn">
              Playoffs
              {/* {name} */}
            </NavLink>

            <NavLink href="/teams" className="btn">
              Teams
            </NavLink>
          </ul>

          <Flex zIndex="5" p="0 2.4rem" alignItems="center">
            <div className="search-input">
              <input
                onChange={inputTest}
                // onChange={test}
                className="search"
                type="text"
                placeholder="Search a Player or Team"
              />
              <BiSearch fontSize="3rem" className="searchIcon" />
            </div>
          </Flex>
        </Flex>
      </nav>
      {info ? (
        <Box
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
            {info.map((info) => {
              const data = info.entity;
              if (info.type === 'player') {
                return (
                  <Link
                    key={data.id}
                    href={`/player/${data.slug}/${data.id}`}
                    passHref
                  >
                    <Box cursor="pointer">
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
                              alt="Memphis"
                              // borderRadius="100%"
                              fallbackSrc={
                                'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                              }
                            />
                            <Text fontSize="2xl">{data.team.name}</Text>
                          </Flex>
                        </Box>
                      </Flex>
                      <Box p="1.6rem">
                        <Divider />
                      </Box>
                    </Box>
                  </Link>
                );
              } else if (
                info.type === 'team' &&
                info.entity.country.name === 'USA'
              ) {
                return (
                  <Link href={`/teams/${data.slug}/${data.id}`} passHref>
                    <Box cursor="pointer">
                      <Flex gap="1.8rem" alignItems="center">
                        <Image
                          boxSize="5rem"
                          src={`https://api.sofascore.app/api/v1/team/${data.id}/image`}
                          alt={data.name}
                          borderRadius="100%"
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
            })}
          </Flex>
        </Box>
      ) : (
        false
      )}
    </>
  );
}

export default Navbar;
