import { Center, Box, VStack, Flex } from '@chakra-ui/react';
import { NavLink } from './NavLink';
import { BsXLg } from 'react-icons/bs';
function MobileMenu() {
  return (
    <>
      <div className="mobile-menu closed-menu" id="menu">
        <div className="blur"></div>
        <BsXLg
          fontSize="3rem"
          className="menu-close"
          onClick={() => {
            document.getElementById('menu').classList.add('closed-menu');
          }}
        />
        <Center>
          <Flex
            zIndex="9999"
            fontSize="6xl"
            flexDirection="column"
            height="100vh"
            justifyContent="center"
            alignItems="center"
            gap="3.6rem"
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
          </Flex>
        </Center>
      </div>
    </>
  );
}

export default MobileMenu;
