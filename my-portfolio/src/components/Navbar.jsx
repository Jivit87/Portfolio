import clsx from "clsx";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";
import { FaFileAlt } from "react-icons/fa";
import { useWindowScroll } from "react-use";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "Project", "About", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  return (
    <div
      ref={navContainerRef}
      className={clsx(
        "mt-10 fixed inset-x-0 top-0 z-50 transition-all duration-300 sm:inset-x-6",
        "floating-nav:shadow-lg floating-nav:bg-gray-900/95 floating-nav:backdrop-blur-md"
      )}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 px-4 sm:px-6">
        <nav className="flex items-center justify-between h-16 bg-gray-900 rounded-full border border-gray-800/50 shadow-md">
          <div className="flex items-center gap-4 pl-6">
            <h1 className="text-2xl font-extrabold text-gray-100 uppercase tracking-tight">
              <span className="text-purple-500">Jivit</span> Rana
            </h1>
          </div>

          <div className="flex items-center gap-6 pr-6">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn text-gray-300 hover:text-purple-400 font-medium text-sm uppercase tracking-wide transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/16a3JopH7OSSSpcfjsT-woECmXeAQhcGh/view?usp=sharing",
                  "_blank"
                )
              }
              href="#resume"
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-gray-100 text-sm font-semibold rounded-full hover:bg-purple-600 transition-colors duration-200"
            >
              <FaFileAlt size={16} />
              Resume
            </a>
    
            <motion.button
              className="md:hidden text-gray-300 hover:text-purple-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variants={hamburgerVariants}
              animate={isMenuOpen ? "open" : "closed"}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </motion.button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute left-0 right-0 top-full mt-2 bg-gray-900 border border-gray-800/50 rounded-lg shadow-lg p-4"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-4 text-gray-300 hover:text-purple-400 font-medium text-sm uppercase tracking-wide transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Navbar;