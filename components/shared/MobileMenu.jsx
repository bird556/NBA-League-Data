import { Center, Flex } from '@chakra-ui/react';
import { NavLink } from './NavLink';
import { BsXLg } from 'react-icons/bs';
function MobileMenu() {
  const closeMenu = () => {
    document.getElementById('menu').classList.add('closed-menu');
  };
  return (
    <>
      <div className="mobile-menu closed-menu" id="menu">
        <div className="blur"></div>
        <BsXLg fontSize="3rem" className="menu-close" onClick={closeMenu} />
        <Center>
          <Flex
            zIndex="9999"
            fontSize="3.6rem"
            flexDirection="column"
            height="100vh"
            justifyContent="center"
            alignItems="center"
            gap="3.6rem"
            className="closemenu-flex"
          >
            <NavLink onClick={closeMenu} href="/" exact className="btn">
              Home
            </NavLink>

            <NavLink onClick={closeMenu} href="/teams" className="btn">
              Teams
            </NavLink>

            <NavLink onClick={closeMenu} href="#" className="btn">
              Player
            </NavLink>

            <NavLink onClick={closeMenu} href="#" className="btn">
              Stats
            </NavLink>

            {/* <NavLink onClick={closeMenu} href="/summerleague" className="btn">
              Summer League
            </NavLink> */}
          </Flex>
        </Center>
      </div>
    </>
  );
}

export default MobileMenu;
