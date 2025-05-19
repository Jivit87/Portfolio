"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import nike1 from "../assets/nike1.png";
import nike2 from "../assets/nike2.png";
import nike3 from "../assets/nike3.png";
import nike4 from "../assets/nike4.png";
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";
import featured4 from "../assets/featured4.png";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import nstbuddy1 from "../assets/nstbuddy1.png";
import nstbuddy2 from "../assets/nstbuddy2.png";
import nstbuddy3 from "../assets/nstbuddy3.png";
import nstbuddy4 from "../assets/nstbuddy4.png";
import ai from "../assets/Quado/ai.png";
import home from "../assets/Quado/home.png";
import insights from "../assets/Quado/insights.png";
import loginQuada from "../assets/Quado/login.png";
import W1 from "../assets/Whispr/1.png";
import W2 from "../assets/Whispr/2.png";
import W3 from "../assets/Whispr/3.png";
import W4 from "../assets/Whispr/4.png";
import P1 from "../assets/Previa/1.png";
import P2 from "../assets/Previa/2.png";
import P3 from "../assets/Previa/3.png";
import P4 from "../assets/Previa/4.png";



const content = [
  {
    year: "March, 2025",
    title: "Portfolio Website",
    github: "https://github.com/Jivit87/Portfolio",
    link: "/",
    description:
      "Developed a responsive portfolio using React, Tailwind CSS, Framer Motion, and GSAP to showcase my projects, skills, and experiences. Integrated Email.js",
    feature:
      "A fully responsive website featuring smooth animations with Framer Motion and GSAP, an interactive UI with modern aesthetics.It features a functional contact form integrated with Email.js, enabling direct communication.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Email.js",
      "Framer Motion",
      "GSAP",
    ],
    images: [`${portfolio1}`, `${portfolio2}`, `${portfolio3}`, `${portfolio4}`],
  },
  {
    year: "May, 2025",
    title: "Quado – Full-Stack Task Manager",
    github: "https://github.com/Jivit87/Quado---Task-Manager-",
    link: "https://quado-task-manager.onrender.com",
    description:
      "A smart, responsive task management app with real-time features, secure authentication, and AI-powered productivity insights.",
    feature:
      "JWT auth, task filters, analytics dashboard, mobile responsiveness, Gemini AI assistant for personalized planning and productivity.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.Js",
      "Express.Js",
      "MongoDB",
      "JWT",
      "Gemini API",
    ],
    images: [`${home}`, `${insights}`, `${ai}`, `${loginQuada}`],
  },
  {
    year: "April, 2025",
    title: "Previa – Preventive Healthcare Platform",
    github: "https://github.com/Jivit87/NEUTRON_TEAM_DOMINATOR",
    link: "https://neutron-team-dominator-1.onrender.com/",
    description:
      "MERN-based health tracker built during a hackathon to log daily metrics and provide AI-powered wellness insights. Led backend – built REST APIs, JWT auth, and Gemini AI integration.",
    feature:
      "Mood/sleep tracking, Gemini AI suggestions, health trend visualization.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.Js",
      "Express.Js",
      "MongoDB",
      "JWT",
      "Gemini API",
    ],
    images: [`${P1}`, `${P2}`, `${P3}`, `${P4}`],
  },
  {
    year: "March, 2025",
    title: "Whispr - Chat Website",
    github: "https://github.com/Jivit87/Whispr---Chatting-Website",
    link: "https://whispr-chatting-website.onrender.com/login",
    description:
      "Developed Wispr, a real-time chat web application using the MERN stack, featuring a clean, responsive interface and secure authentication.",
    feature:
      "Wispr supports single chat rooms with real-time messaging using Socket.io. Users can securely log in and chat with others, send emojis, and share images.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.Js",
      "Express.Js",
      "MongoDB",
      "JWT",
      "Socket.io",
    ],
    images: [`${W1}`, `${W2}`, `${W3}`, `${W4}`],
  },
  {
    year: "March, 2025",
    title: (
      <>
        Featured <i>(Ongoing)</i>
      </>
    ),
    github: "https://github.com/Jivit87/Featured",
    link: "",
    description:
      "Built a Pinterest-like platform for users to save and organize their image-based memories. Developed with React, Tailwind CSS, and Node.js, ensuring a seamless and visually appealing user experience.",
    feature:
      "Users can upload, save, and organize their images with a responsive UI. Implemented secure backend with Express.js and MongoDB for data storage. Optimized performance for smooth navigation.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    images: [`${featured1}`, `${featured2}`, `${featured3}`, `${featured4}`],
  },
  {
    year: "Feb, 2025",
    title: "Nike Website – Frontend UI/UX",
    github: "https://github.com/Jivit87/Nike-Website",
    link: "https://chic-scone-c5556d.netlify.app/",
    description:
      "A modern, responsive e-commerce website built to enhance frontend skills and reusable components.",
    feature:
      "Modern design, reusable components, interactive UI, responsive styling, state management practice.",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    images: [`${nike1}`, `${nike2}`, `${nike3}`, `${nike4}`],
  },
  {
    year: "Jan, 2025",
    title: "NST Buddy",
    github: "https://github.com/Jivit87/Ui-and-UX/tree/main/verion%201.0%202",
    link: "https://nstbuddy.tech/",
    description:
      "A platform created to help students with assignment and contest solutions, video explanations for better understanding while enhancing team collaboration and real-world development skills.",
    feature:
      "Assignment solutions, contest solutions, video explanations, team collaboration, real-world skill development.",
    techStack: ["React", "JavaScript", "CSS", "GitHub"],
    images: [`${nstbuddy1}`, `${nstbuddy2}`, `${nstbuddy3}`, `${nstbuddy4}`],
  },
];
function Projects() {
  return (
    <div id="project" className="w-full pb-4">
      <StickyScroll content={content} />
    </div>
  );
}
export default Projects;
