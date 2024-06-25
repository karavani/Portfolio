// src/pages/About.js
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { motion, useScroll, useSpring } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Layout>
      <ProgressBar style={{ scaleX }} />
      <MainContainer>
        <Container text>
          <Header as="h1" textAlign="center">About Me</Header>
          <AboutText>
            I am Noam Karavani, a passionate and skilled Full Stack Web Developer with almost 2.5 years of experience in the industry. My journey in web development has been marked by a commitment to delivering high-quality solutions and an eagerness to embrace new challenges and technologies.
            <br /><br />
            <strong>Professional Background:</strong>
            <br />
            Over the past few years, I have had the opportunity to work at Matrix Company, where I was involved in a variety of projects for government offices, banks, and other organizations. This experience has equipped me with a solid foundation in web development and honed my skills in creating robust and scalable solutions.
            <br /><br />
            <strong>Skills and Expertise:</strong>
            <br />
            My primary programming language is JavaScript, and I specialize in frontend development. I am proficient in working with frameworks and tools such as Lightning Web Components (LWC), React, and Visual Studio Code (VS Code). My expertise in these technologies allows me to build dynamic and responsive web applications that meet the highest standards.
            <br /><br />
            <strong>Personal Attributes:</strong>
            <br />
            What drives me in my work is the blend of creativity and problem-solving. I thrive on the challenges that web development presents, and I enjoy exploring new technologies and libraries to enhance my projects. My approach to problem-solving involves utilizing debugging tools, leveraging resources like Chat GPT and Google, and maintaining a flexible perspective. When faced with difficult problems, I often find that taking a break and returning with a fresh mindset leads to innovative solutions.
            <br /><br />
            <strong>Achievements and Milestones:</strong>
            <br />
            While I am always striving for recognition, my most significant achievements lie in the unique and out-of-the-box solutions I have provided to our clients. These solutions have helped solve complex problems and improve the efficiency of their operations. I hold a certification from John Bryce, which has been foundational in my development journey.
            <br /><br />
            <strong>Career Goals:</strong>
            <br />
            My aspirations are to continue developing cutting-edge web technologies, lead projects, and mentor junior developers. I am particularly interested in working on web projects that utilize the latest technologies and methodologies. My goal is to stay at the forefront of the industry and contribute to meaningful and impactful projects.
            <br /><br />
            <strong>Education and Training:</strong>
            <br />
            I am a certified Full Stack Web Developer, having completed my training at John Bryce. Beyond formal education, I am an avid learner, constantly expanding my knowledge through YouTube, Google, and Chat GPT. This continuous learning approach helps me stay updated with the latest trends and best practices in web development.
            <br /><br />
            <strong>Interests and Hobbies:</strong>
            <br />
            Outside of work, I enjoy exploring new projects and experimenting with different libraries for fun. Additionally, I like to play the guitar and surf. These activities provide a great balance to my professional life and keep me energized and inspired.
          </AboutText>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default About;

const ProgressBar = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: #0077ff;
  transform-origin: 0%;
  z-index: 10;
`;

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

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 2rem;
`;
