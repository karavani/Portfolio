/**
 * זיהוי שפת המשתמש על בסיס דפדפן, מיקום גיאוגרפי ושפה שמורה
 */

// פונקציה לזיהוי שפת הדפדפן
export const detectBrowserLanguage = () => {
  const browserLanguage = navigator.language || navigator.userLanguage;
  
  // בדיקה עבור עברית
  if (browserLanguage.startsWith('he') || browserLanguage.startsWith('iw')) {
    return 'he';
  }
  
  // ברירת מחדל אנגלית
  return 'en';
};

// פונקציה לזיהוי מיקום גיאוגרפי (אופציונלי)
export const detectLocationLanguage = async () => {
  try {
    // ניסיון לזהות לפי timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // אם ה-timezone הוא של ישראל
    if (timezone === 'Asia/Jerusalem') {
      return 'he';
    }
    
    // ניסיון לקבל מיקום מ-API חיצוני (לא דורש הרשאות)
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // אם המדינה היא ישראל
    if (data.country_code === 'IL') {
      return 'he';
    }
    
    return 'en';
  } catch (error) {
    console.log('Could not detect location, using browser language');
    return detectBrowserLanguage();
  }
};

// פונקציה ראשית לזיהוי שפה
export const detectUserLanguage = async (useGeolocation = false) => {
  // בדיקה אם יש שפה שמורה ב-localStorage
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) {
    return savedLanguage;
  }
  
  // אם רוצים להשתמש בזיהוי מיקום
  if (useGeolocation) {
    const locationLanguage = await detectLocationLanguage();
    return locationLanguage;
  }
  
  // אחרת - רק לפי שפת הדפדפן
  return detectBrowserLanguage();
};

// שמירת העדפת שפה
export const saveLanguagePreference = (language) => {
  localStorage.setItem('preferredLanguage', language);
};

// קבלת העדפת שפה
export const getLanguagePreference = () => {
  return localStorage.getItem('preferredLanguage');
};

