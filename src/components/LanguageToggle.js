import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <ToggleButton onClick={toggleLanguage}>
      {language === 'he' ? 'English' : 'עברית'}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  padding: 8px 16px;
  border: 2px solid #0077ff;
  border-radius: 4px;
  background: transparent;
  color: #0077ff;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #0077ff;
    color: white;
  }
`;

export default LanguageToggle; 