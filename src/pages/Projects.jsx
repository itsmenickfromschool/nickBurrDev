import React from 'react'
import Project from '../components/Project'
import { CgScrollH } from "react-icons/cg";
import loftyImage from '/src/assets/images/lofty.png'
import tripperImage from '/src/assets/images/tripper.png'
import weatherImage from '/src/assets/images/weather.png'
import jateImage from '/src/assets/images/jate.png'
import animalImage from '/src/assets/images/animal.png'
import noteTakerImage from '/src/assets/images/noteTaker.png'

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Tripper",
            subTitle: "A forum for travellers to ask eachother questions, similar style to Stackoverflow!",
            link: "https://www.google.com",
            github: "https://github.com/itsmenickfromschool/tripper",
            img: tripperImage,
        },
        {
            id: 2,
            title: "Lofty",
            subTitle: "A way to break large goals into smaller goals!",
            link: "https://lofty.up.railway.app/",
            github: "https://github.com/JBailey007/lofty",
            img: loftyImage,
        },
        {
            id: 3,
            title: "Nick's Weather App",
            subTitle: "A simple weather app!",
            link: "https://itsmenickfromschool.github.io/nicksWeatherApp/",
            github: "https://github.com/itsmenickfromschool/nicksWeatherApp",
            img: weatherImage,
        },
        {
            id: 4,
            title: "noteTaker",
            subTitle: "A note taking app I wrote the backend for",
            link: "https://notetaker-production-495d.up.railway.app/",
            github: "https://github.com/itsmenickfromschool/noteTaker",
            img: noteTakerImage,
        },
        {
            id: 5,
            title: "Animals Wow",
            subTitle: "A fun way to learn about animals!",
            link: "https://itsmenickfromschool.github.io/animalsWow02/",
            github: "https://github.com/itsmenickfromschool/animalsWow02",
            img: animalImage,
        },
        {
            id: 6,
            title: "Code Snippets",
            subTitle: "Javascript syntax Progressive Web App!",
            link: "https://text-editor-pwa-production.up.railway.app/",
            github: "https://github.com/itsmenickfromschool/Text-Editor-PWA",
            img: jateImage,
        },
    
    ]

  return (
    // <div className="flex flex-wrap -m-2 carousel carousel-end rounded-box">
    <div>

    <div className=" w-full carousel bg-slate-600 carousel-end ">
    {projects.map(project => (
        <div className="carousel-item m-12 p-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
        <Project key={project.id} project={project} />
      </div>
      ))}
    </div>
      <div className="flex justify-center w-full py-2 gap-2">
      <CgScrollH size="30"/>
  
</div>
    </div>
  )
}

export default Projects