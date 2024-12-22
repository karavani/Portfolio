// src/pages/Home.js
import React, { useState, useContext } from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations';

const Home = () => {
  const [x, setX] = useState(0);
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const position = (mouseX / rect.width) * 100;
    setX(position);
  };

  return (
    <MainContainer>
      <ContentWrapper>
        <ImageSection>
          <CircularImage
            src="/profile2.png"
            size="medium" 
            circular
          />
        </ImageSection>
        <TextSection>
          <SpotlightText
            as={motion.div}
            onMouseMove={handleMouseMove}
            style={{
              backgroundPosition: `${x}% 50%`,
            }}
          >
            <Greeting>{t.greeting}</Greeting>
            <Name>{t.name}</Name>
            <Role>{t.role}</Role>
          </SpotlightText>
        </TextSection>
      </ContentWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    min-height: calc(100vh - 90px);
    padding-bottom: 90px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding-top: 2rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CircularImage = styled(Image)`
  width: 300px !important;
  height: 300px !important;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 180px !important;
    height: 180px !important;
  }
`;

const TextSection = styled.div`
  flex: 2;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const SpotlightText = styled(motion.div)`
  display: inline-block;
  background: linear-gradient(90deg, #0077ff, #8800ff, #ffffff);
  background-size: 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.2s ease;
  width: 100%;
`;

const Greeting = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Name = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Role = styled.p`
  font-size: 2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export default Home;
