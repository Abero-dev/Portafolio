import { useTypingEffect } from '../hooks/useTypingEffect'
import { useScrollToSection } from '../hooks/useScrollToSection'

function Navbar() {
    const displayText = useTypingEffect('<Abero-Dev/>')
    const scrollToSection = useScrollToSection()

    return (
        <nav className="h-40 top-0 w-screen flex justify-around items-center fixed z-50">
            <div className="flex justify-center min-w-[300px]">
                <span className="text-3xl text-green-500 font-bold drop-shadow-green-700 drop-shadow-xl inline-block min-w-[300px] text-center">
                    {displayText}
                    <span className="animate-pulse">|</span>
                </span>
            </div>

            <div className="flex gap-x-10 text-2xl text-stone-100">
                <button onClick={() => scrollToSection('Experiencia')} className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300">Experiencia</button>
                <button onClick={() => scrollToSection('Tecnologías')} className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300">Tecnologías</button>
                <button onClick={() => scrollToSection('Proyecto')} className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300">Proyecto</button>
                <button onClick={() => scrollToSection('Contacto')} className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300">Contacto</button>
            </div>

            <button className="px-6 py-4 bg-green-600 text-white text-3xl font-bold rounded-lg cursor-pointer drop-shadow-green-800 drop-shadow-lg hover:bg-green-700 transition-colors duration-300">
                Descargar CV
            </button>
        </nav>
    )
}

export default Navbar
