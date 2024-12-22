// src/components/Header.js
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { LanguageContext } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faLaptopCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language].nav;
  const isRTL = language === 'he';

  const menuItems = [
    { to: "home", label: t.home, icon: faHome },
    { to: "about", label: t.about, icon: faUser },
    { to: "projects", label: t.projects, icon: faLaptopCode },
    { to: "contact", label: t.contact, icon: faEnvelope },
  ];

  return (
    <Nav>
      <NavContent>
        <LanguageDropdown>
          <DropdownButton onClick={() => setIsOpen(!isOpen)} language={language}>
            <DropdownIcon isOpen={isOpen}>▼</DropdownIcon>
          </DropdownButton>
          {isOpen && (
            <DropdownMenu>
              <DropdownItem onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}>
                {language === 'he' ? 'English' : 'עברית'}
              </DropdownItem>
            </DropdownMenu>
          )}
        </LanguageDropdown>

        <NavItems dir={isRTL ? 'rtl' : 'ltr'}>
          {menuItems.map((item) => (
            <LightningMenuItem
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="slds-is-active"
            >
              <DesktopLabel>{item.label}</DesktopLabel>
              <MobileIcon>
                <FontAwesomeIcon icon={item.icon} />
              </MobileIcon>
            </LightningMenuItem>
          ))}
        </NavItems>
      </NavContent>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  transition: all 0.3s ease;
  width: 100%;

  @media (min-width: 769px) {
    top: 0;
    left: 0;
    right: 0;
  }

  @media (max-width: 768px) {
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 4rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0;
    height: 3.5rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex: 1;
  height: 100%;
  direction: ${props => props.dir};
  margin-right: ${props => props.dir === 'rtl' ? '4rem' : '0'};
  margin-left: ${props => props.dir === 'rtl' ? '0' : '4rem'};

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    justify-content: space-around;
    width: 100%;
  }
`;

const DesktopLabel = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.span`
  display: none;
  font-size: 1.2rem;
  color: #666;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    .slds-is-active & {
      color: #1589ee;
    }
  }
`;

const LightningMenuItem = styled(ScrollLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  color: #3e3e3c;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 4rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0;
    line-height: 3.5rem;
    flex: 1;
    max-width: 25%;
    
    &:hover, &.slds-is-active {
      border-bottom: 3px solid #1589ee;
      background: none;
    }
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 7001;

  @media (max-width: 768px) {
    position: fixed;
    top: 100%;
    left: 20px;
    transform: translateY(-97vh); // שימוש ב-viewport height
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 9999;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.35rem;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: #3e3e3c;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 32px;
  height: 32px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 0.8rem;
  }

  &:hover {
    background: rgba(21, 137, 238, 0.08);
    color: #1589ee;
  }

  span {
    display: none;
  }

  &::before {
    content: '${props => props.language === 'he' ? 'עב' : 'EN'}';
    font-weight: 600;
  }
`;

const DropdownIcon = styled.span`
  display: none;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transform-origin: top;
  animation: dropdownAppear 0.2s ease;
  min-width: 80px;
  z-index: 9999;

  @media (max-width: 768px) {
    left: 0;
    top: calc(100% + 0.25rem);
    min-width: 100px;
  }

  @keyframes dropdownAppear {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: none;
  border: none;
  color: #3e3e3c;
  font-size: 0.75rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;

  &:hover {
    background: linear-gradient(90deg, rgba(21, 137, 238, 0.08) 0%, rgba(21, 137, 238, 0) 100%);
    color: #1589ee;
  }
`;


export default Header;
