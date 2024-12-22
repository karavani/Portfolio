import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <Button onClick={toggleLanguage}>
      {language === 'he' ? 'EN' : 'עב'}
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  border: 1px solid #0077ff;
  color: #0077ff;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background: #0077ff;
    color: white;
  }
`; 