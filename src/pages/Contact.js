import React, { useContext } from "react";
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

const ICON_CONFIGS = {
  email: { gradient: "linear-gradient(135deg, #0077ff, #00c6ff)", glow: "rgba(0,119,255,0.3)" },
  linkedin: { gradient: "linear-gradient(135deg, #0077b5, #00a0dc)", glow: "rgba(0,119,181,0.3)" },
  whatsapp: { gradient: "linear-gradient(135deg, #25D366, #128C7E)", glow: "rgba(37,211,102,0.3)" },
  github: { gradient: "linear-gradient(135deg, #333, #666)", glow: "rgba(50,50,50,0.25)" },
};

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.contact || translations["en"].contact;
  const isRTL = language === "he";
  const phoneNumber = "+972505972505";

  const contactLinks = [
    {
      icon: faEnvelope,
      href: "mailto:Noam12882@gmail.com",
      label: t.email,
      text: "Noam12882@gmail.com",
      config: ICON_CONFIGS.email,
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/noam-karavani",
      label: t.linkedin,
      text: "Noam Karavani",
      config: ICON_CONFIGS.linkedin,
    },
    {
      icon: faWhatsapp,
      href: `https://wa.me/${phoneNumber}`,
      label: t.whatsapp,
      text: t.whatsappText,
      config: ICON_CONFIGS.whatsapp,
    },
    {
      icon: faGithub,
      href: "https://github.com/noamkaravani",
      label: t.github,
      text: "noamkaravani",
      config: ICON_CONFIGS.github,
    },
  ];

  return (
    <MainContainer dir={isRTL ? "rtl" : "ltr"}>
      <BgOrb $top="10%" $left="5%" $color="rgba(0,119,255,0.08)" $size="400px" />
      <BgOrb $top="60%" $left="70%" $color="rgba(136,0,255,0.06)" $size="350px" />

      <ContentArea>
        <motion.div
          key={`contact-${language}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <TitleArea>
              <SectionTitle>{t.title}</SectionTitle>
              <TitleUnderline />
              <SubHeader>{t.subtitle}</SubHeader>
            </TitleArea>
          </motion.div>

          <ContactGrid>
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <ContactCard
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  dir={isRTL ? "rtl" : "ltr"}
                  $glow={link.config.glow}
                >
                  <IconWrapper $gradient={link.config.gradient}>
                    <FontAwesomeIcon icon={link.icon} />
                  </IconWrapper>
                  <ContactInfo dir={isRTL ? "rtl" : "ltr"}>
                    <h3>{link.label}</h3>
                    <p>{link.text}</p>
                  </ContactInfo>
                  <ArrowHint>→</ArrowHint>
                </ContactCard>
              </motion.div>
            ))}
          </ContactGrid>
        </motion.div>
      </ContentArea>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(160deg, #080c1c 0%, #0d1535 50%, #080820 100%);
  overflow: hidden;
  direction: ${(props) => props.dir};
`;

const BgOrb = styled.div`
  position: absolute;
  top: ${(p) => p.$top};
  left: ${(p) => p.$left};
  width: ${(p) => p.$size};
  height: ${(p) => p.$size};
  border-radius: 50%;
  background: ${(p) => p.$color};
  filter: blur(60px);
  pointer-events: none;
`;

const ContentArea = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  z-index: 1;
`;

const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TitleUnderline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #0077ff, #8800ff);
  border-radius: 2px;
  margin: 0 auto 1rem;
`;

const SubHeader = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.8rem;
  background: white;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  border: 1px solid #efefef;
  transition: all 0.3s ease;
  position: relative;
  direction: ${(props) => props.dir};

  &:hover {
    border-color: transparent;
    box-shadow: 0 12px 40px ${(p) => p.$glow};
    color: inherit;
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  font-size: 1.4rem;
  color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${(p) => p.$gradient};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  ${ContactCard}:hover & {
    transform: scale(1.1) rotate(-5deg);
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  text-align: ${(props) => (props.dir === "rtl" ? "right" : "left")};

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
    font-weight: 700;
    color: #111;
  }

  p {
    margin: 0;
    color: #777;
    font-size: 0.88rem;
  }
`;

const ArrowHint = styled.span`
  color: #ccc;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  flex-shrink: 0;

  ${ContactCard}:hover & {
    color: #0077ff;
    transform: translateX(4px);
  }
`;

export default Contact;
