"use client";
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Left: Contact Details */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Get in Touch <span className="wave">📬</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mb-6">
            Let&apos;s connect! Whether it&apos;s about AI, ML, Data Science, or just a friendly chat, 
            I&apos;m always open to discussions. 🚀✨
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center md:justify-start space-x-6">
            <motion.a 
              href="mailto:vigneshwarjayabal@gmail.com" 
              aria-label="Email Vigneshwar"
              className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-full shadow-md 
                         hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FaEnvelope size={30} className="text-blue-500 dark:text-blue-400" />
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/vigneshwarjayabal/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-full shadow-md 
                         hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FaLinkedin size={30} className="text-blue-600 dark:text-blue-400" />
            </motion.a>

            <motion.a 
              href="https://github.com/vigneshwarjayabal" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-full shadow-md 
                         hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <FaGithub size={30} className="text-gray-900 dark:text-white" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Profile Picture */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image 
            src="/profile.jpg" 
            alt="Vigneshwar J" 
            width={300} 
            height={300} 
            priority
            className="rounded-full shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
