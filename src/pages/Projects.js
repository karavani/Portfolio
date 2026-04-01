import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.projects || translations["en"].projects;
  const isRTL = language === "he";

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
        key={`projects-${language}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <TitleArea>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <Title>{t.title}</Title>
            <TitleUnderline />
          </motion.div>
        </TitleArea>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <ProjectCard
                {...project}
                isRTL={isRTL}
                githubLabel={t.repository}
                liveLabel={t.liveDemo}
              />
            </motion.div>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  padding: 5rem 2rem;
  background: linear-gradient(160deg, #060b1a 0%, #0d1433 50%, #0a0a1f 100%);
  direction: ${(props) => props.dir};
`;

const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TitleUnderline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #0077ff, #8800ff);
  border-radius: 2px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-items: center;
`;

export default Projects;
