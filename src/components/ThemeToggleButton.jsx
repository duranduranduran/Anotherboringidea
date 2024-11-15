import React, { useState } from 'react';

function ThemeToggleButton() {
    const [theme, setTheme] = useState('dark'); // or 'light'

    const handleToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button onClick={handleToggleTheme}>
            Toggle Theme
        </button>
    );
}

export default ThemeToggleButton;