import { useState, useEffect } from 'react';

export const useLanguage = () => {
    const [language, setLanguage] = useState(() =>
        localStorage.getItem('language') || 'es'
    );

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    };

    return { language, toggleLanguage };
};