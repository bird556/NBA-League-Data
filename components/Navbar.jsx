import Link from 'next/link';
import { Flex, Box, Image, Text, Divider } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from './shared/NavLink';
import { useState, useEffect, useRef, useContext } from 'react';
import { TiThMenu } from 'react-icons/ti';
import MobileMenu from './shared/MobileMenu';
import SearchContext from '../context/Search/SearchContext';
import NBAContext from '../context/NBAData/NBAContext';
import { set } from 'nprogress';

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}

export default function Navbar() {
  const { nbaTeamsFull: teams } = useContext(NBAContext);
  const { searchResults, dispatch } = useContext(SearchContext);
  const ref = useRef(null);
  const [name, setName] = useState('');
  const [searchBox, setSearchBox] = useState(false);
  // const debounceValue = useDebounce(name, 1500);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value.length >= 2) {
      e.preventDefault();
      inputTest(e.target.value);
    }
  };

  const handleSearchClick = () => {
    if (ref.current.value.length >= 2 && ref.current) {
      inputTest(ref.current.value);
    }
  };

  //added async
  const inputTest = async (searchName) => {
    const inputValue = searchName;
    console.log(searchName);
    if (searchName.length >= 2) {
      // setName(e.target.value.replace(/ /g, '%20'));
      setName((prevName) => inputValue.replace(/ /g, '%20'));
      // december 27th input

      try {
        const response = await fetch(`/api/search?query=${inputValue}`);
        if (!response.ok) {
          const errorData = await response.json();

          console.error('Error from server:', errorData);
        } else {
          const results = await response.json();

          dispatch({ type: 'GET_SEARCHRESULTS', payload: results });
          setSearchBox(true);
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      }
    } else {
      dispatch({ type: 'CLEAR_SEARCHRESULTS' });
      return setName(' ');
    }
  };

  const clear = () => {
    ref.current.value = '';
    dispatch({ type: 'CLEAR_SEARCHRESULTS' });
    setName('');
    setSearchBox(false);
  };

  const removeSearchBox = (e) => {
    const previousValue = name;
    const currentValue = e.target.value;

    if (previousValue.length > currentValue.length) {
      dispatch({ type: 'CLEAR_SEARCHRESULTS' });
      setName('');
    }
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
          {/* {Array.isArray(searchResults) && debounceValue.length >= 2 ? ( */}
          {searchResults &&
          Boolean(name) &&
          ref.current.value != '' &&
          searchBox ? (
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
                {Array.isArray(searchResults)
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
                                onClick={clear}
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
                // onChange={inputTest}
                onChange={removeSearchBox}
                onKeyDown={handleKeyDown}
                className="search"
                type="text"
                placeholder="Search Player or Team"
              />
              <BiSearch
                ref={ref}
                onClick={handleSearchClick}
                fontSize="3rem"
                className="searchIcon"
                onMouseOver={() => (document.body.style.cursor = 'pointer')}
                onMouseOut={() => (document.body.style.cursor = 'default')}
              />
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
