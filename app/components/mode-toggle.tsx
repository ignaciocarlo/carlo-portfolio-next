"use client"

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const CustomThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // On component mount, check localStorage and system preference
  useEffect(() => {
    setMounted(true);
    
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Check system preference if no saved theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
    
    // Add listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e : any) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Toggle theme function
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Update DOM
    document.documentElement.classList.toggle('dark', newIsDark);
    
    // Save to localStorage
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };
  
  // Don't render until after client-side hydration
  if (!mounted) return null;
  
  return (
    <div className="relative inline-block">
      <button
        onClick={toggleTheme}
        className="flex items-center justify-between w-14 h-7 p-0.5 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{
          backgroundColor: isDark ? '#374151' : '#e5e7eb',
        }}
        aria-label="Toggle theme"
      >
        <div
          className="absolute w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center"
          style={{
            backgroundColor: isDark ? '#1f2937' : 'white',
            transform: isDark ? 'translateX(28px)' : 'translateX(0)',
          }}
        >
          {isDark ? (
            <Moon size={14} className="text-yellow-200" />
          ) : (
            <Sun size={14} className="text-yellow-500" />
          )}
        </div>
      </button>
    </div>
  );
};

export default CustomThemeToggle;