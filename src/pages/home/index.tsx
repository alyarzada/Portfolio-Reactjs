import Hero from "./components/Hero";
import About from "../about";
import Contact from "../contact";
import Career from "../career";
import Projects from "../projects";
import Skills from "../skills";
import Services from "../services";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Services />
      <About />
      <Skills />
      <Career />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
