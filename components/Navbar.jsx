import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  Flex,
  Box,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
function navbar() {
  const inputTest = (e) => console.log(e.target.value);
  return (
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
        <ul
          className="list"
          onClick={(e) => {
            // console.log(document.querySelector('.active'));
            // console.log(e.target);
            // e.target.classList.toggle('active');
          }}
        >
          <Link href="/">
            <li>
              <a href="#" className="btn active">
                Home
              </a>
            </li>
          </Link>
          {/* <Link href="/players">
            <li>
              <a href="#" className="btn">
                Players
              </a>
            </li>
          </Link> */}
          <Link href="/stats">
            <li>
              <a href="#" className="btn">
                Stats
              </a>
            </li>
          </Link>
          <Link href="/playoffs">
            <li>
              <a href="#" className="btn">
                Playoffs
              </a>
            </li>
          </Link>
          <Link href="/teams">
            <li>
              <a href="#" className="btn">
                Teams
              </a>
            </li>
          </Link>
          <Link href="/standings">
            <li>
              <a href="#" className="btn">
                Standings
              </a>
            </li>
          </Link>
          {/* <Link href="/summerleague">
            <li>
              <a href="#" className="btn">
                Summer League
              </a>
            </li>
          </Link> */}
        </ul>

        <Flex
          zIndex="5"
          // p="2.4rem"
          alignItems="center"
        >
          <input
            onChange={inputTest}
            className="search-input"
            type="text"
            placeholder="Search a Player or Team"
          />

          <button>
            <BiSearch fontSize="3rem" className="searchIcon" />
          </button>
        </Flex>
      </Flex>
    </nav>
  );
}

export default navbar;
