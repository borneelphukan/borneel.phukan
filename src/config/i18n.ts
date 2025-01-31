import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        navItems: [
          "Home",
          "Portfolio",
          "Services",
          "Blogs",
          "Gallery",
          "Contact Me",
        ],
        // Home Page
        role: ["I am", "Software Developer", "#Open_to_Work"],
        panelHeader: "My Blogs",
        introduction:
          "A Software Developer focusing on developing customer-oriented applications, designing impactful APIs, clean User Interfaces, and delivering successful projects to drive business growth and revenues.",
        aboutme: [
          "About Me",
          "Hi! I'm Borneel, a Software Developer committed to developing and delivering state-of-the-art full-stack web and mobile applications, secured APIs, and clean User Interfaces, all by leveraging suitable Agile Methodologies. My passion for developing impactful applications and contributing to technology growth has driven me to pursue a career in the field of web engineering. My contributions to open-source development on GitHub can provide you with a preliminary idea about my work and contributions so far.",
          "Who am I?",
          "I have over 3 years of experience in personal and industry projects. My expertise includes JavaScript/TypeScript, Next.js, React, Vue, Node.js, Python, and TailwindCSS. I actively share knowledge through blog posts and online platforms. I hold a master's degree in Web Engineering from Chemnitz University of Technology, Germany, and a bachelor's degree from Kalinga Institute of Industrial Technology, India. Additionally, I am a part-time photographer with a passion for travel, nature, and architecture photography. If you need a dedicated professional with creative flair and technical acumen, look no further.",
        ],
        // Footer
        welcome:
          "Welcome to my personal website, where I proudly showcase my strengths and skills. Explore my journey, accomplishments, and occasional blog posts. Thank you for visiting!",
        links: [
          [
            "Portfolio",
            "Experiences",
            "Education",
            "Skills",
            "Publication",
            "Projects",
          ],
          ["Services", "Testimonials", "Blogs", "Gallery", "Contact Me"],
          ["Social"],
        ],
        rights: "All Rights Reserved",
        // Services
        serviceHeader: "Services",
        serviceBanner:
          "When I am not engaged in personal projects, I might be freelancing for a reputable company or startup, and I could potentially contribute to your project as well.",
        serviceCard: [
          [
            "Fullstack Developer",
            "3+ years of experience in building Web Applications, Application Programming Interfaces (API), Microservices, UI/UX prototypes, everything following Agile Methodologies.",
            "Javascript, Typescript, React, Vue, TailwindCSS, Bootstrap, PHP, Python, Flask, MySQL, MongoDB, C, C++",
          ],
          [
            "Machine Learning",
            "Experiences with developing, training and optimizing machine learning models and deep learning (CNN, RNN) models powered by Computer Vision. Possess a research publication and various projects.",
            "Tensorflow, OpenCV, ScikitLearn, Matplotlib, Pytorch",
          ],
          [
            "Content Writing",
            "A voracious freelance writer obsessed with writing technical and current affairs content in English, including content for websites, blogs, technical reviews, and academic papers.",
            "Blog Writing, Technical Writing, Copywriting, Ghost Writing, Creative writing, Email Marketing Content",
          ],
        ],
        clientProjectHeader: "Client Projects",
        clientProjectsBanner:
          "Have a look at my contributions to client projects",
        reviewSuperHeader: "Happy Clients",
        reviewHeader: "Customer Reviews",
        reviewSubHeader:
          "Explore the testimonials of clients who puts their trust on my works",
        // Gallery
        galleryHeader: [
          "Interested in",
          "Photography ?",
          "The world through my lenses",
        ],
        galleryStatement: [
          "Physical prints of photos can leave a stronger impression compared to their digital counterparts. Feel free to",
          "reach out",
          "if you would like a hard copy. If you do, you would be the pioneer to mention this, which would be quite remarkable!",
        ],

        // Contact
        contactCardHeader: ["My Address", "My Availability", "Donate"],
        contactCardDescription: [
          "Erich-Ollenhauer-Straße 2, 63263 Neu-Isenburg, Germany",
          "Set up an appointment on Calendly",
          "Like my work ? You can donate on Paypal",
        ],
        contactFormHeader: "Get in Touch",
      },
    },
    de: {
      translation: {
        // Navbar
        navItems: [
          "Startseite",
          "Portfolio",
          "Dienstleistungen",
          "Blogs",
          "Galerie",
          "Kontakt",
        ],
        // Home Page
        role: ["Ich bin", "Software Entwickler", "#Offen_für_Arbeit"],
        panelHeader: "Meine Blogs",
        introduction:
          "Ein Softwareentwickler mit Schwerpunkt auf der Entwicklung kundenorientierter Anwendungen, dem Entwurf wirkungsvoller APIs, sauberer Benutzeroberflächen und der erfolgreichen Umsetzung von Projekten zur Förderung von Geschäftswachstum und Umsätzen.",
        aboutme: [
          "Über mich",
          "Hallo! Ich bin Borneel, ein Softwareentwickler, der sich der Entwicklung und Bereitstellung modernster Full-Stack-Web- und mobilen Anwendungen, sicherer APIs und sauberer Benutzeroberflächen verschrieben hat, alles unter Nutzung geeigneter agiler Methoden. Meine Leidenschaft für die Entwicklung wirkungsvoller Anwendungen und meinen Beitrag zum technologischen Fortschritt hat mich dazu bewegt, eine Karriere im Bereich Web-Engineering zu verfolgen. Meine Beiträge zur Open-Source-Entwicklung auf GitHub können Ihnen einen ersten Eindruck von meiner Arbeit und meinen bisherigen Beiträgen vermitteln.",
          "Wer bin Ich?",
          "Ich habe über 3 Jahre Erfahrung in persönlichen und industriellen Projekten. Mein Fachwissen umfasst JavaScript/TypeScript, Next.js, React, Vue, Node.js, Python und TailwindCSS. Ich teile mein Wissen aktiv durch Blogbeiträge und Online-Plattformen. Ich habe einen Master-Abschluss in Web Engineering von der Technischen Universität Chemnitz, Deutschland, und einen Bachelor-Abschluss vom Kalinga Institute of Industrial Technology, Indien. Außerdem bin ich Teilzeitfotograf mit einer Leidenschaft für Reise-, Natur- und Architekturfotografie. Wenn Sie einen engagierten Profi mit kreativem Gespür und technischem Scharfsinn suchen, sind Sie bei mir genau richtig.",
        ],
        // Footer
        welcome:
          "Willkommen auf meiner persönlichen Website, auf der ich mit Stolz meine Stärken und Fähigkeiten präsentiere. Entdecken Sie meinen Weg, meine Leistungen und meine gelegentlichen Blogbeiträge. Vielen Dank für Ihren Besuch!",
        links: [
          [
            "Portfolio",
            "Erfahrungen",
            "Bildung",
            "Fähigkeiten",
            "Veröffentlichung",
            "Projekte",
          ],
          ["Dienstleistungen", "Referenzen", "Blogs", "Galerie", "Kontakt"],
          ["Soziales"],
        ],

        rights: "Alle Rechte vorbehalten",
        // Services
        serviceHeader: "Dienstleistungen",
        serviceBanner:
          "Wenn ich nicht mit persönlichen Projekten beschäftigt bin, arbeite ich vielleicht freiberuflich für ein renommiertes Unternehmen oder Startup und könnte auch zu Ihrem Projekt beitragen.",
        serviceCard: [
          [
            "Fullstack-Entwickler",
            "Über 3 Jahre Erfahrung im Aufbau von Webanwendungen, Programmierschnittstellen (API), Microservices, UI/UX-Prototypen, alles nach agilen Methoden.",
            "Javascript, Typescript, React, Vue, TailwindCSS, Bootstrap, PHP, Python, Flask, MySQL, MongoDB, C, C++",
          ],
          [
            "Maschinelles Lernen",
            "Erfahrung in der Entwicklung, dem Training und der Optimierung von maschinellen Lernmodellen und Deep-Learning-Modellen (CNN, RNN), die von Computer Vision unterstützt werden. Besitze eine Forschungsarbeit und verschiedene Projekte.",
            "Tensorflow, OpenCV, ScikitLearn, Matplotlib, Pytorch",
          ],
          [
            "Content Writing 🇬🇧",
            "Ein leidenschaftlicher freiberuflicher Autor, der sich darauf spezialisiert hat, technische und aktuelle Inhalte auf Englisch zu schreiben, einschließlich Inhalte für Websites, Blogs, technische Rezensionen und wissenschaftliche Arbeiten.",
            "Blogschreiben, Technisches Schreiben, Copywriting, Ghostwriting, Kreatives Schreiben, E-Mail-Marketing-Inhalte",
          ],
        ],
        clientProjectHeader: "Kundenprojekte",
        clientProjectsBanner:
          "Schauen Sie sich meine Beiträge zu Kundenprojekten an.",
        reviewSuperHeader: "Glückliche Kunden",
        reviewHeader: "Kundenbewertungen",
        reviewSubHeader:
          "Entdecken Sie die Erfahrungsberichte von Kunden, die meinem Werk vertrauen",

        // Gallery
        galleryHeader: [
          "Interessiert an",
          "Fotografie?",
          "Die Welt durch meine Objektive",
        ],
        galleryStatement: [
          "Physische Drucke von Fotos können einen stärkeren Eindruck hinterlassen als ihre digitalen Gegenstücke. Fühlen Sie sich frei zu",
          "sich melden",
          "wenn Sie eine gedruckte Kopie möchten. Wenn ja, wären Sie der Erste, der dies erwähnt, was ziemlich bemerkenswert wäre!",
        ],

        // Contact
        contactCardHeader: ["Meine Adresse", "Meine Verfügbarkeit", "Spenden"],
        contactCardDescription: [
          "Erich-Ollenhauer-Straße 2, 63263 Neu-Isenburg, Deutschland",
          "Vereinbare einen Termin auf Calendly",
          "Gefällt dir meine Arbeit? Du kannst über PayPal spenden",
        ],
        contactFormHeader: "Kontakt aufnehmen",
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
