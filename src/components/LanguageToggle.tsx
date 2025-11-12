import React from 'react';
import { useLanguageStore } from '../store/languageStore';

const LanguageToggle: React.FC = () => {
    const { language, toggleLanguage } = useLanguageStore();

    return (
        <button
            className="text-green-500 font-semibold border-2 min-w-20 border-green-500 px-3 py-1 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            onClick={toggleLanguage}
        >
            {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
        </button>
    );
};

export default LanguageToggle;