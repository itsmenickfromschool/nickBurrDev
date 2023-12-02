import React from 'react'
import Project from '../components/Project'
import loftyImage from '/src/assets/images/lofty.png'
import tripperImage from '/src/assets/images/tripper.png'

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Tripper",
            subTitle: "A forum for travellers to ask eachother questions, similar style to Stackoverflow!",
            link: "https://www.google.com",
            github: "https://github.com/itsmenickfromschool/tripper",
            img: "./src/assets/images/tripper.png",
        },
        {
            id: 2,
            title: "Lofty",
            subTitle: "A way to break large goals into smaller goals!",
            link: "https://lofty.up.railway.app/",
            github: "",
            img: loftyImage,
        },
        {
            id: 3,
            title: "SQL CLI tool",
            subTitle: "A commandline tool to manage a SQL Database for a ski resorts HR department!",
            link: "",
            github: "",
            img: "",
        },
        {
            id: 4,
            title: "Lofty",
            subTitle: "A way to break large goals into smaller goals!",
            link: "https://lofty.up.railway.app/",
            github: "",
            img: loftyImage,
        },
        {
            id: 5,
            title: "Lofty",
            subTitle: "A way to break large goals into smaller goals!",
            link: "https://lofty.up.railway.app/",
            github: "",
            img: loftyImage,
        },
        {
            id: 6,
            title: "",
            subTitle: "A way to break large goals into smaller goals!",
            link: "https://lofty.up.railway.app/",
            github: "",
            img: loftyImage,
        },
    
    ]

  return (
    // <div className="flex flex-wrap -m-2 carousel carousel-end rounded-box">
    <div className="carousel bg-slate-600 carousel-end ">
    {projects.map(project => (
        <div className="carousel-item m-12 p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Project key={project.id} project={project} />
      </div>
      ))}
    </div>
  )
}

export default Projects