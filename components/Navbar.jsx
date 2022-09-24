import React from 'react';
import axios from 'axios';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import styled from 'styled-components';
import Link from 'next/link';
import { Flex, Box, Image, Text, Divider, Center } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from './shared/NavLink';
import { useState } from 'react';
function navbar() {
  const [name, setName] = useState('empty');
  const inputTest = (e) => {
    if (e.target.value === '') {
      return setName('');
    } else
      return (
        <Box
          position="absolute"
          bottom="-47"
          bgColor="gray.800"
          w="30rem"
          borderRadius="0rem"
          p="0.4rem 0.8rem"
          cursor="pointer"
        >
          <Flex gap="1.8rem" alignItems="center">
            <Image
              boxSize="5rem"
              src={`https://api.sofascore.app/api/v1/player/987102/image`}
              alt="Ja Morant"
              borderRadius="100%"
              fallbackSrc={
                'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
              }
            />
            <Box>
              <Text fontSize="2xl">Ja Morant</Text>
              <Flex gap="0.4rem" alignItems="center">
                <Image
                  boxSize="2rem"
                  src={`https://api.sofascore.app/api/v1/team/3415/image`}
                  alt="Memphis"
                  borderRadius="100%"
                  fallbackSrc={
                    'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                  }
                />
                <Text fontSize="2xl">Memphis Grizzlies</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      );
    // else return setName(e.target.value);
  };

  const test = (name, id, linkID, slug, teamID, teamName) => (
    <Link href={`/player/${slug}/${linkID}`} passHref>
      <Box cursor="pointer">
        <Flex gap="1.8rem" alignItems="center">
          <Image
            boxSize="5rem"
            src={`https://api.sofascore.app/api/v1/player/${id}/image`}
            alt="Ja Morant"
            borderRadius="100%"
            fallbackSrc={
              'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
            }
          />
          <Box>
            <Text fontSize="2xl">{name}</Text>
            <Flex gap="0.8rem" alignItems="center">
              <Image
                boxSize="3rem"
                src={`https://api.sofascore.app/api/v1/team/${teamID}/image`}
                alt="Memphis"
                borderRadius="100%"
                fallbackSrc={
                  'https://i.pinimg.com/736x/3f/6c/0b/3f6c0b67b844e82d8dd1e7a6d85a2b53.jpg'
                }
              />
              <Text fontSize="2xl">{teamName}</Text>
            </Flex>
          </Box>
        </Flex>
        <Box p="1.6rem">
          <Divider />
        </Box>
      </Box>
    </Link>
  );

  // const axios = require('axios');

  // const options = {
  //   method: 'GET',
  //   // url: `https://basketapi1.p.rapidapi.com/api/basketball/search/${name}`,
  //   headers: {
  //     'X-RapidAPI-Key': 'ffab0449d9msh821216a3c72087fp1edd91jsn59babfa2c26d',
  //     'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com',
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     let data = response.data;
  //     console.log(data);
  //     // console.log(
  //     //   data.results.map((item) => {
  //     //     return item.entity.team.name;
  //     //   })
  //     // );
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //     // console.error(`No Name Yet`);
  //   });

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

            {/* <NavLink href="/standings" className="btn">
            Standings
          </NavLink>

          <NavLink href="/summerleague" className="btn">
            Summer League
          </NavLink> */}
          </ul>

          <Flex zIndex="5" p="0 2.4rem" alignItems="center">
            <div className="search-input">
              <input
                onChange={(e) => inputTest(e)}
                // onChange={test}
                className="search"
                type="text"
                placeholder="Search a Player or Team"
              />
              <BiSearch fontSize="3rem" className="searchIcon" />
            </div>

            {/* 
          <button>
            <BiSearch fontSize="3rem" className="searchIcon" />
          </button> */}
          </Flex>
        </Flex>
      </nav>
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
          {test(
            'Ja Morant',
            987102,
            1181189,
            'morant-ja',
            3415,
            'Memphis Grizzlies'
          )}
          {test(
            'LeBron James',
            817181,
            817181,
            'james-lebron',
            3427,
            'Los Angeles Lakers'
          )}
        </Flex>
      </Box>
    </>
  );
}

export default navbar;
