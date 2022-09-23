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
import { NavLink } from './shared/NavLink';
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
          <NavLink href="/" exact className="btn">
            Home
          </NavLink>

          <NavLink href="/stats" className="btn">
            Stats
          </NavLink>

          <NavLink href="/playoffs" className="btn">
            Playoffs
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
