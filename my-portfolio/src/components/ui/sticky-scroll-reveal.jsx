"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../util/utils";
import "remixicon/fonts/remixicon.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);

  // Background gradients for each project
  const linearGradients = [
    "linear-gradient(to bottom right, #4f46e5, #7dd3fc)",
    "linear-gradient(to bottom right, #f43f5e, #f472b6)",
    "linear-gradient(to bottom right, #10b981, #34d399)",
  ];

  const techIcons = {
    React: "ri-reactjs-line",
    "Tailwind CSS": "ri-tailwind-css-line",
    "Socket.IO": "ri-link",
    "Node.js": "ri-nodejs-line",
    "Next.js": "ri-nextjs-line",
    "Framer Motion": "ri-movie-2-line",
    WebSockets: "ri-signal-tower-line",
    Vercel: "ri-vercel-line",
    Git: "ri-git-branch-line",
    "Express.js": "ri-server-line",
    MongoDB: "ri-database-2-line",
    TypeScript: "ri-code-s-slash-line",
    CMS: "ri-file-text-line",
    GraphQL: "ri-braces-line",
    Prisma: "ri-database-line",
    JavaScript: "ri-javascript-fill",
    CSS: "ri-css3-fill",
    GitHub: "ri-github-fill",
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  // Simple intersection observer to detect active card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveCard(index);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of element is visible
    );

    const projectElements = document.querySelectorAll(".project-section");
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [content]);

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-[#000000] rounded-md">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fffffe]">
        Projects
      </h1>

      <div className="relative flex flex-col w-full max-w-7xl px-4 lg:px-8 mt-20">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            data-index={index}
            className="project-section flex flex-col lg:flex-row items-start justify-between gap-8 mb-20"
          >
            {/* Project Details */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-bold text-[40px] text-[#fffffe] flex gap-9">
                {item.year}
                <a
                  href={item.github || ""}
                  target="_blank"
                  class="group relative flex items-center justify-center w-14 h-14 bg-[#333333] rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-150 ease-out text-white tooltip"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </p>
              <h2 className="text-2xl font-bold text-[#fffffe] mt-2">
                {item.title}
              </h2>
              <p className="mt-5 text-gray-300">
                <span className="text-[20px] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                  Description:{" "}
                </span>
                {item.description}
              </p>
              <p className="mt-2 text-gray-300">
                <span className="text-[20px] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                  Feature:
                </span>{" "}
                {item.feature}
              </p>

              <motion.div className="mt-4 flex flex-wrap gap-2">
                {item.techStack.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center px-3 py-1 text-[#181818] bg-[#fffffe] rounded-full text-sm font-medium cursor-default 
      border-2 border-transparent 
      hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 
      hover:border-white 
      hover:text-transparent 
      hover:bg-[length:200%_200%] hover:bg-clip-text hover:animate-gradient"
                  >
                    <i
                      className={`${techIcons[tech] || "ri-code-line"} mr-2`}
                    ></i>
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <div
              style={{
                background: linearGradients[index % linearGradients.length],
              }}
              className={cn(
                "w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden",
                contentClassName
              )}
            >
              <ToastContainer position="bottom-left" autoClose={3000} />
              <div className="w-full h-full grid grid-cols-2 gap-3 p-4">
                {item.images.map((image, imgIndex) => (
                  <div
                    onClick={() => {
                      if (item.link) {
                        window.open(item.link, "_blank");
                      } else {
                        toast.info("Still working on this project..."
                        
                        );
                      }
                    }}
                    key={imgIndex}
                    className="bg-white rounded-md overflow-hidden relative cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${item.title} image ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="h-10" />
      </div>
    </div>
  );
};
