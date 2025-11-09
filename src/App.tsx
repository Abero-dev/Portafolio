import Navbar from "./components/Header";
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
      <Proyectos/>
    </div>
  )
}

export default App
