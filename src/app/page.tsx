import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
}
