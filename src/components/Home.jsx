import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import me from '../assets/me.jpg';

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {/* Main text content */}
      <div className="col-span-2">
        <div className="card bg-base-200/40 bg-blur-md shadow-xl backdrop-blur-md mx-auto my-10 p-6 text-text w-fit h-fit overflow-hidden">
          <p className="text-lg">
            {/* Floated image */}
            <img
              src={me}
              alt="Lane Affield"
              className="float-right w-60 h-60 rounded-md object-cover ml-6 mb-4"
            />

            {/* Heading styled as block */}
            <span className="text-3xl font-bold block mb-4">Welcome to My Portfolio Site!</span>

            Hi, I'm Lane Affield! I'm a software engineer based in Des Moines, Iowa
            where I currently work at Principal Financial Group. I'm an alum of Drake University (GO Bulldogs!)
            and graduated December of 2024 with a Bachelor's of Science in Computer Science and Artificial Intelligence with minors in Cybersecurity and Data Analytics.
            <br /><br />
            In my free time you can catch me playing video games, trying a new recipe, or working on a new project.
            I am a massive coffee nerd and am always looking to try new coffee shops in the area.
            <br /><br />
            Feel free to explore my projects, and if you have any questions or just want to connect, feel free to reach out using any of the links on this page.
          </p>
        </div>
      </div>

      {/* Contact Links */}
      <div className="text-center col-span-1 space-y-6 my-10">
        <div className="card bg-base-200/40 bg-blur-md shadow-xl backdrop-blur-md p-6 text-text w-80 flex flex-row items-center gap-2 mx-auto">
          <AiOutlineMail className="mr-2" />
          <a className="link-hover" href="mailto:lane.m.affield@gmail.com">lane.m.affield@gmail.com</a>
        </div>
        <div className="card bg-base-200/40 bg-blur-md shadow-xl backdrop-blur-md p-6 text-text w-80 flex flex-row items-center gap-2 mx-auto">
          <FaLinkedinIn className="mr-2" />
          <a className="link-hover" href="https://www.linkedin.com/in/lane-affield" target="_blank" rel="noopener noreferrer">Lane Affield on LinkedIn</a>
        </div>
        <div className="card bg-base-200/40 bg-blur-md shadow-xl backdrop-blur-md p-6 text-text w-80 flex flex-row items-center gap-2 mx-auto">
          <FaGithub className="mr-2" />
          <a className="link-hover" href="https://github.com/LaneMatthewAffield" target="_blank" rel="noopener noreferrer">Lane-M-Affield on GitHub</a>
        </div>
        <div className="card bg-base-200/40 bg-blur-md shadow-xl backdrop-blur-md p-6 text-text w-80 flex flex-row items-center gap-2 mx-auto">
          <FaInstagram className="mr-2" />
          <a className="link-hover" href="https://www.instagram.com/lane.affield/" target="_blank" rel="noopener noreferrer">Lane Affield on Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
