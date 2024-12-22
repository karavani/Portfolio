// src/pages/Projects.js
import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { LanguageContext } from '../components/language/LanguageContext';
import { translations } from '../translations/translations';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.projects;
  const isRTL = language === 'he';

  const projects = [
    {
      ...t.surfSpots,
      image: "/surfspots.png",
      github: "https://github.com/noamkaravani/surf-forecast",
      live: "https://karavani.github.io/surf-forecast/"
    },
    {
      ...t.vacationApp,
      image: "/vacation.png",
      github: "https://github.com/noamkaravani/vacation-app"
    },
    {
      ...t.supermarketApp,
      image: "/supermarket.png",
      github: "https://github.com/noamkaravani/supermarket-app"
    },
    {
      ...t.sudokuGame,
      image: "/sudoku.png",
      github: "https://github.com/noamkaravani/sudokusite",
      live: "https://karavani.github.io/sudokusite/"
    }
  ];

  return (
    <ProjectsContainer dir={isRTL ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Title>{t.title}</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              isRTL={isRTL}
            />
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  background: #f8f9fa;
  direction: ${props => props.dir};
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #333;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export default Projects;
