import React from 'react'
import {VscGithub} from 'react-icons/vsc'
import { SiSpotify } from "react-icons/si";
import { PiLinkedinLogoBold } from "react-icons/pi";


function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
    <nav className="grid grid-flow-col gap-4">
      <a href="/about" className="link link-hover">About me</a>
      <a href="/about" className="link link-hover">Contact</a>
      <a href="/projects" className="link link-hover">Projects</a>
      <a href="/skills" className="link link-hover">Skills</a>
      
    </nav> 
    <nav>
      <div className="grid grid-flow-col gap-4">
        <a href="https://github.com/itsmenickfromschool"><VscGithub size="40px" /></a>
        <a href="https://www.linkedin.com/in/nicholas-burr-48a316252/"><PiLinkedinLogoBold size="40px" /></a>
        <a href="https://open.spotify.com/user/129303136?si=85f6e7bbacad4d5c"><SiSpotify size="40px" /></a>
      </div>
    </nav> 
    <aside>
      <p>Copyright © 2023 - All right reserved by NickBurrDev</p>
    </aside>
  </footer>
  )
}

export default Footer