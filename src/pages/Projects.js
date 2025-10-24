import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import ProjectCard from "../components/projects/ProjectCard";
import useScrollReveal from "../hooks/useScrollReveal";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  const t = translations[language]?.projects || translations["en"].projects;
  const isRTL = language === "he";

  useScrollReveal([
    { selector: '.project-title' },
    { selector: '.project-card' },
  ]);
  const projects = [
    {
      ...t.scholarshipBot,
      image: `${process.env.PUBLIC_URL}/scholarshipBot.jpg`,
      live: "https://wa.me/+972553055698",
    },
    {
      ...t.digilog,
      image: `${process.env.PUBLIC_URL}/digilog.png`,
      live: "https://www.digilog.shop/",
    },
    {
      ...t.surfSpots,
      image: `${process.env.PUBLIC_URL}/surfspots.png`,
      github: "https://github.com/noamkaravani/surf-forecast",
      live: "https://karavani.github.io/surf-forecast/",
    },
    {
      ...t.vacationApp,
      image: `${process.env.PUBLIC_URL}/vacation.png`,
      github: "https://github.com/noamkaravani/vacation-app",
    },
    {
      ...t.supermarketApp,
      image: `${process.env.PUBLIC_URL}/supermarket.jpg`,
      github: "https://github.com/noamkaravani/supermarket-app",
    },
    {
      ...t.sudokuGame,
      image: `${process.env.PUBLIC_URL}/sudoku.png`,
      github: "https://github.com/noamkaravani/sudokusite",
      live: "https://karavani.github.io/sudokusite/",
    },
  ];

  return (
    <ProjectsContainer dir={isRTL ? "rtl" : "ltr"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Title className="project-title">{t.title}</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard  key={index} {...project} isRTL={isRTL} />
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  padding: 4rem 2rem;
  background: #f8f9fa;
  direction: ${(props) => props.dir};
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
  justify-items: center;
`;

export default Projects;
