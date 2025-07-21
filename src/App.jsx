import React, { useState } from 'react'; // Import useState
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar'; // Import your Navbar component
import About from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Resume';
import Hobbies from './components/Hobbies';

import './index.css'; // Make sure your main CSS is imported


function App() {
  // State to keep track of which component should be displayed
  const [currentView, setCurrentView] = useState(0); // 0 for About, 1 for Projects, 2 for Contact, 3 for Hobbies

  // Function to update the currentView state
  const handleComponentChange = (componentIndex) => {
    setCurrentView(componentIndex);
  };

  // Function to render the correct component based on currentView
  const renderComponent = () => {
    switch (currentView) {
      case 0:
        return <About />;
      case 1:
        return <Projects />;
      case 2:
        return <Contact />;
      case 3:
        return <Hobbies />;
      default:
        return <Home />; // Default to About or a splash page
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative ">
      <ParticleBackground />

      <div className="z-20 flex-grow">
        {/* Pass the handleComponentChange function to Navbar */}
        <Navbar onComponentChange={handleComponentChange} />

        <div>
          {/* Render the selected component here */}
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;