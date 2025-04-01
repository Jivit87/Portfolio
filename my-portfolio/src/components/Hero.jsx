import React from "react";
import { FlipWords } from "./ui/flip-words";
import jivit from "../assets/jivit.jpeg";
import { FaFileAlt } from "react-icons/fa";
import leetcode from "../assets/leetcode.webp";

import { RiLinkedinFill, RiMailFill, RiGithubFill } from "@remixicon/react";

const Hero = () => {
  const words = [
    "Web Developer",
    "AI & ML Enthusiast",
    "Competitive Programmer",
  ];

  return (
    <div
      id="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black relative flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.15] pointer-events-none"></div>

      <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(circle,transparent_10%,black_70%)]"></div>

      <div className="relative z-10 w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="sm:bottom-[-90px] lg:bottom-[-100px] transform hover:scale-105 transition-transform duration-300">
          <img
            src={jivit}
            alt="Jivit Rana"
            className="h-32 w-32 sm:h-40 sm:w-40 rounded-full border-4 border-gray-800 shadow-lg object-cover"
          />
          <span className="absolute bottom-2 right-2 h-4 w-4 bg-green-400 rounded-full border-2 border-gray-800 animate-pulse"></span>
        </div>

        <h1 className="text-4xl mt-3 sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Hi, I'm <span className="text-blue-400">Jivit Rana</span>
        </h1>

        <div className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200">
          A{" "}
          <FlipWords
            words={words}
            className="ml-1 inline-block text-green-400 bg-gray-800 rounded-md px-3 py-1 shadow-md"
          />
        </div>

        <p className="mt-6 max-w-2xl text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
          Passionate about building{" "}
          <span className="font-medium text-blue-300">innovative websites</span>
          , solving{" "}
          <span className="font-medium text-blue-300">complex problems</span>,
          and exploring <span className="font-medium text-blue-300">AI</span> &{" "}
          <span className="font-medium text-blue-300">backend development</span>
          .
        </p>

        <div className="mt-10 flex gap-6">
          {[
            {
              icon: <RiLinkedinFill size={28} color="#0A66C2" />,
              href: "https://www.linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <RiMailFill size={28} color="#F2F2F2" />,
              href: "mailto:jivitrana87@gmail.com",
              label: "Email",
            },
            {
              icon: <RiGithubFill size={28} color="#F2F2F2" />,
              href: "https://github.com/Jivit87",
              label: "GitHub",
            },
            {
              icon: (
                <img
                  src={leetcode}
                  alt="Leetcode"
                  className="w-7 h-7 object-contain"
                />
              ),
              href: "https://leetcode.com/u/Jivit87/",
              label: "Leetcode",
            },
          ].map(({ icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-150 ease-out"
              aria-label={label}
            >
              {icon}
              <span className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {label}
              </span>
            </a>
          ))}
        </div>

        <button
          onClick={() => window.open("https://drive.google.com/file/d/1NyimHkZ_CZ_yVCNK6yKg1afSm2YIyDJO/view?usp=sharing", "_blank")}
          className="mt-10 flex items-center justify-center gap-3 px-6 py-3 font-[800] rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
        >
          <FaFileAlt className="text-2xl group-hover:animate-bounce" />
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
