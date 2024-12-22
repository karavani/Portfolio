// src/components/Header.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { LanguageToggle } from './LanguageToggle';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const Header = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language].nav;
  const isRTL = language === 'he';

  const menuItems = [
    { to: "home", label: t.home },
    { to: "about", label: t.about },
    { to: "projects", label: t.projects },
    { to: "contact", label: t.contact },
  ];

  return (
    <Nav>
      <NavContent dir={isRTL ? 'rtl' : 'ltr'}>
        <NavItems dir={isRTL ? 'rtl' : 'ltr'}>
          {menuItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
            >
              {item.label}
            </NavItem>
          ))}
        </NavItems>
        <LanguageToggleWrapper dir={isRTL ? 'rtl' : 'ltr'}>
          <LanguageToggle />
        </LanguageToggleWrapper>
      </NavContent>
    </Nav>
  );
};

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
background: white;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
z-index: 1000;
`;

const NavContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
max-width: 1200px;
margin: 0 auto;
`;

const NavItems = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
direction: ${props => props.dir};
`;

const NavItem = styled(ScrollLink)`
color: #333;
text-decoration: none;
padding: 0.5rem 1rem;
cursor: pointer;
transition: color 0.3s ease;
font-size: 14px;

&:hover {
  color: #0077ff;
}

&.active {
  color: #0077ff;
}

@media (max-width: 768px) {
  padding: 0.25rem;
}
`;

const LanguageToggleWrapper = styled.div`
margin-${props => props.dir === 'rtl' ? 'right' : 'left'}: 1rem;
`;

export default Header;
