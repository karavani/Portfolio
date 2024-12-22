import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('he'); // ברירת מחדל לעברית

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'he' ? 'en' : 'he');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 