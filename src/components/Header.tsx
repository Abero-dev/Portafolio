import { useTypingEffect } from '../hooks/useTypingEffect'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { useState, useEffect } from 'react';

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const displayText = useTypingEffect('<Abero-Dev/>')
    const scrollToSection = useScrollToSection()

    return (
        <header
            className={`fixed flex flex-1 lg:flex-row md:flex-wrap flex-col justify-around items-center lg:h-30 h-60 top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-Background/80 backdrop-blur-lg border-b border-border'
                : ''
                }`}
        >
            <div className="flex justify-center min-w-[300px]">
                <span className="text-3xl text-green-500 font-bold drop-shadow-green-700 drop-shadow-xl inline-block min-w-[300px] text-center">
                    {displayText}
                    <span className="animate-pulse">|</span>
                </span>
            </div>

            <div className="lg:flex lg:gap-x-10 text-2xl text-stone-100 grid grid-cols-2 lg:space-x-0 lg:space-y-0 space-x-10 space-y-2">
                <button onClick={() => scrollToSection('Experiencia')} className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300">Experiencia</button>
                <button onClick={() => scrollToSection('Tecnologías')} className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300">Tecnologías</button>
                <button onClick={() => scrollToSection('Proyecto')} className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300">Proyecto</button>
                <button onClick={() => scrollToSection('Contacto')} className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300">Contacto</button>
            </div>

            <button className="px-6 py-4 bg-green-600 text-white text-3xl font-bold rounded-lg cursor-pointer drop-shadow-green-800 drop-shadow-lg hover:bg-green-700 transition-colors duration-300">
                Descargar CV
            </button>
        </header>
    )
}

export default Header
