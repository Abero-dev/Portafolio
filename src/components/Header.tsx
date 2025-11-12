import { useTypingEffect } from '../hooks/useTypingEffect'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { useState, useEffect } from 'react';
import LanguageToggle from './LanguageToggle';
import { useLanguageStore } from '@/store/languageStore';

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
    const { t, language } = useLanguageStore();

    return (
        <header
            className={`fixed flex lg:flex-row md:flex-wrap flex-col justify-center gap-10 items-center lg:h-20 h-70 top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${scrolled
                ? 'bg-Background/80 backdrop-blur-lg border-b border-border'
                : ''
                }`}
        >
            <div className="flex justify-center lg:mt-0 mt-5 max-w-20 hover:scale-125 transition-transform duration-300 lg:mr-15">
                <span
                    className="text-xl text-green-500 font-bold drop-shadow-green-700 drop-shadow-xl inline-block min-w-[180px] text-center max-w-full overflow-hidden cursor-pointer"
                    onClick={() => scrollToSection('Hero')}
                >
                    {displayText}
                    <span className="animate-pulse">|</span>
                </span>
            </div>

            <div className="lg:flex lg:gap-x-5 text-stone-100 grid grid-cols-2 lg:space-x-0 lg:space-y-0 space-x-2 lg:gap-y-0 gap-y-4 max-w-full px-4">
                <button
                    onClick={() => scrollToSection('Experiencia')}
                    className="cursor-pointer drop-shadow-xl min-w-25 drop-shadow-stone-600 hover:scale-125 transition-transform duration-300 px-2 py-1 text-lg"
                >
                    {t("experienciaHeader")}
                </button>
                <button
                    onClick={() => scrollToSection('Tecnologías')}
                    className="cursor-pointer drop-shadow-xl min-w-25 drop-shadow-stone-600 hover:scale-125 transition-transform duration-300 px-2 py-1 text-lg"
                >
                    {t("tecnologias")}
                </button>
                <button
                    onClick={() => scrollToSection('Proyectos')}
                    className="cursor-pointer drop-shadow-xl min-w-25 drop-shadow-stone-600 hover:scale-125 transition-transform duration-300 px-2 py-1 text-lg"
                >
                    {t("proyectos")}
                </button>
                <button
                    onClick={() => scrollToSection('Contacto')}
                    className="cursor-pointer drop-shadow-xl min-w-25 drop-shadow-stone-600 hover:scale-125 transition-transform duration-300 px-2 py-1 text-base lg:text-lg"
                >
                    {t("contactoHeader")}
                </button>
            </div>
            <div className='space-x-10'>
                <LanguageToggle />
                <a
                    className="px-4 py-2 lg:mt-0 -mt-5 bg-green-600 text-white text-xl lg:text-xl font-bold rounded-lg cursor-pointer drop-shadow-green-800 drop-shadow-lg hover:bg-green-800 transition-colors duration-300"
                    href={`/pdf/CV-Abel-Robaina-Mata-${language === 'es' ? 'ES' : 'EN'}.pdf`}
                    download={`CV-Abel-Robaina-Mata-${language === 'es' ? 'ES' : 'EN'}.pdf`}
                >
                    {t("descargar_cv")}
                </a>
            </div>
        </header>
    )
}

export default Header
