import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import MusicToggle from './components/MusicToggle';
import Education from "./sections/Education"; 
export default function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <MusicToggle />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Education /> 
      <Contact />
      <Footer/>
    </div>
  );
}
