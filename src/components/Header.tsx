import { useTypingEffect } from '../hooks/useTypingEffect'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { useState, useEffect } from 'react';
import LanguageToggle from './LanguageToggle';
import { useLanguageStore } from '@/store/languageStore';
import { useIsSmallScreen } from '@/hooks/useIsSmallScreen';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguageStore();
    const displayText = useTypingEffect('<Abero-Dev/>')
    const scrollToSection = useScrollToSection()
    const isSmallScreen = useIsSmallScreen();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed flex flex-row justify-around items-center lg:h-20 py-3 top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${scrolled
                ? 'bg-Background/80 backdrop-blur-lg border-b border-border'
                : ''
                }`}
        >
            <div className="flex justify-center lg:mt-0 max-w-20 hover:scale-125 transition-transform duration-300 lg:mr-15">
                <span
                    className="text-xl text-green-500 font-bold drop-shadow-green-700 drop-shadow-xl inline-block min-w-[180px] text-center max-w-full overflow-hidden cursor-pointer"
                    onClick={() => scrollToSection('Hero')}
                >
                    {displayText}
                    <span className="animate-pulse">|</span>
                </span>
            </div>

            {isSmallScreen ? (
                <div className="lg:hidden block">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="cursor-pointer text-stone-100 hover:scale-125 hover:text-green-400 transition-transform duration-300 p-2 rounded-lg hover:bg-white/10">
                                <Menu size={28} />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-48 bg-gray-800 border-2 border-green-500 font-semibold">
                            <DropdownMenuItem
                                className="cursor-pointer px-4 py-2 text-lg text-green-400 drop-shadow-xl drop-shadow-green-800 border-green-500 hover:text-green-400 hover:bg-gray-800/5 rounded-md transition-all duration-200 focus:text-green-400 focus:bg-white/5"
                                onSelect={() => scrollToSection('Experiencia')}
                            >
                                {t("experienciaHeader")}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer px-4 py-2 text-lg text-green-400 drop-shadow-xl drop-shadow-green-800 border-green-500 hover:text-green-400 hover:bg-gray-800/5 rounded-md transition-all duration-200 focus:text-green-400 focus:bg-white/5"
                                onSelect={() => scrollToSection('Tecnologías')}
                            >
                                {t("tecnologias")}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer px-4 py-2 text-lg text-green-400 drop-shadow-xl drop-shadow-green-800 border-green-500 hover:text-green-400 hover:bg-gray-800/5 rounded-md transition-all duration-200 focus:text-green-400 focus:bg-white/5"
                                onSelect={() => scrollToSection('Proyectos')}
                            >
                                {t("proyectos")}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="cursor-pointer px-4 py-2 text-lg text-green-400 drop-shadow-xl drop-shadow-green-800 border-green-500 hover:text-green-400 hover:bg-white/5 rounded-md transition-all duration-200 focus:text-green-400 focus:bg-white/5"
                                onSelect={() => scrollToSection('Contacto')}
                            >
                                {t("contactoHeader")}
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            ) : (
                <div className="lg:flex lg:gap-x-5 text-stone-100 grid grid-cols-2 lg:space-x-0 lg:space-y-0 space-x-2 lg:gap-y-0 gap-y-4 max-w-full px-4">
                    <button
                        onClick={() => scrollToSection('Experiencia')}
                        className="cursor-pointer drop-shadow-xl min-w-25 drop-shadow-stone-600 hover:scale-125 hover:text-green-400 hover:bg-green-900/20 transition-all duration-300 px-2 py-1 text-lg rounded-md"
                    >
                        {t("experienciaHeader")}
                    </button>
                    <button
                        onClick={() => scrollToSection('Tecnologías')}
                        className="cursor-pointer drop-shadow-xl min-w-25 drop-shadow-stone-600 hover:scale-125 hover:text-green-400 hover:bg-green-900/20 transition-all duration-300 px-2 py-1 text-lg rounded-md"
                    >
                        {t("tecnologias")}
                    </button>
                    <button
                        onClick={() => scrollToSection('Proyectos')}
                        className="cursor-pointer drop-shadow-xl min-w-25 drop-shadow-stone-600 hover:scale-125 hover:text-green-400 hover:bg-green-900/20 transition-all duration-300 px-2 py-1 text-lg rounded-md"
                    >
                        {t("proyectos")}
                    </button>
                    <button
                        onClick={() => scrollToSection('Contacto')}
                        className="cursor-pointer drop-shadow-xl min-w-25 drop-shadow-stone-600 hover:scale-125 hover:text-green-400 hover:bg-green-900/20 transition-all duration-300 px-2 py-1 text-base lg:text-lg rounded-md"
                    >
                        {t("contactoHeader")}
                    </button>
                </div>
            )}

            <div className='space-x-10'>
                <LanguageToggle />
            </div>
        </header>
    )
}

export default Header