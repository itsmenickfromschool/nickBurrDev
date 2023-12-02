import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { GrGraphQl } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaPhoneSquare, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Email } from "../components/Email";
import { CgScrollV } from "react-icons/cg";
import resume from '/src/assets/pdf/resume.pdf'
import { Link } from "react-router-dom";


function Skills() {
  const skills = [
    {
      skill: "Javascript",
      Icon: RiJavascriptFill,
    },
    {
      skill: "React",
      Icon: FaReact,
    },
    {
      skill: "NodeJS",
      Icon: DiNodejs,
    },
    {
      skill: "GraphQL",
      Icon: GrGraphQl,
    },
    {
      skill: "SQL",
      Icon: GrMysql,
    },
    {
      skill: "MongoDB",
      Icon: SiMongodb,
    },
    {
      skill: "Express",
      Icon: SiExpress,
    },
    {
      skill: "Excellent Communication",
      Icon: FaPhoneSquare,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 bg-slate-600">
      <div className="flex-1 m-5 flex flex-col items-center">
        <div className="flex flex-row items-center ">
          <h2 className="text-2xl font-bold text-slate-800 mb-0">
            {" "}
            Scroll through my Skills{" "}
          </h2>
          <CgScrollV className="text-4xl ml-1 text-slate-800" />
        </div>

        <div className="w-full m-5 carousel carousel-vertical h-96 bg-slate-800 rounded-box  shadow-lg p-4 mb-4">
          {skills.map((item) => (
            <div
              className="carousel-item flex flex-col items-center justify-center py-3 px-2"
              key={item.skill}
            >
              <item.Icon className="text-6xl mb-2 text-blue-500" />
              <span className="text-xl text-white">{item.skill}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-700 text-white p-3 rounded-lg shadow-lg mb-4">
          <p className="text-lg">
            I am a passionate full-stack developer with expertise in modern web
            technologies. My skills encompass both frontend and backend
            development, creating efficient and scalable solutions.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center mt-6 md:mt-0">
      <Link to={resume}><button className="btn m-5  w-full">Resume</button></Link>
        <Email className="w-full" />{" "}
        
      </div>
    </div>
  );
}

export default Skills;
