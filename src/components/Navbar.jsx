import React, { useState, useEffect } from 'react';

// We no longer need to import these components here, as App.jsx will handle rendering them.
// import About from './About';
// import Projects from './Projects';
// import Contact from './Resume';
// import Hobbies from './Hobbies';

// Navbar now accepts a prop 'onComponentChange'
const Navbar = ({ onComponentChange }) => {
  // Initialize theme from localStorage, or default to 'LightPortfolio'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "LightPortfolio";
  });

  // Handle the toggle change event
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("DarkPortfolio");
    } else {
      setTheme("LightPortfolio");
    }
  };

  // Effect to update localStorage and the data-theme attribute on the html element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // selectedComponent state is now local to Navbar to manage the active class,
  // but the actual component rendering will be managed by App.jsx
  const [selectedComponent, setSelectedComponent] = useState(0);

  const handleNavClick = (newComponentIndex) => {
    setSelectedComponent(newComponentIndex); // Update active class in Navbar
    onComponentChange(newComponentIndex); // Notify parent (App.jsx) to change component
  };

  return (
    <div className="navbar bg-base--200/20 rounded-box shadow-lg p-4 flex justify-between items-center backdrop-blur-md">
      <div className="navbar-start">
        <h1 className="text-2xl font-bold">Lane Affield</h1>
      </div>
      <div className="navbar-center text-lg ">
        <ul className="menu menu-horizontal p-0">
          <li onClick={() => handleNavClick(0)} className={selectedComponent === 0 ? "active" : ""}><a>About</a></li>
          <li onClick={() => handleNavClick(1)} className={selectedComponent === 1 ? "active" : ""}><a>Projects</a></li>
          <li onClick={() => handleNavClick(2)} className={selectedComponent === 2 ? "active" : ""}><a>Resume</a></li>
          {/* Add Hobbies to the Navbar if you want it to be selectable */}
          <li onClick={() => handleNavClick(3)} className={selectedComponent === 3 ? "active" : ""}><a>Hobbies</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          <label className="flex cursor-pointer gap-2 items-center text-text-secondary ">
            {/* Sun icon for light mode */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-base-content"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>

            {/* Theme toggle checkbox */}
            <input
              type="checkbox"
              className="toggle theme-controller"
              checked={theme === "DarkPortfolio"}
              onChange={handleToggle}
            />

            {/* Moon icon for dark mode */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-base-content"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;