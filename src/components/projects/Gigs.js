import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../context/LanguageContext';
import { translations } from '../../translations/translations';

const Gigs = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.gigs || translations['en'].gigs;
  const isRTL = language === 'he';

  const services = [
    {
      id: 'fullstack',
      icon: '💻',
      title: t.fullstack.title,
      description: t.fullstack.description,
      features: t.fullstack.features
    },
    {
      id: 'frontend',
      icon: '🎨',
      title: t.frontend.title,
      description: t.frontend.description,
      features: t.frontend.features
    },
    {
      id: 'backend',
      icon: '⚙️',
      title: t.backend.title,
      description: t.backend.description,
      features: t.backend.features
    },
    {
      id: 'crm',
      icon: '🔄',
      title: t.crm.title,
      description: t.crm.description,
      features: t.crm.features
    },
    {
      id: 'whatsapp',
      icon: '💬',
      title: t.whatsapp.title,
      description: t.whatsapp.description,
      features: t.whatsapp.features
    }
  ];

  return (
    <GigsSection>
      <Container dir={isRTL ? 'rtl' : 'ltr'}>
        <Title>{t.title}</Title>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <FeaturesList>
                {service.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <FeatureIcon isRTL={isRTL}>✓</FeatureIcon>
                    {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </GigsSection>
  );
};

const GigsSection = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  direction: ${props => props.dir};
  text-align: ${props => props.dir === 'rtl' ? 'right' : 'left'};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  direction: ${props => props.dir};
  text-align: ${props => props.dir === 'rtl' ? 'right' : 'left'};

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #555;
`;

const FeatureIcon = styled.span`
  color: #0077ff;
  margin-${props => props.isRTL ? 'left' : 'right'}: 0.5rem;
  font-weight: bold;
`;

export default Gigs; 