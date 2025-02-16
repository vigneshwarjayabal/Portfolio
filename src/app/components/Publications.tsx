"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const publications = [
  {
    title: "Sustainable Development for Smart Cities: Challenges and Opportunities",
    journal: "International Journal of Science & Engineering Development Research",
    issn: "ISSN: 2455-2631",
    volume: "Vol.8, Issue 1",
    pages: "Page 1045 - 1055",
    date: "January 2023",
    link: "https://www.ijsdr.org/papers/IJSDR2301166.pdf",
  },
  {
    title: "Performance Analysis of Deep Learning and Machine Learning Methods for Music Genre Classification System",
    journal: "International Journal of Soft Computing Paradigm",
    issn: "ISSN: 2582-2640",
    volume: "Vol.6, Issue 2",
    pages: "Page 116 - 127",
    date: "May 2024",
    link: "https://irojournals.com/jscp/article/view/6/2/1",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-6">
        {/* Section Heading with Animation */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Publications 📝
        </motion.h2>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 
                         dark:border-gray-700 hover:shadow-lg transition duration-300 transform 
                         hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Publication Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{pub.title}</h3>

              {/* Journal Details */}
              <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                <strong className="text-gray-900 dark:text-gray-200">{pub.journal}</strong> <br />
                <span className="text-sm text-gray-700 dark:text-gray-400">{pub.issn} | {pub.volume} | {pub.pages}</span> <br />
                <span className="italic text-blue-600 dark:text-yellow-400">{pub.date}</span>
              </p>

              {/* Read Paper Button */}
              <div className="mt-5">
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full
                            hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
                >
                  Read Paper <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
