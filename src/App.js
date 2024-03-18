import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";



function App() {
  const isMobile = window.innerWidth <= 768; // Define the width where you consider it's mobile
  return (
    <div>
      <div>

        <Navbar />
      </div>
      <div>

        <Home />
      </div>
      {isMobile && (
        <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
          <SocialLinks />
        </div>)}
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
      <div>

        <Footer />
      </div>
     

    </div>
  );
}

export default App;
