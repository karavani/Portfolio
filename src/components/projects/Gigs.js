import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

const Gigs = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.gigs || translations["en"].gigs;
  const isRTL = language === "he";

  const services = [
    {
      id: "fullstack",
      icon: "💻",
      title: t.fullstack.title,
      description: t.fullstack.description,
      features: t.fullstack.features,
      gradient: "linear-gradient(135deg, #0077ff, #00c6ff)",
    },
    {
      id: "frontend",
      icon: "🎨",
      title: t.frontend.title,
      description: t.frontend.description,
      features: t.frontend.features,
      gradient: "linear-gradient(135deg, #8800ff, #cc00ff)",
    },
    {
      id: "backend",
      icon: "⚙️",
      title: t.backend.title,
      description: t.backend.description,
      features: t.backend.features,
      gradient: "linear-gradient(135deg, #00b894, #00cec9)",
    },
    {
      id: "crm",
      icon: "🔄",
      title: t.crm.title,
      description: t.crm.description,
      features: t.crm.features,
      gradient: "linear-gradient(135deg, #fd79a8, #e84393)",
    },
    {
      id: "whatsapp",
      icon: "💬",
      title: t.whatsapp.title,
      description: t.whatsapp.description,
      features: t.whatsapp.features,
      gradient: "linear-gradient(135deg, #25D366, #128C7E)",
    },
  ];

  return (
    <GigsSection>
      <GigsInner dir={isRTL ? "rtl" : "ltr"}>
        <motion.div
          key={`gigs-${language}`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <TitleArea>
            <Title>{t.title}</Title>
            <TitleUnderline />
          </TitleArea>
        </motion.div>

        <ServicesGrid>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <ServiceCard dir={isRTL ? "rtl" : "ltr"}>
                <CardTopBar $gradient={service.gradient} />
                <ServiceIconWrapper $gradient={service.gradient}>
                  <span>{service.icon}</span>
                </ServiceIconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <FeaturesList>
                  {service.features.map((feature, idx) => (
                    <FeatureItem key={idx} $isRTL={isRTL}>
                      <CheckMark $gradient={service.gradient}>✓</CheckMark>
                      {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </ServiceCard>
            </motion.div>
          ))}
        </ServicesGrid>
      </GigsInner>
    </GigsSection>
  );
};

const GigsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(160deg, #0d0519 0%, #180832 50%, #0d0d22 100%);
`;

const GigsInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  direction: ${(props) => props.dir};
  text-align: ${(props) => (props.dir === "rtl" ? "right" : "left")};
`;

const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const Title = styled.h2`
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
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.8rem;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  direction: ${(props) => props.dir};
  text-align: ${(props) => (props.dir === "rtl" ? "right" : "left")};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(136, 0, 255, 0.4);
    box-shadow: 0 8px 40px rgba(136, 0, 255, 0.15);
  }
`;

const CardTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: ${(p) => p.$gradient};
`;

const ServiceIconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 12px;
  background: ${(p) => p.$gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: rgba(255, 255, 255, 0.95);
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 1.2rem;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  flex-direction: ${(p) => (p.$isRTL ? "row-reverse" : "row")};
`;

const CheckMark = styled.span`
  background: ${(p) => p.$gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  flex-shrink: 0;
`;

export default Gigs;
