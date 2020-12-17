import React, { useEffect, useState } from 'react';
import './DarkMode.css';
import MyComponent from './MyComponent.js';
import Name from './Name';
import FunFact from './FunFact';
import ThingsILike from '../ThingsILike.js';
import Top5Movies from '../Top5Movies';
import DynamicText from './DynamicText';
import Example from './Example'
//created components are imported as jsx elements, effectively html elements

const Layout = () => {
    const [darkMode, setDarkMode] = useState(false)
    
    useEffect(() => {
        console.log("You enabled dark mode.");
    });
    
    const handleCheckboxChange = () => setDarkMode((prev) => !prev)
  return (
    <div className={darkMode ? "dark-Mode" : ""}>
    <h3 className={darkMode ? "darkText" : ""}>
    <label htmlFor="darkMode">darkmode</label>
    <input
        name="darkMode"
        type="checkbox"
        checked={darkMode}
        onChange={handleCheckboxChange}
        />
        
      <MyComponent />
      <Name customName="Sawyer"/>
      <FunFact />
      <ThingsILike />
      <Top5Movies/>
      <Example />
      <DynamicText />
      </h3>
      </div>
  );
}


export default Layout;
