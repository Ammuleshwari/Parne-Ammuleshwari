import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import MusicToggle from './components/MusicToggle';
export default function App() {
  return (
    <div className="bg-black text-white">
      <MusicToggle />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
