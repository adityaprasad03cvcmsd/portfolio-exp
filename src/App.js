import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Skill } from "./components/Skills";
import ExperienceSection from "./components/ExperienceSection";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skill />
      <ExperienceSection />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
