import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";

function Project({ project }) {
  return (
    <div className="card bg-gray-700 shadow-xl">
      <figure>
        <img src={project.img} />
      </figure>
      <div className="card-body bg-gray-800">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.subTitle}</p>
        <div className="card-actions justify-end">
          <a href={`${project.link}`}>
            <button className="btn btn-primary">Go to!</button>
          </a>
          <a href={`${project.github}`}>
            <button>
              <TbBrandGithubFilled />
              <VscGithub size="20px"/>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
