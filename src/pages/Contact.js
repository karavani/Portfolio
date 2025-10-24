import React, { useContext } from "react";
import { Container, Header } from "semantic-ui-react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.contact || translations["en"].contact;
  const isRTL = language === "he";
  const phoneNumber = "+972505972505";

  // useEffect(() => {
  //   // נקה את כל ה-ScrollReveal הקיים
  //   ScrollReveal().clean('.header-section');
  //   ScrollReveal().clean('.contact-card');

  //   const cleanupTimeout = setTimeout(() => {
  //     const sr = ScrollReveal({
  //       origin: 'top',
  //       distance: '80px',
  //       duration: 2000,
  //       reset: true,
  //     });

  //     sr.reveal('.header-section', {});
  //     sr.reveal('.contact-card', {});
  //   }, 150);

  //   return () => {
  //     clearTimeout(cleanupTimeout);
  //   };
  // }, [language]);

  const contactLinks = [
    {
      icon: faEnvelope,
      href: "mailto:Noam12882@gmail.com",
      label: t.email,
      text: "Noam12882@gmail.com",
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/noam-karavani",
      label: t.linkedin,
      text: "Noam Karavani",
    },
    {
      icon: faWhatsapp,
      href: `https://wa.me/${phoneNumber}`,
      label: t.whatsapp,
      text: t.whatsappText,
    },
    {
      icon: faGithub,
      href: "https://github.com/noamkaravani",
      label: "GitHub",
      text: "noamkaravani",
    },
  ];

  return (
    <MainContainer dir={isRTL ? "rtl" : "ltr"}>
      <Container text>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          key={`contact-${language}`}
        >
          <motion.section
            className="header-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Header as="h1" textAlign="center">
              {t.title}
            </Header>
            <SubHeader>{t.subtitle}</SubHeader>
          </motion.section>
          <ContactGrid dir={isRTL ? "rtl" : "ltr"}>
            {contactLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <ContactCard
                  className="contact-card"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir={isRTL ? "rtl" : "ltr"}
                  whileHover={{ scale: 1.05 }}
                  as={motion.a}
                >
                  <IconWrapper>
                    <FontAwesomeIcon icon={link.icon} />
                  </IconWrapper>
                  <ContactInfo dir={isRTL ? "rtl" : "ltr"}>
                    <h3>{link.label}</h3>
                    <p>{link.text}</p>
                  </ContactInfo>
                </ContactCard>
              </motion.div>
            ))}
          </ContactGrid>
        </motion.div>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  direction: ${(props) => props.dir};
  text-align: ${(props) => (props.dir === "rtl" ? "right" : "left")};
`;

const SubHeader = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  direction: ${(props) => props.dir};
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    color: #0077ff;
  }
`;

const ContactInfo = styled.div`
  text-align: ${(props) => (props.dir === "rtl" ? "right" : "left")};
  margin: ${(props) => (props.dir === "rtl" ? "0 1rem 0 0" : "0 0 0 1rem")};

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #666;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #0077ff;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(0, 119, 255, 0.1);
  transition: all 0.3s ease;

  ${ContactCard}:hover & {
    transform: scale(1.1);
    background: rgba(0, 119, 255, 0.2);
  }
`;

export default Contact;
