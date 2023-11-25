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
import { FaPhoneSquare } from "react-icons/fa";
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
    <div className="">
      <div className="w-full h-screen text-4xl flex items-center justify-center text-blue-500">
        <div>Skills</div>
        {skills.map((item) => (
          <div className="flex flex-col" key={item.skill}>
            <div>
              <h2>{item.skill}</h2>
              <item.Icon />
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default Skills;
