"use client"; // ✅ Ensures the component runs only on the client

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Inter, Playfair_Display } from "next/font/google";

// Import fonts
const inter = Inter({ subsets: ["latin"], weight: "400" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

// Dynamically import Lottie for animations (only on the client)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type AnimationData = any; // Change this if needed

const Hero = () => {
  const [animationData, setAnimationData] = useState<AnimationData | null>(null);
  const [resumeLink, setResumeLink] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ Fetch animation only on the client
      fetch("/lottie/hello.json")
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch((err) => console.error("Lottie load error:", err));

      setResumeLink("/Vigneshwarj.pdf"); // ✅ Set resume link only on client
    }
  }, []);

  // ✅ Ensure `document` is used only in the browser
  const handleScrollToContact = () => {
    if (typeof window !== "undefined" && document?.getElementById) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 md:px-16 lg:px-32 min-h-screen">
      {/* Left Section: Text */}
      <div className={`text-center md:text-left ${inter.className}`}>
        <h1 className={`text-5xl font-extrabold text-gray-900 dark:text-white ${playfair.className}`}>
          Hi all, I'm <span className="text-purple-600 dark:text-yellow-400">Vigneshwar J</span> <span className="wave-hand">👋</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
          🚀 <span className="font-semibold text-blue-600 dark:text-yellow-300">AI/ML Engineer & Data Scientist</span> | Passionate about AI, ML, NLP & Data Science.  
          Always exploring cutting-edge AI technologies. Let’s shape the future of AI together! ✨
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <a href="https://github.com/vigneshwarjayabal" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
            className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400 transition-all">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vigneshwarj28/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
            className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400 transition-all">
            <FaLinkedin />
          </a>
          <a href="mailto:vigneshwarjayabal@gmail.com" aria-label="Email"
            className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-yellow-400 transition-all">
            <FaEnvelope />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <button onClick={handleScrollToContact} aria-label="Scroll to Contact Section"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:scale-105 transition-transform">
            Contact Me
          </button>
          {resumeLink && (
            <a href={resumeLink} download="Vigneshwarj.pdf" aria-label="Download Resume"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-lg hover:scale-105 transition-transform">
              Download Resume
            </a>
          )}
        </div>
      </div>

      {/* Right Section: Animation */}
      <div className="w-full md:w-1/2 flex justify-center">
        {animationData ? (
          <Lottie animationData={animationData} loop className="w-[400px] md:w-[500px]" />
        ) : (
          <p className="text-gray-600 dark:text-gray-300">Loading animation...</p>
        )}
      </div>
    </section>
  );
};

export default Hero;
