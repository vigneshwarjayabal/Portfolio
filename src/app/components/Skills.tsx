"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { useTheme } from "next-themes";
import Link from "next/link";

import {
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiJupyter,
  SiGooglecolab,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiKeras,
  SiScikitlearn,
  SiTensorflow,
  SiSpacy,
  SiLangchain,
  SiPostgresql,
  SiMysql,
  SiStreamlit,
} from "react-icons/si";

const skills = [
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Jupyter Notebook", icon: <SiJupyter size={40} /> },
  { name: "Google Colab", icon: <SiGooglecolab size={40} /> },
  { name: "Pandas", icon: <SiPandas size={40} /> },
  { name: "NumPy", icon: <SiNumpy size={40} /> },
  { name: "Plotly", icon: <SiPlotly size={40} /> },
  { name: "Keras", icon: <SiKeras size={40} /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn size={40} /> },
  { name: "TensorFlow", icon: <SiTensorflow size={40} /> },
  { name: "spaCy", icon: <SiSpacy size={40} /> },
  { name: "LangChain", icon: <SiLangchain size={40} /> },
  { name: "AWS", icon: <FaAws size={40} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "Streamlit", icon: <SiStreamlit size={40} /> },
];

const Skills = () => {
  const { theme } = useTheme();
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/lottie/developer.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimationData(data);
        setIsLoading(false);
      })
      .catch((err) => console.error("Lottie Load Error:", err));
  }, []);

  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-16 lg:px-32 bg-gray-50 dark:bg-gray-900 transition-all duration-300 scroll-smooth"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Animation */}
        <div className="w-full md:w-1/2 flex justify-center">
          {isLoading ? (
            <p className="text-gray-600 dark:text-gray-300">Loading animation...</p>
          ) : (
            <Lottie animationData={animationData} loop className="w-[400px] md:w-[500px]" />
          )}
        </div>

        {/* Right Side: Skills Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Skills & Expertise <span className="text-blue-600 dark:text-yellow-400">🚀</span>
          </h2>
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
            Passionate AI/ML Engineer & Data Scientist with a love for building data-driven solutions.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mt-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 transition-all duration-300 transform 
                hover:scale-110 hover:shadow-lg bg-gray-100 dark:bg-gray-800 rounded-xl border 
                border-gray-200 dark:border-gray-700 shadow-md text-gray-800 dark:text-gray-300"
              >
                {skill.icon}
                <span className="text-sm font-semibold mt-2 text-center">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="mt-8 space-y-3 text-lg text-gray-700 dark:text-gray-300 font-sans">
            <p>✨ Build AI-powered solutions using Machine Learning & NLP.</p>
            <p>✨ Work with data analytics, Python, Pandas & SQL.</p>
            <p>✨ Deploy AI models on AWS & create Streamlit applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;