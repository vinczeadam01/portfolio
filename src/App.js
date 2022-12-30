import './App.css';
import Navbar from "./components/navbar/navbar"
import Header from "./components/header/header"
import About from "./components/about/about"
import Skills from "./components/skills/skills"
import Projects from "./components/projects/projects"
import Contact from "./components/contact/contact"
import Background from './components/background/background';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Background />
    </div>
  );
}



export default App;
