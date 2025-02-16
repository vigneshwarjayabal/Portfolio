"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const educationData = [
  {
    logo: "/PSG_logo.png",
    institution: "PSG College of Technology",
    degree: "Master of Engineering in Computer Science",
    duration: "2022 – 2024",
    description:
      "Focused on AI, ML, and Data Science with research in NLP and deep learning.",
  },
  {
    logo: "/PSG_logo.png",
    institution: "PSG College of Technology",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "2019 – 2021",
    description:
      "Gained expertise in software development, algorithms, and data structures.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Education <span className="wave">🎓</span>
        </motion.h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Logo */}
              <div className="w-24 h-24 flex-shrink-0 rounded-full bg-gray-100 dark:bg-gray-700 p-2 shadow-md">
                <Image
                  src={edu.logo}
                  alt={edu.institution}
                  width={80}
                  height={80}
                  className="rounded-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.duration}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
