import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

// פונקציה לזיהוי שפת המשתמש
const detectUserLanguage = () => {
  // בדיקה אם יש שפה שמורה ב-localStorage
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) {
    return savedLanguage;
  }

  // בדיקה של שפת הדפדפן
  const browserLanguage = navigator.language || navigator.userLanguage;
  
  // אם השפה מתחילה ב-'he' (עברית) או 'iw' (קוד ישן לעברית)
  if (browserLanguage.startsWith('he') || browserLanguage.startsWith('iw')) {
    return 'he';
  }
  
  // אחרת - ברירת מחדל אנגלית
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(detectUserLanguage());

  // שמירת השפה ב-localStorage כשהיא משתנה
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'he' ? 'en' : 'he');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 