// src/pages/Home.js
import React, { useState } from "react";
import { Container, Header, Image } from "semantic-ui-react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const Home = () => {
  const [x, setX] = useState(0);
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const position = (mouseX / rect.width) * 100;
    setX(position);
  };

  return (
    <Layout>
      <MainContainer>
        <Content>
          <CircularImage src="/profile.jpg" size="small" circular />
          <TextContainer>
            <SpotlightText
              as={motion.div}
              onMouseMove={handleMouseMove}
              style={{
                backgroundPosition: `${x}% 50%`,
              }}
            >
              <LargeHeader as="h1">Noam Karavani</LargeHeader>
              <LargeText>Full Stack Web Developer</LargeText>
            </SpotlightText>
          </TextContainer>
        </Content>
      </MainContainer>
    </Layout>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CircularImage = styled(Image)`
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
`;

const SpotlightText = styled(motion.div)`
  display: inline-block;
  background: linear-gradient(90deg, #0077ff, #8800ff, #ffffff);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.2s ease;
`;

const LargeHeader = styled(Header)`
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LargeText = styled.p`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
