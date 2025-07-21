import React from 'react';
const GithubProject = ({ title, description }) => {
  return (
    <div className="shadow-lg bg-base-300/20 bg-blur-md backdrop-blur-md p-4 h-50 w-130 rounded-box">
      <a className= "link link-hover text-3xl font-bold" href={`https://github.com/LaneMatthewAffield/${title.toLowerCase().replace(/\s/g, '-')}`} target="_blank" rel="noreferrer">
        {title}
      </a>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default GithubProject;
