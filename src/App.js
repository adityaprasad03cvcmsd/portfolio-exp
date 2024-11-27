import "./App.css";
import { About } from "./components/About";
import Contact from "./components/Contact";
import ExperienceSection from "./components/ExperienceSection";
import { Home } from "./components/Home";
import Project from "./components/Project";
import { Skill } from "./components/Skills";
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
