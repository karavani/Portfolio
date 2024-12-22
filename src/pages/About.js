// src/pages/About.js
import React, { useContext } from "react";
import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const ServiceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ExpertiseArea = styled.div`
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  
  h3 {
    margin-bottom: 1rem;
    color: #333;
  }
  
  p {
    color: #666;
  }
`;

const About = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.about || translations['en'].about;
  const isRTL = language === 'he';
  
  console.log('Current language:', language);
  console.log('Translations available:', translations[language]?.about);
  
  return (
    <Layout>
      <MainContainer language={language}>
        <Container text>
          <Header as="h1" textAlign="center">{t.title}</Header>
          <AboutText>
            <section>
              <h2>{t.summary.title}</h2>
              <p style={{ whiteSpace: 'pre-wrap' }}>{t.summary.content}</p>
            </section>

            <section>
              <h2>{t.expertise.title}</h2>
              <ExpertiseGrid>
                {t.expertise.areas.map((area, index) => (
                  <ExpertiseArea key={index}>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                  </ExpertiseArea>
                ))}
              </ExpertiseGrid>
            </section>
            
            <CTASection>
              <h2>{t.cta.title}</h2>
              <p>{t.cta.description}</p>
              <CTAButton href="/contact">{t.cta.buttonText}</CTAButton>
            </CTASection>
          </AboutText>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default About;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  direction: ${props => props.language === 'he' ? 'rtl' : 'ltr'};
  text-align: ${props => props.language === 'he' ? 'right' : 'left'};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const AboutText = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 2rem;
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ServiceItem = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background: #f8f9fa;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const CTASection = styled.div`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: #0077ff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
  
  &:hover {
    background: #0066dd;
    color: white;
  }
`;
