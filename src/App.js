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
import Timeline from './components/timeline/Timeline';
import ScrollProgress from './components/ui/ScrollProgress';
import CustomCursor from './components/ui/CustomCursor';

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
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <Layout>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="timeline">
            <Timeline />
          </section>
          <section id="projects">
            <Projects />
            <Gigs />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Layout>
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
