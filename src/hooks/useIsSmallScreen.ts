import { useState, useEffect } from 'react';

export function useIsSmallScreen() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isSmallScreen;
}
