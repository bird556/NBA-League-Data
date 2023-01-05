import Link from 'next/link';
import { Flex, Box, Image, Text, Divider } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from './shared/NavLink';
import { useState, useEffect, useRef, useContext } from 'react';
import { TiThMenu } from 'react-icons/ti';
import MobileMenu from './shared/MobileMenu';
import SearchContext from '../context/Search/SearchContext';
import { searchUsers } from '../context/Search/SearchActions';
import NBAContext from '../context/NBAData/NBAContext';

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return debouncedValue;
}

export default function Navbar() {
  const { nbaTeamsFull: teams } = useContext(NBAContext);
  const { searchResults, dispatch } = useContext(SearchContext);
  const ref = useRef(null);
  const [name, setName] = useState('');
  const debounceValue = useDebounce(name, 1500);

  useEffect(() => {
    debounceValue;

    if (debounceValue.length < 2) {
      dispatch({ type: 'CLEAR_SEARCHRESULTS' });
      console.log(searchResults, 'CLEARED 💖🤦‍♂️🤣🐮🦍', 'no request');
      console.log(name.length, 'name.length');
    } else {
      searchData(name);
      console.log(searchResults, debounceValue.length, 'empty info & length');
    }
  }, [debounceValue]);

  const inputTest = (e) => {
    if (e.target.value.length >= 2 && e.target.value.length <= 25) {
      setName(e.target.value.replace(/ /g, '%20'));
    } else {
      return setName(' ');
    }
  };

  const searchData = async (name) => {
    console.log('SEARCHED');
    const results = await searchUsers(name);
    dispatch({ type: 'GET_SEARCHRESULTS', payload: results });
  };

  const clear = () => {
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
          {searchResults && debounceValue.length >= 2 ? (
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
                {searchResults
                  ? searchResults
                      .filter((item, index) => index < 10)
                      .map((info) => {
                        const data = info.entity;
                        if (
                          info.type === 'player' &&
                          teams.includes(data.team.name)
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
                          teams.includes(info.entity.name)
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
          ) : null}
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
          </ul>

          <Flex zIndex="5" p="0 2.4rem" alignItems="center">
            <div className="search-input">
              <input
                ref={ref}
                // disabled={true}
                onChange={inputTest}
                className="search"
                type="text"
                placeholder="Search Player or Team"
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
            dispatch({ type: 'CLEAR_SEARCHRESULTS' });
            setName('');
            ref.current.value = '';
          }}
        />
        <MobileMenu />
      </nav>
    </>
  );
}
