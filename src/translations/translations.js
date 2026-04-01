export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    home: {
      greeting: "Hey, I'm",
      name: "Noam Karavani",
      role: "Full Stack Developer",
      tagline: "I build digital products that actually work — websites, systems, and smart automations.",
      cta: {
        primary: "Let's Talk",
        secondary: "My Work"
      },
      roles: [
        "Full Stack Developer",
        "Website Creator",
        "Next.js Developer",
        "SaaS Systems Builder",
        "AI-Powered Developer",
        "Your Tech Partner"
      ],
      description: "Passionate about creating web applications with modern technologies"
    },
    about: {
      title: "Hi, I'm Noam Karavani",
      
      summary: {
        title: "About Me",
        content: `Coding clicked for me the moment I realized you can build almost anything with it — and that moment never left.

I went from a 6-month bootcamp to leading front-end development on enterprise Salesforce platforms for banks and financial institutions. Along the way I built my own tools: a WhatsApp scholarship bot, a surf forecast map, and freelance websites for real businesses.

Today I sit at the intersection of full-stack development and Salesforce — which means I can take a product from idea to production, whether that's a sleek React app, a smart automation, or a complex CRM system.

I work fast, communicate clearly, and genuinely care about what I ship.`
      },
      
      expertise: {
        title: "What I Do Well",
        areas: [
          {
            title: "Front-end Development",
            description: "First impressions are everything. I build interfaces that are fast, intuitive, and look great on every screen."
          },
          {
            title: "Back-end & APIs",
            description: "The stuff users never see but always feel. Clean, reliable server logic and APIs that power your product without breaking."
          },
          {
            title: "Salesforce / LWC",
            description: "Most businesses use 10% of Salesforce. I've spent years unlocking the rest — custom LWC components, Apex logic, and Community Sites."
          },
          {
            title: "Automations & Bots",
            description: "WhatsApp bots, AI integrations, workflow automation — if there's repetitive work, there's usually a smarter way."
          }
        ]
      },
      
      cta: {
        title: "Got an idea? Let's make it real.",
        description: "Whether you're hiring or building — I'd love to hear what you're working on.",
        buttonText: "Let's Talk"
      }
    },
    projects: {
      title: "Things I've Built",
      technologies: "Tech Stack",
      liveDemo: "See it Live",
      repository: "View Code",
      surfSpots: {
        title: "Surf Spots Israel",
        description: "I wanted to find the best surf spots without texting 10 people every morning. So I built a real-time interactive map with community reviews and spot conditions — and now I use it before every session.",
        technologies: "React.js, Redux, Leaflet Maps, GitHub Pages"
      },
      vacationApp: {
        title: "Vacation App",
        description: "A full-stack vacation management platform built to push my limits — real-time updates via WebSockets, full CRUD with Node.js backend, and a Redux-powered React front-end. More complex than it looks.",
        technologies: "React.js, Redux, Node.js, WebSockets"
      },
      supermarketApp: {
        title: "Supermarket App",
        description: "An Angular deep-dive: reactive forms, dynamic cart management, and a Node.js API underneath. Built this to prove I could do complex state management outside of React — and it worked.",
        technologies: "Angular, Node.js, Material UI"
      },
      sudokuGame: {
        title: "Sudoku Game",
        description: "Pure vanilla JavaScript. No frameworks, no libraries — just logic. A clean solver and playable game that I built when I wanted to go back to basics and really understand the language.",
        technologies: "JavaScript, HTML, CSS"
      },
      scholarshipBot: {
        title: "WhatsApp Scholarship Bot",
        description: "A friend mentioned how hard it is to track scholarship deadlines. Two weeks later I shipped a WhatsApp bot that sends automatic reminders and answers queries — running 24/7 on Node.js and Twilio.",
        technologies: "Node.js, Twilio, WhatsApp API"
      },
      digilog: {
        title: "Digilog — LED Experts",
        description: "A local business needed a proper online presence, not just a Facebook page. I built them a clean, fast, mobile-friendly site that actually represents what they do — and they use it to this day.",
        technologies: "React.js, HTML, CSS, JavaScript"
      }
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Quick question? Big project? Just want to say hi? — reach out. I respond fast.",
      email: "Email",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      github: "GitHub",
      whatsappText: "Usually replies within the hour"
    },
    gigs: {
      title: 'How I Can Help',
      fullstack: {
        title: 'Full Product Development',
        description: 'You have an idea. I\'ll take it from concept to live product — design, build, deploy.',
        features: [
          'From wireframe to working product',
          'Modern, responsive UI that users love',
          'Solid architecture that scales',
          'Third-party integrations handled'
        ]
      },
      frontend: {
        title: 'Front-End Development',
        description: 'The interface is what your users see. I make sure it\'s fast, beautiful, and intuitive.',
        features: [
          'Pixel-perfect responsive design',
          'Smooth animations and interactions',
          'Performance optimization',
          'Consistent across all browsers and devices'
        ]
      },
      backend: {
        title: 'Back-End & APIs',
        description: 'The engine behind your product. Reliable, secure, and built to last.',
        features: [
          'Clean REST API design',
          'Database architecture and management',
          'Authentication and security',
          'Optimized for speed and scale'
        ]
      },
      crm: {
        title: "Salesforce Development",
        description: "Salesforce is powerful. Most businesses use 10% of it. I unlock the rest.",
        features: [
          "Custom LWC components and Community Sites",
          "Apex logic, triggers, and automation flows",
          "REST API integrations with external systems",
          "Support, maintenance, and training"
        ]
      },
      whatsapp: {
        title: "WhatsApp Bot",
        description: "Stop missing leads after hours. A bot that responds, qualifies, and follows up — 24/7.",
        features: [
          "Automated replies and lead capture",
          "Order and appointment management",
          "CRM integration so nothing falls through",
          "Custom conversation flows for your business"
        ]
      }
    },
    timeline: {
      title: "My Journey",
      subtitle: "The moments that shaped who I am as a developer",
      scrollHint: "Scroll down to reveal the journey",
      swipeHint: "Swipe to explore",
      milestones: [
        {
          year: "2021",
          icon: "🎓",
          title: "The Bootcamp",
          description: "I sat in a room for 6 months and came out a developer. 476 hours, a 97 average — but more importantly, I was completely hooked. That was the moment I knew this was it."
        },
        {
          year: "2021–2024",
          icon: "⚡",
          title: "Matrix — First Real Job",
          description: "My first role threw me straight into the deep end — enterprise projects for banks and government agencies. Fast Agile cycles, high stakes, real clients. I learned more in the first 3 months than I expected to learn in a year."
        },
        {
          year: "2024",
          icon: "🚀",
          title: "Elad Systems — Owning the Front-End",
          description: "This is where I stopped executing and started leading. I shaped the UI/UX of large-scale Salesforce platforms, integrated real-time APIs, and became the person people came to when something had to look and work great."
        },
        {
          year: "2025",
          icon: "💼",
          title: "Mimun Yashir — Enterprise Scale",
          description: "Now I bring everything I've learned to one of the most demanding Salesforce environments I've worked in. Responsive, accessible, polished — the bar is high and I like it that way."
        },
        {
          year: "Always",
          icon: "🛠️",
          title: "Side Projects — Building for Fun",
          description: "These are the projects I build because I want to, not because I have to. A WhatsApp bot that helps students find scholarships. A surf forecast map. A website for a local LED business. Each one taught me something the day job couldn't."
        },
        {
          year: "Now",
          icon: "🌟",
          title: "Where I Am Today",
          description: "Full-stack skills, deep Salesforce expertise, and a growing interest in AI integrations and SaaS products. If you're building something ambitious — I'd love to be part of it."
        }
      ]
    },
    footer: {
      rights: "All Rights Reserved",
      developer: "Noam Karavani",
      socialLinks: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email"
      }
    }
  },
  he: {
    nav: {
      home: "בית",
      about: "אודות",
      projects: "פרויקטים",
      contact: "צור קשר"
    },
    home: {
      greeting: "היי, אני",
      name: "נועם קרואני",
      role: "מפתח Full Stack",
      tagline: "אני בונה דברים שעובדים — אתרים, מערכות ואוטומציות חכמות.",
      cta: {
        primary: "בואו נדבר",
        secondary: "הפרויקטים שלי"
      },
      roles: [
        "מפתח Full Stack",
        "בונה אתרים מודרניים",
        "מפתח Next.js",
        "בונה מערכות SaaS",
        "מפתח בשילוב כלי AI",
        "השותף הטכנולוגי שלך"
      ],
      description: "בעל תשוקה ליצירת אפליקציות ווב עם טכנולוגיות מודרניות"
    },
    about: {
      title: "נעים להכיר, אני נועם קרואני",
      
      summary: {
        title: "קצת עליי",
        content: `הרגע שהבנתי שאפשר לבנות כמעט הכל עם קוד — זה היה ה-wow moment שלי. ומאז הוא לא עזב אותי.

התחלתי עם בוטקמפ של 6 חודשים, ומשם הלכתי ישר לפרויקטים ארגוניים — בנקים, מוסדות ממשלתיים, פלטפורמות Salesforce בקנה מידה גדול. לאורך הדרך בניתי גם דברים משלי: בוט WhatsApp שעוזר לסטודנטים למצוא מלגות, מפת גלישה בזמן אמת, אתר לעסק מקומי.

היום אני יושב בצומת בין Full Stack לבין Salesforce — וזה אומר שאני יכול לקחת מוצר מרעיון לפרודקשן, בין אם זה אתר, מערכת CRM, אוטומציה חכמה, או שילוב של הכל.

עובד מהר, מתקשר בבהירות, ואכפת לי ממה שאני מוציא.`
      },
      
      expertise: {
        title: "מה אני עושה טוב",
        areas: [
          {
            title: "פיתוח Front-end",
            description: "רושם ראשוני הוא הכל. אני בונה ממשקים שמהירים, אינטואיטיביים ונראים מעולה בכל מסך."
          },
          {
            title: "Back-end ו-APIs",
            description: "הדברים שהמשתמשים לא רואים, אבל תמיד מרגישים. לוגיקת שרת נקייה ו-APIs שעובדים בלי להישבר."
          },
          {
            title: "Salesforce / LWC",
            description: "רוב העסקים משתמשים ב-10% מהיכולות של Salesforce. אני מבלה שנים על פתיחת השאר — רכיבי LWC, Apex, ו-Community Sites."
          },
          {
            title: "אוטומציות ובוטים",
            description: "בוטים לווצאפ, שילוב כלי AI, אוטומציות לתהליכים — אם יש עבודה שחוזרת על עצמה, יש דרך חכמה יותר לעשות אותה."
          }
        ]
      },
      
      cta: {
        title: "יש לך רעיון? בוא נהפוך אותו למציאות.",
        description: "מגייס או לקוח — אשמח לשמוע על מה שאתה בונה.",
        buttonText: "בואו נדבר"
      }
    },
    projects: {
      title: "דברים שבניתי",
      technologies: "טכנולוגיות",
      liveDemo: "לצפייה חיה",
      repository: "קוד מקור",
      surfSpots: {
        title: "נקודות גלישה בישראל",
        description: "רציתי למצוא את הספוטים הטובים בלי לשלוח הודעות ל-10 אנשים כל בוקר. אז בניתי מפה אינטראקטיבית עם ביקורות קהילה ותנאים עדכניים — ועכשיו אני משתמש בה לפני כל ספיישן.",
        technologies: "React.js, Redux, Leaflet Maps, GitHub Pages"
      },
      vacationApp: {
        title: "אפליקציית חופשות",
        description: "פלטפורמת ניהול חופשות Full Stack שבניתי כדי לדחוף את עצמי — עדכונים בזמן אמת דרך WebSockets, CRUD מלא עם Node.js, ו-Redux בצד הלקוח. מורכב יותר ממה שנראה.",
        technologies: "React.js, Redux, Node.js, WebSockets"
      },
      supermarketApp: {
        title: "אפליקציית סופרמרקט",
        description: "צלילה עמוקה ל-Angular: ניהול טפסים ריאקטיביים, ניהול עגלת קניות דינמי, ו-Node.js API מתחת. בניתי את זה כדי להוכיח לעצמי שאני יכול לנהל state מורכב גם מחוץ ל-React.",
        technologies: "Angular, Node.js, Material UI"
      },
      sudokuGame: {
        title: "משחק סודוקו",
        description: "JavaScript טהור. ללא frameworks, ללא ספריות — רק לוגיקה. בניתי את זה כשרציתי לחזור לבסיס ולהבין את השפה לעומק.",
        technologies: "JavaScript, HTML, CSS"
      },
      scholarshipBot: {
        title: "בוט מלגות לווצאפ",
        description: "חבר סיפר כמה קשה לעקוב אחרי מועדי הגשה למלגות. שבועיים אחר כך שלחתי בוט WhatsApp שמזכיר אוטומטית ועונה לשאלות — רץ 24/7 על Node.js ו-Twilio.",
        technologies: "Node.js, Twilio, WhatsApp API"
      },
      digilog: {
        title: "Digilog — מומחי לד",
        description: "עסק מקומי שהיה זקוק לנוכחות אמיתית ברשת, לא רק עמוד פייסבוק. בניתי להם אתר נקי, מהיר ומותאם למובייל שמייצג את מה שהם עושים — ועדיין משתמשים בו.",
        technologies: "React.js, HTML, CSS, JavaScript"
      }
    },
    contact: {
      title: "בואו נדבר",
      subtitle: "שאלה קצרה? פרויקט שלם? סתם להתייעץ? — דברו איתי. עונה מהר.",
      email: "אימייל",
      linkedin: "לינקדאין",
      whatsapp: "וואטסאפ",
      github: "GitHub",
      whatsappText: "בדרך כלל עונה תוך שעה"
    },
    gigs: {
      title: 'מה אני יכול לעשות בשבילך',
      fullstack: {
        title: 'פיתוח מוצר מלא',
        description: 'יש לך רעיון. אני אקח אותו מקונספט למוצר חי — עיצוב, פיתוח, העלאה לאוויר.',
        features: [
          'מתכנון ראשוני למוצר עובד',
          'ממשק משתמש מודרני שאנשים אוהבים',
          'ארכיטקטורה נקייה שסקיילת',
          'אינטגרציות עם שירותים חיצוניים'
        ]
      },
      frontend: {
        title: 'פיתוח Front-End',
        description: 'הממשק הוא מה שהמשתמשים שלך רואים. אני מוודא שהוא מהיר, יפה ואינטואיטיבי.',
        features: [
          'עיצוב רספונסיבי מדויק',
          'אנימציות ואינטראקציות חלקות',
          'אופטימיזציה לביצועים',
          'תואם לכל הדפדפנים והמכשירים'
        ]
      },
      backend: {
        title: 'Back-End ו-APIs',
        description: 'המנוע מאחורי המוצר שלך. אמין, מאובטח, ובנוי להחזיק לאורך זמן.',
        features: [
          'תכנון REST API נקי',
          'ארכיטקטורת בסיס נתונים וניהולה',
          'אימות ואבטחת מידע',
          'אופטימיזציה למהירות ולסקייל'
        ]
      },
      crm: {
        title: "פיתוח Salesforce",
        description: "רוב העסקים משתמשים ב-10% מהיכולות של Salesforce. אני פותח את השאר.",
        features: [
          "רכיבי LWC מותאמים ו-Community Sites",
          "לוגיקת Apex, Triggers ו-Automation Flows",
          "אינטגרציית REST API עם מערכות חיצוניות",
          "תמיכה שוטפת והדרכה"
        ]
      },
      whatsapp: {
        title: "בוט לווצאפ",
        description: "תפסיק לפספס לידים אחרי שעות. בוט שעונה, מסנן ומטפח — 24/7.",
        features: [
          "מענה אוטומטי ולכידת לידים",
          "ניהול הזמנות ותורים",
          "אינטגרציה עם CRM כך שכלום לא יאבד",
          "תהליכי שיחה מותאמים לעסק שלך"
        ]
      }
    },
    timeline: {
      title: "המסע שלי",
      subtitle: "הרגעים שעיצבו אותי כמפתח",
      scrollHint: "גלול למטה לחשיפת כל אבני הדרך",
      swipeHint: "החלק לגילוי הסיפור",
      milestones: [
        {
          year: "2021",
          icon: "🎓",
          title: "הבוטקמפ",
          description: "ישבתי בחדר 6 חודשים ויצאתי מפתח. 476 שעות, ציון 97 — אבל יותר חשוב מזה, יצאתי ממוכר לחלוטין. זה היה הרגע שהבנתי שזה מה שאני רוצה לעשות."
        },
        {
          year: "2021–2024",
          icon: "⚡",
          title: "מטריקס — העבודה הראשונה",
          description: "ישר לעומק — פרויקטים ארגוניים לבנקים ומשרדי ממשלה. מחזורי Agile מהירים, לקוחות אמיתיים, סטנדרטים גבוהים. למדתי יותר ב-3 חודשים הראשונים ממה שציפיתי ללמוד בשנה שלמה."
        },
        {
          year: "2024",
          icon: "🚀",
          title: "אלעד מערכות — להוביל, לא לבצע",
          description: "פה הפסקתי לבצע והתחלתי להוביל. עיצבתי את ה-UI/UX של פלטפורמות Salesforce בקנה מידה גדול, שילבתי APIs בזמן אמת, והפכתי לאדם שאנשים פונים אליו כשצריך שהדברים ייראו ויעבדו טוב."
        },
        {
          year: "2025",
          icon: "💼",
          title: "מימון ישיר — רמה ארגונית",
          description: "עכשיו אני מביא את כל מה שצברתי לאחד מהסביבות הדורשניות ביותר שעבדתי בהן. רספונסיבי, נגיש, מלוטש — הרף גבוה ואני אוהב את זה."
        },
        {
          year: "תמיד",
          icon: "🛠️",
          title: "פרויקטים מהלב",
          description: "אלה הפרויקטים שאני בונה כי בא לי, לא כי חייב. בוט WhatsApp שעוזר לסטודנטים למצוא מלגות. מפת גלישה בזמן אמת. אתר לעסק מקומי. כל אחד לימד אותי משהו שהעבודה הרגילה לא יכולה."
        },
        {
          year: "עכשיו",
          icon: "🌟",
          title: "איפה שאני עומד היום",
          description: "כישורי Full Stack, מומחיות עמוקה ב-Salesforce, ועניין גובר ב-AI ומוצרי SaaS. אם אתה בונה משהו שאפתני — אשמח להיות חלק ממנו."
        }
      ]
    },
    footer: {
      rights: "כל הזכויות שמורות",
      developer: "נועם קרואני",
      socialLinks: {
        linkedin: "לינקדאין",
        github: "גיטהאב",
        email: "אימייל"
      }
    }
  }
}; 