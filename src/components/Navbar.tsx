import { useState, useEffect, useRef } from 'react';

function Navbar() {
    const [displayText, setDisplayText] = useState('');
    const animationRef = useRef({
        currentIndex: 0,
        isDeleting: false,
        fullText: "<Abero-Dev/>",
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseTime: 2000
    });

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) section.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const animate = () => {
            const state = animationRef.current;

            if (!state.isDeleting) {
                if (state.currentIndex <= state.fullText.length) {
                    setDisplayText(state.fullText.substring(0, state.currentIndex));
                    state.currentIndex++;
                    setTimeout(animate, state.typingSpeed);
                } else {
                    setTimeout(() => {
                        animationRef.current.isDeleting = true;
                        animate();
                    }, state.pauseTime);
                }
            } else {
                if (state.currentIndex > 0) {
                    setDisplayText(state.fullText.substring(0, state.currentIndex - 1));
                    state.currentIndex--;
                    setTimeout(animate, state.deletingSpeed);
                } else {
                    state.isDeleting = false;
                    setTimeout(() => {
                        state.currentIndex = 0;
                        animate();
                    }, 500);
                }
            }
        };

        animate();

        return () => {
        };
    }, []); 

    return (
        <nav className="h-40 top-0 w-screen flex justify-around items-center fixed">
            {/* Contenedor con ancho fijo */}
            <div className="flex justify-center min-w-[300px]">
                <span className="text-3xl text-green-500 font-bold drop-shadow-green-700 drop-shadow-xl inline-block min-w-[300px] text-center">
                    {displayText}
                    <span className="animate-pulse">|</span>
                </span>
            </div>

            <div className="flex gap-x-10 text-2xl text-stone-100">
                <button className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300" onClick={() => scrollToSection("Experiencia")}>Experiencia</button>
                <button className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300" onClick={() => scrollToSection("Tecnologías")}>Tecnologías</button>
                <button className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300" onClick={() => scrollToSection("Proyecto")}>Proyecto</button>
                <button className="cursor-pointer drop-shadow-xl drop-shadow-stone-600 hover:scale-125 transition-transform duration-300" onClick={() => scrollToSection("Contacto")}>Contacto</button>
            </div>

            <button className="px-6 py-4 bg-green-600 text-white text-3xl font-bold rounded-lg cursor-pointer drop-shadow-green-800 drop-shadow-lg hover:bg-green-700 transition-colors duration-300">Descargar CV</button>
        </nav>
    )
}

export default Navbar