import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Importar traducciones
import esTranslations from '../data/es.json';
import enTranslations from '../data/en.json';

type Language = 'es' | 'en';

interface LanguageState {
    language: Language;
    toggleLanguage: () => void;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    es: esTranslations,
    en: enTranslations,
};

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set, get) => ({
            language: 'es',

            toggleLanguage: () => {
                const { language } = get();
                const newLanguage = language === 'es' ? 'en' : 'es';
                set({ language: newLanguage });
            },

            setLanguage: (lang: Language) => {
                set({ language: lang });
            },

            t: (key: string) => {
                const { language } = get();
                return translations[language][key as keyof typeof translations[typeof language]] || key;
            },
        }),
        {
            name: 'portfolio-language', // nombre para localStorage
        }
    )
);