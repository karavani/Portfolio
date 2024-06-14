// src/components/Header.js
import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledMenu>
      <Menu.Item as={Link} to="/" header>
        Noam Karavani
      </Menu.Item>
      <MenuIcon onClick={toggleMenu}>
        <FaBars size={24} />
      </MenuIcon>
      <NavMenu open={isOpen}>
        <Menu.Item as={Link} to="/" onClick={() => setIsOpen(false)}>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/about" onClick={() => setIsOpen(false)}>
          About
        </Menu.Item>
        <Menu.Item as={Link} to="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </Menu.Item>
        <Menu.Item as={Link} to="/contact" onClick={() => setIsOpen(false)}>
          Contact
        </Menu.Item>
      </NavMenu>
    </StyledMenu>
  );
};

export default Header;

const StyledMenu = styled(Menu)`
  padding: 0 1rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0.6rem;
    right: 1rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 3rem;
    right: 0;
    width: 100%;
    z-index: 1;
    background: white;
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
    padding: 0.5rem 0 1rem 0;
    display: ${(props) => (props.open ? "block" : "none")};

    .item {
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      color: #fff;
    }
  }
`;
