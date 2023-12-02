import React from 'react'


function About() {
  return (
    <div className="bg-dark text-white">
    
    <div className='w-full h-screen flex flex-col items-start justify-center p-5'>
      <h1 className='text-4xl text-blue-600'>Hi:</h1>
      <div className="text-lg m-2 font-mono  bg-gray-800 p-4 rounded-lg flex-row">
        <p className=''> My name is Nicholas Burr, I am a fullstack web developer, currently operating in Kazakhstan.</p>
        <br />
        <p className=''>I work in a heavily javascript-focused stack.</p>
        <br />
        <p className=''>Let me work for you!</p>
        <img src={require('src/assets/images/inout.png')} className="rounded-md" alt="Nicholas with a cheeseburger" />
        
      </div>
    </div>
    
  </div>

  
    

  )
}

export default About