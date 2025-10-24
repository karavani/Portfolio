import React, { useContext } from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.home || translations["en"].home;
  const isRTL = language === "he";

  // useEffect(() => {
  //   // נקה את כל ה-ScrollReveal הקיים
  //   ScrollReveal().clean('.home-title');
  //   ScrollReveal().clean('.home-img');

  //   const cleanupTimeout = setTimeout(() => {
  //     const sr = ScrollReveal({
  //       origin: 'top',
  //       distance: '80px',
  //       duration: 2000,
  //       reset: true,
  //     });

  //     sr.reveal('.home-title', {});
  //     sr.reveal('.home-img', { origin: 'right', delay: 400 });
  //   }, 150);

  //   return () => {
  //     clearTimeout(cleanupTimeout);
  //   };
  // }, [language]);

  return (
    <MainContainer dir={isRTL ? "rtl" : "ltr"}>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          key={`home-text-${language}`}
          style={{ flex: 1 }}
        >
          <TextSection className="home-title">
            <SpotlightText
              as={motion.div}
              animate={{
                backgroundPosition: ["0% 75%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3.5, ease: "easeIn" }}
              style={{
                background:
                  "linear-gradient(120deg, blue, blue,rgb(200, 200, 255), blue, blue)",
                backgroundSize: "300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <Greeting>{t.greeting}</Greeting>
              <Name>{t.name}</Name>
              <Role>{t.role}</Role>
            </SpotlightText>
          </TextSection>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: 1 }}
        >
          <ImageSection className="home-img">
            <CircularImage src={`${process.env.PUBLIC_URL}/profile3.png`} size="medium" circular />
          </ImageSection>
        </motion.div>
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
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const CircularImage = styled(Image)`
  width: 37em !important;
  height: 37em !important;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 20em !important;
    height: 20em !important;
  }
`;

const TextSection = styled.div`
  max-width: 600px;
  padding: 0 2rem;
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
    margin-bottom: 2rem;
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
  font-size: 3.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 0;
    font-size: 2.2rem;
  }
`;

const Name = styled.h1`
  font-size: 5rem;
  margin: 0 0 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Role = styled.p`
  font-size: 3rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default Home;
