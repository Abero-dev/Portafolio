import Footer from "./components/Footer";
import Navbar from "./components/Header";
import Contact from "./sections/Contact";
import Experiencia from "./sections/Experiencia";
import Hero from "./sections/Hero";
import Proyectos from "./sections/Proyectos";
import Tecnologías from "./sections/Tecnologías";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Experiencia />
      <Tecnologías />
      <Proyectos />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
