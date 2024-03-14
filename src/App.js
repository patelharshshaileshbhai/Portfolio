import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



function App() {
  return (
    <div>
    <div>

      <Navbar />
    </div>
    <div>

      <Home />
    </div>
    <div>

      <About />
    </div>
      <div>

      <Skills />
      </div>
      <div >

      <Projects />
      </div>
      <div>

      <Contact />
      </div>
    </div>
  );
}

export default App;
