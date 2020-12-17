import React, { useEffect, useState } from 'react';
import './App.css';

const DarkMode = () => {
const [darkMode, setDarkMode] = useState(false)

useEffect(() => {
    console.log("You enabled dark mode.");
});

const handleCheckboxChange = () => setDarkMode((prev) => !prev)

return (
    <div className={darkMode ? "dark-Mode" : ""}>
        <label htmlFor="darkMode">darkmode</label>
        <input
            name="darkMode"
            type="checkbox"
            checked={darkMode}
            onChange={handleCheckboxChange}
            />
            <h3 className={darkMode ? "darkText" : ""}>This is text!</h3>
            </div>);
};

export default DarkMode