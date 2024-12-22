// src/components/Footer.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { LanguageContext } from '../language/LanguageContext';
import { translations } from '../../translations/translations';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language]?.footer;
  const isRTL = language === 'he';
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer dir={isRTL ? 'rtl' : 'ltr'}>
      <FooterContent>
        <CopyrightText>
          © {currentYear} {t.rights} - {t.developer}
        </CopyrightText>
        
        <SocialLinks>
          <SocialLink 
            href="https://www.linkedin.com/in/noam-karavani" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.socialLinks.linkedin}
          >
            <Icon name="linkedin" />
          </SocialLink>
          
          <SocialLink 
            href="https://github.com/noamkaravani" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.socialLinks.github}
          >
            <Icon name="github" />
          </SocialLink>
          
          <SocialLink 
            href="mailto:Noam12882@gmail.com"
            aria-label={t.socialLinks.email}
          >
            <Icon name="mail" />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 0;
  margin-top: auto;
  direction: ${props => props.dir};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  color: #666;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #0077ff;
  }

  i.icon {
    font-size: 1.5rem;
    margin: 0;
  }
`;

export default Footer;
