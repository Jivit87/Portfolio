import React from "react";
import react from "../assets/react.svg";
import python from "../assets/python.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/javascript.svg";
import tailwind from "../assets/tailwind.svg";
import gsap from "../assets/gsap.svg";
import pandas from "../assets/pandas.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import emailjs from "../assets/emailjs.png";
import sass from "../assets/sass.svg"
import framerMotion from "../assets/framer-motion.svg"
import postman from "../assets/postman.svg"



const ProfilesContainer = () => {
  const skills = [
    { id: 1, name: "React", img: `${react}` },
    { id: 2, name: "Python", img: `${python}` },
    { id: 3, name: "HTML", img: `${html}` },
    { id: 4, name: "CSS", img: `${css}` },
    { id: 5, name: "JavaScript", img: `${js}` },
    { id: 6, name: "Tailwind CSS", img: `${tailwind}` },
    { id: 7, name: "GSAP", img: `${gsap}` },
    { id: 9, name: "Node.Js", img: `${node}` },
    { id: 10, name: "Express.Js", img: `${express}` },
    { id: 11, name: "Mongo.DB", img: `${mongodb}` },
    { id: 12, name: "Git", img: `${git}` },
    { id: 13, name: "GitHub", img: `${github}` },
    { id: 14, name: "Email.Js", img: `${emailjs}` },
    { id: 15, name: "Sass", img: `${sass}` },
    { id: 16, name: "Framer Motion", img: `${framerMotion}` },
    { id: 16, name: "Postman", img: `${postman}` },



  ];

  return (
    <div className="w-full px-4">
      <h1 className="text-[#fffffe] font-bold text-2xl sm:text-3xl mb-4">
        Skills
      </h1>
      <div className="mt-3 h-[300px] overflow-y-auto scrollbar">
        <div className="grid grid-cols-2 gap-3 p-2 
                       sm:grid-cols-3 
                       md:grid-cols-4 
                       lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white flex flex-col items-center justify-center 
                        rounded-lg p-2 min-h-[100px]
                        transition-all duration-300 hover:shadow-md"
            >
              <img
                src={skill.img || react}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                alt={skill.name}
              />
              <p className="text-center text-black text-sm sm:text-base 
                          mt-2 leading-tight">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilesContainer;