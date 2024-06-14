// src/pages/Contact.js
import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const linkVariants = {
  hover: {
    scale: 1.1,
    color: '#0077ff',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const Contact = () => {
  return (
    <Layout>
      <MainContainer>
        <Container text textAlign="center">
          <Header as="h1">Contact Me</Header>
          <ContactLinks>
            <motion.a
              href="mailto:Noam12882@gmail.com"
              variants={linkVariants}
              whileHover="hover"
            >
              <Icon name='mail' /> Noam12882@gmail.com
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/noam-karavani"
              target="_blank"
              rel="noopener noreferrer"
              variants={linkVariants}
              whileHover="hover"
            >
              <Icon name='linkedin' /> Noam Karavani
            </motion.a>
          </ContactLinks>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default Contact;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  a {
    font-size: 1.5rem;
    color: #000000;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;

    &:hover {
      color: #0077ff;
    }

    .icon {
      margin-right: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 1rem;
    }
  }
`;
