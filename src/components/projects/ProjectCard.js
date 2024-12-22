// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, image, github, live, isRTL }) => {
  const techArray = technologies.split(', ');
  
  return (
    <Card
      as={motion.div}
      whileHover={{ y: -5 }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <ProjectImage src={image} alt={title} />
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <TechStack>
          {techArray.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>
        <LinksContainer>
          {github && (
            <ProjectLink href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </ProjectLink>
          )}
          {live && (
            <ProjectLink href={live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </ProjectLink>
          )}
        </LinksContainer>
      </ProjectContent>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const TechItem = styled.span`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default ProjectCard;
