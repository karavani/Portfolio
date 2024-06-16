// src/pages/Projects.js
import React from "react";
import { Container, Header, Card } from "semantic-ui-react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Projects = () => {
  const projects = [
    {
      title: "Vacation App",
      description:
        "Developed with React.js, showcasing proficiency in Redux, web sockets, Node.js, CRUD, and more.",
      technologies: "React.js, Redux, Node.js",
      liveLink: "",
      repoLink: "https://github.com/karavani/vacation-app",
    },
    {
      title: "Supermarket App",
      description:
        "Developed with Angular, Node.js, Material UI, and Reactive forms.",
      technologies: "Angular, Node.js, Material UI",
      liveLink: "",
      repoLink: "https://github.com/karavani/supermarket-online",
    },
    {
      title: "Sudoku Game",
      description: "Developed with JavaScript, HTML, and CSS.",
      technologies: "JavaScript, HTML, CSS",
      liveLink: "https://karavani.github.io/sudokusite/",
      repoLink: "",
    },
  ];

  return (
    <Layout>
      <MainContainer>
        <Container>
          <Header as="h1" textAlign="center">
            Projects
          </Header>
          <Card.Group
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Card.Group>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default Projects;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
