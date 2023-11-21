import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
  return (
    <div className="bg-dark">
      <Navbar/>
      <div className='w-full h-screen text-4xl flex items-center justify-center text-blue-500'>
      About
      </div>
      <Footer/>
    </div>
    

  )
}

export default About