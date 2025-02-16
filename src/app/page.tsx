import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills/>
      <Education/>
      <Projects/>
      <Publications/>
      <Contact/>
      <main>{children}</main>
    </div>
  );
}
