import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const BaseInfo = {
    name: "Punsarani",
    position: "Full Stack Developer",
    description:
      "Undergraduate at University of Moratuwa, seeking to apply competent development skills with focus on collaboration and passion.",
    profilePic: "/images/me.png",
  };
  
  export const aboutInfo = {
    title: "Crafting Web Application with Passion and Precision",
    description:
      "I am currently studying for a BSc in Information Technology at the University of Moratuwa. As a full-stack developer, I am enthusiastic about exploring new technologies, with a strong interest in the DevOps field. My aim is to utilize my skills and knowledge to connect development and operations, facilitating efficient and reliable software delivery.",
    client: "50+",
    experience: "3+",
    project: "200+",
    website: "100+",
  };
  
  export const projectData = [
    {
      id: 1,
      image: "/images/p1.png",
      title: "AgriMarket",
      stack: "React JS, TypeScript, Bootstrap, MySQL, NodeJS, Prisma"
    },
    {
      id: 2,
      image: "/images/p3.png",
      title: "Personal Portfolio",
      stack:"TypeScript, Next JS, Tailwind CSS"
    },
    {
      id: 3,
      image: "/images/p2.png",
      title: "Delight (On going)",
      stack:"React, JS, Next JS, MongoDB"
    },
    
  ];
  
  export const skillsData = [
    {
      id: 1,
      title: "React",
      image: "/images/react.svg",
      percent: "90%",
    },
    {
      id: 2,
      title: "CSS",
      image: "/images/css.svg",
      percent: "97%",
    },
    {
      id: 3,
      title: "JavaScript",
      image: "/images/js.svg",
      percent: "77%",
    },
    {
      id: 4,
      title: "TypeScript",
      image: "/images/ts.svg",
      percent: "67%",
    },
    {
      id: 5,
      title: "HTML",
      image: "/images/html.svg",
      percent: "67%",
    },
    {
      id: 6,
      title: "Node JS",
      image: "/images/node.svg",
      percent: "77%",
    },
    {
      id: 7,
      title: "MongoDB",
      image: "/images/mongo.svg",
      percent: "65%",
    },
    {
      id: 8,
      title: "Java",
      image: "/images/java.png",
      percent: "55%",
    },
    {
      id: 9,
      title: "C",
      image: "/images/c.png",
      percent: "75%",
    },
    {
      id: 10,
      title: "Bootstrap",
      image: "/images/bootstrap.png",
      percent: "35%",
    },
    {
      id: 11,
      title: "MySQL",
      image: "/images/sql.png",
      percent: "35%",
    },
    {
      id: 12,
      title: "MSSQL",
      image: "/images/mssql.png",
      percent: "35%",
    },
    {
      id: 13,
      title: "Taillwind CSS",
      image: "/images/tailwind.png",
      percent: "35%",
    },
  ];

  export const SocialData = [
    {
      title: "Facebook",
      Link: "https://www.facebook.com/profile.php?id=100092023992844&mibextid=LQQJ4d",
      icon: React.createElement(FaFacebook),
      
    },
    {
      title: "Github",
      Link: "https://github.com/PunsaraniJayawardhana",
      icon: React.createElement(FaGithub),
  
    },
    {
      title: "Instagram",
      Link: "https://www.instagram.com/punsaranii__?igsh=MTMzN2cwcXl4OWxibg%3D%3D&utm_source=qr",
      icon: React.createElement(FaInstagramSquare),
  
    },
    {
      title: "Linkedin",
      Link: "https://www.linkedin.com/in/punsarani-jayawardhana000/",
      icon: React.createElement(FaLinkedin),
  
    },
    
  ] 
  
  export const contactData = {
    phone: "+94 70 486 0754",
    email: "punsaranijayawardhana@gmail.com",
    
  };