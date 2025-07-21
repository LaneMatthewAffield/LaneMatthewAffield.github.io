import React from 'react';
import GithubProject from './githubProject'; // Import the GithubProject component
const Projects = () => {
  return (
    <div >
      <div classname="flex h-screen items-center justify-center">
        <div className ="text-center mt-6 bg-blur-md shadow-xl backdrop-blur-md p-3 text-text">Web Dev</div>
        <div className="carousel carousel-center  p-3 text-text flex  items-center justify-center">
          <div className="carousel-item">
            <GithubProject title="LaneMatthewAffield.github.io" description="This portfolio site is built with React and showcases my projects and skills. It is designed to be responsive and user-friendly." />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;

