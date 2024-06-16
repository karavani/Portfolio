import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link as ScrollLink, Element } from "react-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Nav>
          <NavItem
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Home
          </NavItem>
          <NavItem
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            About
          </NavItem>
          <NavItem
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Projects
          </NavItem>
          <NavItem
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Contact
          </NavItem>
        </Nav>
      </Header>
      <Main>
        <Element name="home">
          <Section>
            <Home />
          </Section>
        </Element>
        <Element name="about">
          <Section>
            <About />
          </Section>
        </Element>
        <Element name="projects">
          <Section>
            <Projects />
          </Section>
        </Element>
        <Element name="contact">
          <Section>
            <Contact />
          </Section>
        </Element>
        <Footer />
      </Main>
    </>
  );
};

export default App;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const NavItem = styled(ScrollLink)`
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &.active {
    color: #0077ff;
  }

  &:hover {
    color: #0077ff;
  }
`;

const Main = styled.main`
  padding-top: 48px; /* Adjust based on header height */
`;

const Section = styled.section`
  padding: 2rem 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
