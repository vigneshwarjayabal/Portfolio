"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Music Genre Classification 🎵🎶",
    description:
      "Built a Machine Learning model to classify music genres using CNN, SVM, and KNN. Extracted features from audio signals (MFCCs & Spectrograms) and conducted a comparative analysis.",
    tech: ["Python", "CNN", "SVM", "KNN", "Audio Processing"],
    github: "https://github.com/vigneshwarjayabal/Music_Genre_classification.git",
    live: "http://3.109.2.236:8501/",
  },
  {
    title: "Parkinson’s Disease Early Detection 🏥🧠",
    description:
      "Developed a hybrid Deep Learning model combining CNN & GNN to enhance diagnostic accuracy for Parkinson’s Disease using advanced feature extraction and graph-based analysis.",
    tech: ["Python", "CNN", "GNN", "Deep Learning", "Medical Data"],
    github: "https://github.com/vigneshwarjayabal/Parkinsons.git",
    live: "",
  },
  {
    title: "Multi-Disease Prediction System 🏥🤖",
    description:
      "Built an AI-powered system for predicting Parkinson’s, Liver, and Kidney Diseases using ML. Developed a Streamlit app and deployed it on AWS EC2 (Ubuntu) for cloud accessibility.",
    tech: ["Python", "Scikit-learn", "Streamlit", "AWS EC2", "NumPy"],
    github: "https://github.com/vigneshwarjayabal/Multi_Disease_prediction.git",
    live: "http://3.109.56.127:8501/",
  },
  {
    title: "Car Resale Price Prediction with AI Chatbot 🚗🤖",
    description:
      "Developed an AI-powered Car Price Predictor with an interactive chatbot using ML, NLP, and cloud computing. Data stored in AWS S3 & RDS, ML models implemented for predictions.",
    tech: ["Python", "MLflow", "Streamlit", "AWS S3 & RDS", "XGBoost", "spaCy"],
    github: "https://github.com/vigneshwarjayabal/car_price_pred.git",
    live: "https://carpricepredandchatbot.streamlit.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-6">
        {/* Section Heading with Animation */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Projects 🚀
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 
                         dark:border-gray-700 hover:shadow-lg transition duration-300 transform 
                         hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap mt-3">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gradient-to-r from-blue-400 to-purple-500 text-white 
                               px-3 py-1 rounded-full mr-2 mt-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex mt-4 space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-300"
                  >
                    <FaGithub size={26} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:text-yellow-400 dark:hover:text-yellow-300 transition duration-300"
                  >
                    <FaExternalLinkAlt size={26} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
