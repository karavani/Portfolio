import React from 'react';
import { ThemeProvider } from "styled-components";
import { LanguageProvider } from "./context/LanguageContext";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Gigs from './components/projects/Gigs';
import Layout from './components/layout/Layout';

const theme = {
  colors: {
    primary: "#0077ff",
    secondary: "#8800ff",
    text: "#333333",
    background: "#ffffff",
  },
};

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
            <Gigs />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Layout>
        <Header />
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
