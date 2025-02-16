"use client";
import { Pacifico } from "next/font/google";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Ensure smooth scrolling is enabled
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  const navLinks = ["Skills", "Education", "Projects", "Publications", "Contact"];

  // Smooth scrolling function
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md bg-white/70 dark:bg-gray-900/70 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className={`${pacifico.className} text-3xl text-purple-700 dark:text-white tracking-wide`}>
        {"< Vigneshwar J />"}
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-700 dark:text-gray-300">
        {navLinks.map((item, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }}>
            <button
              onClick={() => handleScroll(item.toLowerCase().replace(" ", "-"))}
              className="relative hover:text-blue-500 dark:hover:text-yellow-400 transition duration-300"
            >
              {item}
            </button>
          </motion.li>
        ))}
      </ul>

      {/* Theme Toggle Button */}
      {mounted && (
        <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300"
        >
          {theme === "dark" ? <FiSun size={24} className="text-yellow-400" /> : <FiMoon size={24} className="text-gray-800" />}
        </motion.button>
      )}

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-48 p-4 md:hidden"
          >
            <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-700 dark:text-gray-300">
              {navLinks.map((item, index) => (
                <motion.li key={index} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 150 }}>
                  <button
                    onClick={() => handleScroll(item.toLowerCase().replace(" ", "-"))}
                    className="block py-2 px-4 hover:text-blue-500 dark:hover:text-yellow-400 transition"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
