import React, { useContext } from "react";
import { Container, Header } from "semantic-ui-react";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

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
  const t = translations[language]?.about || translations["en"].about;

  // useEffect(() => {
  //   // נקה את כל ה-ScrollReveal הקיים
  //   ScrollReveal().clean('.h1-header');
  //   ScrollReveal().clean('.summery');
  //   ScrollReveal().clean('.expertises');
  //   ScrollReveal().clean('.cta-section');

  //   // המתן שהניקוי יסתיים
  //   const cleanupTimeout = setTimeout(() => {
  //     const sr = ScrollReveal({
  //       origin: 'top',
  //       distance: '80px',
  //       duration: 2000,
  //       reset: true,
  //     });

  //     sr.reveal('.h1-header', {});
  //     sr.reveal('.summery', {});
  //     sr.reveal('.expertises', {});
  //     sr.reveal('.cta-section', {});
  //   }, 150);

  //   return () => {
  //     clearTimeout(cleanupTimeout);
  //   };
  // }, [language]);

  return (
    <MainContainer language={language}>
      <Container text>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          key={`about-${language}`}
        >
          <Header className="h1-header" as="h1" textAlign="center">
            {t.title}
          </Header>
          <AboutText className="summery">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>{t.summary.title}</h2>
              <p style={{ whiteSpace: "pre-wrap" }}>{t.summary.content}</p>
            </motion.section>

            <motion.section
              className="expertises"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2>{t.expertise.title}</h2>
              <ExpertiseGrid>
                {t.expertise.areas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <ExpertiseArea>
                      <h3>{area.title}</h3>
                      <p>{area.description}</p>
                    </ExpertiseArea>
                  </motion.div>
                ))}
              </ExpertiseGrid>
            </motion.section>

            <CTASection
              as={motion.div}
              className="cta-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2>{t.cta.title}</h2>
              <CTAButton to="contact" smooth={true} duration={500}>
                {t.cta.buttonText}
              </CTAButton>
            </CTASection>
          </AboutText>
        </motion.div>
      </Container>
    </MainContainer>
  );
};

export default About;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  direction: ${(props) => (props.language === "he" ? "rtl" : "ltr")};
  text-align: ${(props) => (props.language === "he" ? "right" : "left")};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const AboutText = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 2rem;
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
const CTAButton = styled(ScrollLink)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #0077ff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background: #0066dd;
    color: white;
  }
`;
