import { useState, useRef } from "react";
import ikigai from "../assets/ikigai.jpeg";
import yamraj from "../assets/Yamraj.jpeg";
import everyone from "../assets/Everyone.jpeg";
import anne from "../assets/Anne.jpeg";
import Alchemist from "../assets/alchemist.jpeg";

import ProfilesContainer from "./ProfilesContainer";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ title, description }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div
      className="group relative size-full bg-[#333333] hover:bg-[#7f5af0] rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="text-[#fffffe] text-2xl font-bold">{title}</h1>
          {description && (
            <p className="text-[#fffffe] mt-3 text-sm md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => (
  <div id="about" className="sm:m-5 md:m-10 m-1">
    <section className="bg-[black] flex flex-col items-center w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-[#fffffe]">
        About
      </h1>
      <div className="h-auto w-full px-3 md:px-10">
        <BentoTilt className="h-auto border-hsla relative mb-7 w-full overflow-hidden rounded-md">
          <BentoCard
            title="About Me"
            description="I’m Jivit Rana, a CS & AI undergraduate, Full-Stack developer, and competitive programmer passionate about building innovative web solutions. Skilled in the MERN stack, with expertise in React, Tailwind CSS, GSAP, and Framer Motion. A Hacktoberfest 2024 contributor with 200+ LeetCode problems solved, I enjoy tackling complex challenges. Notable projects include a portfolio website, a Pinterest-like platform (Featured), and an e-commerce Nike website clone. Beyond coding, I love public speaking, reading books, and sports like football and basketball."
          />
        </BentoTilt>

        <div className="grid h-auto w-full grid-cols-1 md:grid-cols-2 grid-rows-1 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-1">
            <BentoCard
              title={
                <div className="">
                  <h1 className="text-[#fffffe] font-extrabold text-2xl mb-4 inline-block">
                    Education
                  </h1>
                  <h2 className="text-black text-[1rem] leading-[1.5rem] font-normal">
                    <div className="bg-gray-200 text-black group-hover:bg-[#2cb67d] group-hover:text-white py-2 px-4 rounded-[5px]">
                      <p className="font-bold">
                        Bachelor of Technology <i>(Computer Science)</i>
                      </p>
                      <p>Newton School Of Technology X Rishihood University</p>
                    </div>
                    <div className="bg-gray-200 group-hover:bg-[#2cb67d] group-hover:text-white  text-black my-4 py-2 px-4 rounded-[5px]">
                      <p className="font-bold">
                        Intermediate <i>(Class XII)</i>
                      </p>
                      <p>Mount Litera Zee, Bangalore</p>
                    </div>
                    <div className="bg-gray-200 group-hover:bg-[#2cb67d] group-hover:text-white text-black py-2 px-4 rounded-[5px]">
                      <p className="font-bold">
                        Matriculation <i>(Class X)</i>
                      </p>
                      <p>Rashtriya Military School, Bangalore</p>
                    </div>
                  </h2>
                </div>
              }
            />
          </BentoTilt>
          <Books></Books>
        </div>
        <div className="w-full bento-tilt_1 mt-10">
          <ProfilesContainer></ProfilesContainer>
        </div>
      </div>
    </section>
  </div>
);

const books = [
  {
    id: 1,
    name: "The Alchemist",
    genre: "Fiction, Adventure, Philosophy",
    author: "Paulo Coelho",
    image: Alchemist,
  },
  {
    id: 2,
    name: "Ikigai",
    genre: "Personal Development, Philosophy",
    author: "Héctor García, Francesc Miralles",
    image: ikigai,
  },
  {
    id: 3,
    name: "The Diary of a Young Girl",
    genre: "Autobiography, Historical Non-Fiction",
    author: "Anne Frank",
    image: anne,
  },
  {
    id: 4,
    name: "Yamraj No. 5003",
    genre: "Fiction, Humor, Mythology",
    author: "Anuj Tiwari",
    image: yamraj,
  },
  {
    id: 5,
    name: "Everyone Has a Story",
    genre: "Fiction, Romance, Contemporary Indian Literature",
    author: "Savi Sharma",
    image: everyone,
  },
];

function Books() {
  return (
  <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
  <BentoCard
    title={
      <>
        <h1 className="text-[#fffffe] font-bold text-2xl">Books</h1>
        <div className="mt-3">
          <div className="max-h-[250px] overflow-y-scroll scrollbar grid grid-cols-1 sm:grid-cols-2 gap-2">
            {books.map((book) => (
              <div key={book.id} className="bg-gray-200 h-auto rounded-[5px] p-2">
                <div className="bg-gray-800 w-full h-auto my-2 mx-auto flex items-center gap-1 rounded-[4px]">
                  <div className="bg-white mx-1 my-1 h-[70px] w-[60px] sm:h-[80px] sm:w-[70px] overflow-hidden">
                    <img
                      src={book.image}
                      className="object-contain object-center"
                      alt={book.name}
                    />
                  </div>
                  <div className="text-[10px] leading-[1rem] flex-1">
                    <p>
                      Name:{" "}
                      <span className="italic font-[200]">{book.name}</span>
                    </p>
                    <p>
                      Genre:{" "}
                      <span className="italic font-[200]">{book.genre}</span>
                    </p>
                    <p>
                      Authors:{" "}
                      <span className="italic font-[200]">{book.author}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    }
  />
</BentoTilt>
  );
}

export default About;
