import React from "react";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom"
function Project({ project }) {
  return (
    <div className="card bg-gray-700 shadow-xl h-96 w-full">
      <figure>
        <img className="image-full"src={project.img} />
      </figure>
      <div className="card-body bg-gray-800 rounded-md">
        <h2 className="card-title">{project.title}</h2>
        <p className="text-slate-200 text-xs">{project.subTitle}</p>
        <div className="card-actions justify-end">
          <Link to={`${project.link}`}>
            <button className="btn btn-primary">Go to!</button>
          </Link>
          <Link to={`${project.github}`}>
            <button>
              <VscGithub size="20px"/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
