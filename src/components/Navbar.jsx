import React from "react";
import { Link } from "react-router-dom";

const logo = `<NickBurrDevelops />`;
function Navbar() {
  return (
    <div className="navbar top-0 bg-gray-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">{logo}</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
        </ul>
      </div>
      <div className="hidden navbar-end md:flex">
        <Link to="/contact" className="btn">
          Hire me!
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
