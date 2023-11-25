import React from 'react'


function About() {
  return (
    <div className="bg-dark text-white">
    
    <div className='w-full h-screen flex flex-col items-start justify-center p-5'>
      <h1 className='text-4xl text-blue-500'>Hi,</h1>
      <div className="text-lg font-mono bg-gray-800 p-4 rounded-lg">
        <p><span className="text-green-400">let</span> nick = <span className="text-yellow-300">"Your Name Here"</span>;</p>
        <p><span className="text-green-400">function</span> About() &#123;</p>
        <p className="ml-4">return (</p>
        <p className="ml-8">&#60;<span className="text-purple-500">div</span> className="bg-dark"&#62;</p>
        <p className="ml-12">... <span className="text-red-500">// Your content goes here</span></p>
        <p className="ml-8">&#60;/<span className="text-purple-500">div</span>&#62;</p>
        <p className="ml-4">);</p>
        <p>&#125;</p>
      </div>
    </div>
    
  </div>

  
    

  )
}

export default About