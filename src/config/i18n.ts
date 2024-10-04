import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        role1: "Software Developer",
        role2: "#Open_to_Work",
        aboutme0:
          "Hi! I'm Borneel, a Software Developer committed to developing and delivering state-of-the-art full-stack web and mobile applications, secured APIs, and clean User Interfaces, all by leveraging suitable Agile Methodologies. My passion for developing impactful applications and contributing to technology growth has driven me to pursue a career in the field of web engineering. My contributions to open-source development on GitHub can provide you with a preliminary idea about my work and contributions so far.",
        aboutme1:
          "I have over 3 years of experience in personal and industry projects. My expertise includes JavaScript/TypeScript, Next.js, React, Vue, Node.js, PHP, Python, and TailwindCSS. I actively share knowledge through blog posts and online platforms. Currently, I am pursuing a master's degree in Web Engineering at Chemnitz University of Technology, Germany, and hold a bachelor's degree from Kalinga Institute of Industrial Technology, India. Additionally, I am a part-time photographer with a passion for travel, nature, and architecture photography. If you need a dedicated professional with creative flair and technical acumen, look no further.",

        introduction:
          "A Software Developer focusing on developing customer-oriented applications, designing impactful APIs, clean User Interfaces, and delivering successful projects to drive business growth and revenues.",
        welcome:
          "Welcome to my personal website, where I proudly showcase my strengths and skills. Explore my journey, accomplishments, and occasional blog posts. Thank you for visiting!",
        rights: "All Rights Reserved",
      },
    },
    de: {
      translation: {
        role1: "Software Entwickler",
        role2: "ML/KI Liebhaber",
        aboutme0:
          "Hallo! Ich bin Borneel, ein Softwareentwickler, der sich der Entwicklung und Bereitstellung modernster Full-Stack-Web- und mobilen Anwendungen, sicherer APIs und sauberer Benutzeroberflächen verschrieben hat, alles unter Nutzung geeigneter agiler Methoden. Meine Leidenschaft für die Entwicklung wirkungsvoller Anwendungen und meinen Beitrag zum technologischen Fortschritt hat mich dazu bewegt, eine Karriere im Bereich Web-Engineering zu verfolgen. Meine Beiträge zur Open-Source-Entwicklung auf GitHub können Ihnen einen ersten Eindruck von meiner Arbeit und meinen bisherigen Beiträgen vermitteln.",
        aboutme1:
          "Ich habe über 3 Jahren Erfahrung in persönlichen und industriellen Projekten. Meine Expertise umfasst JavaScript/TypeScript, Next.js, React, Vue, Node.js, PHP, Python und TailwindCSS. Ich teile mein Wissen aktiv durch Blogposts und Online-Plattformen. Derzeit absolviere ich einen Masterstudiengang in Web Engineering an der Technischen Universität Chemnitz, Deutschland, und habe einen Bachelor-Abschluss vom Kalinga Institute of Industrial Technology, Indien. Zudem bin ich Teilzeitfotograf mit einer Leidenschaft für Reise-, Natur- und Architekturfotografie. Wenn Sie einen engagierten Fachmann mit kreativer Begabung und technischem Können suchen, sind Sie hier genau richtig.",
        introduction:
          "Ein Softwareentwickler und KI-Ingenieur, der sich auf die Entwicklung kundenorientierter Anwendungen, den Entwurf wirkungsvoller APIs, sauberer Benutzeroberflächen, Modelle für maschinelles Lernen und Deep Learning sowie die Durchführung erfolgreicher Projekte zur Förderung von Geschäftswachstum und Umsatz konzentriert.",
        welcome:
          "Willkommen auf meiner persönlichen Website, auf der ich mit Stolz meine Stärken und Fähigkeiten präsentiere. Entdecken Sie meinen Weg, meine Leistungen und meine gelegentlichen Blogbeiträge. Vielen Dank für Ihren Besuch!",
        rights: "Alle Rechte vorbehalten",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
