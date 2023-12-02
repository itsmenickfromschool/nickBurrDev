import React from 'react';
import inoutImage from '/src/assets/images/inout.png'; // Assuming create-react-app's file structure
import rainbowImage from '/src/assets/images/rainbow.png'
import { Email } from '../components/Email';
import { Link } from "react-router-dom"

function About() {
  return (
    <div className="bg-dark text-white flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2  bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl text-blue-600 mb-4">Hi, I'm Nicholas!</h1>
        <p className="text-lg font-mono mb-3">
          I am a full-stack web developer based in Kazakhstan, specializing in JavaScript-focused technologies.
        </p>
        <p className="text-lg font-mono mb-3">
          With a passion for coding and problem-solving, I am ready to bring your web projects to life. Check out my <Link className ="text-blue-500"to="/skills">Skills</Link> and <Link className ="text-blue-500"to="/projects">Projects</Link>. I can even center a Div!
        </p>
        <div className="flex justify-center">
          <img src={rainbowImage} className="rounded-md mt-3 max-w-full h-auto" alt="Nicholas Burr with a cheeseburger" />
        </div>
      </div>
      <div className='w-full m-5 md:mt-0 md:ml-5'>
      <Email />
      </div>
    </div>
  );
}

export default About;
