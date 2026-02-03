import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "AI & Automation",
      icon: web,
    },
    {
      title: "Full-Stack Developer",
      icon: backend, // You can change this to a more suitable icon if available
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Software Engineer",
      company_name: "Technoprise Global",
      date: "Aug 2023 – Jul 18, 2024 | Nairobi, Kenya",
      points: [
        "Contributed to Kutana Events V2, focusing on the frontend and backend integration.",
        "Developed key frontend pages including the homepage and testimonials page using Next.js and Chakra UI.",
        "Implemented Google Sign-In authentication and integrated secure login functionality.",
        "Set up and tested API endpoints on the backend using PHP (Lumen).",
        "Worked closely with senior developers in a collaborative agile team.",
        "Reference: Jude Otenyo (Senior Developer) – [0712619962]",
      ],
    },
    {
      title: "Data Manager (Contract)",
      company_name: "Constituency Development Fund (CDF)",
      date: "2024 – Present | Nairobi, Kenya",
      points: [
        "Contract-based engagement in data recording and management since 2024.",
        "Collected, sorted, and managed large sets of community development data.",
        "Maintained clean and up-to-date Excel reports to track funding allocations and project progress.",
        "Helped streamline data flows between departments and contributed to accurate reporting.",
        "Ensured data accuracy and confidentiality in handling sensitive records.",
        "Reference: Collins Amenya (Engineer) – [0717579804]",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Chris proved me wrong.",
      name: "Collins Amenya",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Chris does.",
      name: "Brian Kingman",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Chris optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Winston Churchill",
      designation: "CTO",
      company: "PESco",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project One",
      description: "Short description of Project One.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "api", color: "green-text-gradient" },
      ],
      image: "https://via.placeholder.com/400x230?text=Project+One",
      site_link: "https://yourprojectone.com",
    },
    {
      name: "Project Two",
      description: "Short description of Project Two.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "css", color: "pink-text-gradient" },
      ],
      image: "https://via.placeholder.com/400x230?text=Project+Two",
      site_link: "https://yourprojecttwo.com",
    },
    {
      name: "Project Three",
      description: "Short description of Project Three.",
      tags: [
        { name: "nodejs", color: "green-text-gradient" },
        { name: "mongodb", color: "blue-text-gradient" },
      ],
      image: "https://via.placeholder.com/400x230?text=Project+Three",
      site_link: "https://yourprojectthree.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
