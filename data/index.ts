export const personalInfo = {
  name: "CHRISTIAN PEMEN",
  role: "DÉVELOPPEUR FULLSTACK",
  bio: "Étudiant en informatique passionné par l'ingénierie web. Je fusionne une approche structurée et performante pour transformer des concepts complexes en interfaces simples, fluides et redoutables.",
  email: "christianpemen26@gmail.com",
  github: "https://github.com/pemen26",
  linkedin: "https://www.linkedin.com/in/christian-kouatan-pemen-b1550b399",
};

export const skills = [
  {
    category: "Architecture",
    items: ["Next.js 16", "React", "TypeScript", "Node.js", "PHP", "Python"]
  },
  {
    category: "Design & UI",
    items: ["Tailwind CSS", "Framer Motion", "Figma", "UX/UI", "Canva", "Vue.js", "Nuxt"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Postman", "Cisco Networking"]
  }
];

export const projects = [
  {
    slug: "pixel-trader",
    title: "PIXEL TRADER",
    description: "Pixel Trader est une solution complète de gestion et de visualisation de stock développée pour une boutique spécialisée dans le retrogaming. L'objectif était de transformer une base de données brute et désorganisée (fichiers CSV incohérents) en une plateforme web moderne, dynamique et fiable. Le projet couvre l'ensemble du cycle de vie de la donnée : du nettoyage automatisé des fichiers sources à l'affichage interactif pour l'utilisateur final.",
    technologies: ["Python", "Flask", "MySQL", "Pandas", "JavaScript", "HTML5", "CSS", "Git"],
    repoUrl: "https://github.com/Bootcamp-PixelTrader-2025-2026/Pixel-trader-Cellou-Christian-Cesar.git",
    demoUrl: null, 
    imageUrl: "/projects/pixel-trader.jpeg" 
  },
  {
    slug: "BAP",
    title: "MOI MON CERVEAU",
    description: "Ce projet est un quiz interactif conçu pour le site d'une fondation de recherche sur le cerveau. L'objectif est de proposer un outil de sensibilisation et de vulgarisation scientifique permettant au grand public de tester ses connaissances sur les neurosciences de manière ludique. L'application mise sur une interface dynamique et accessible pour transformer des données de recherche complexes en une expérience pédagogique engageante. Elle permet ainsi à la fondation de renforcer sa mission d'éducation et de partage du savoir sur le fonctionnement cérébral.",
    technologies: ["Vite", "Html", "CSS", "JS", "Git"],
    repoUrl: "https://github.com/IIM-CDI/Groupe12_MMcerveau.git",
    demoUrl: null,
    imageUrl: "/projects/cerveau.jpeg"
  },
  {
    slug: "projet_S",
    title: "L'HORLOGER",
    description: "Conception et développement d'une application web dynamique dédiée à la gestion d'un catalogue de montres de haute horlogerie. Ce projet intègre un système d'administration sécurisé (CRUD) permettant de gérer un inventaire en temps réel. L'accent a été mis sur la sécurité des données (protection contre les injections SQL et failles CSRF) et sur une interface utilisateur 'Luxury Dark' moderne, offrant une expérience fluide et élégante.",
    technologies: ["PHP (PDO)", "MySQL", "HTML", "CSS", "Bcrypt", "Security Patterns", "Git"],
    repoUrl: "https://github.com/pemen26/projet-secu.git",
    demoUrl: null,
    imageUrl: "/projects/horloger.jpeg"
  }
];