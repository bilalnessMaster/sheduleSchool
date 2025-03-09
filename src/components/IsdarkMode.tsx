'use client';
import { Sun, SunMoon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const IsdarkMode = () => {
    const [isLoading, setLoading] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        const isDark = localStorage.getItem('isDarkMode');

        setIsDarkMode(JSON.parse(isDark || 'false'));
        setLoading(true);
    }, []);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
            document.documentElement.classList.toggle('dark', isDarkMode);
        }
    }, [isDarkMode]);


    if (!isLoading) return null;

    return (
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun /> : <SunMoon />}
        </button>
    );
};

export default IsdarkMode;
