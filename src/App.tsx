import Navbar from "./components/Header";
import Experiencia from "./sections/Experiencia";
import Hero from "./sections/Hero";
import Tecnologías from "./sections/Tecnologías";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Experiencia />
      <Tecnologías />
    </div>
  )
}

export default App
