import Navbar from "./components/Header";
import Experiencia from "./sections/Experiencia";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Experiencia />
    </div>
  )
}

export default App
