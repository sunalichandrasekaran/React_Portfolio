import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">{/* <Image src={Me} /> */}</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                Home
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
