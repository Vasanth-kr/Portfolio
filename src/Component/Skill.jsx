import React from 'react'

function Skill() {
  return (
    <div>
      {/* Heading */}

      <div className="text-center mb-10 pt-5">
        <p className="font-normal text-gray-600">What i Know</p>
        <h1 className="text-4xl font-semibold mt-3">Skill's</h1>
      </div>


      {/* Main */}

      <div className='w-full h-auto grid  md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 text-center '>

      <div className='w-70 h-auto shadow-2xl'>
        <img className='p-5' src="src\assets\html.png" alt="" />
        <h1 className='text-2xl font-semibold '>HTML</h1>
      </div>

      <div className='w-70 h-auto shadow-2xl'>
        <img className='p-5' src="src\assets\Css.png" alt="" />
        <h1 className='text-2xl font-semibold '>CSS</h1>
      </div>

      <div className='w-70 h-auto shadow-2xl'>
        <img className='p-5' src="src\assets\java-script.png" alt="" />
        <h1 className='text-2xl font-semibold '>JavaScript</h1>
      </div>

      <div className='w-70 h-auto shadow-2xl'>
        <img className='p-5' src="src\assets\React.png" alt="" />
        <h1 className='text-2xl font-semibold '>React</h1>
      </div>

      <div className='w-70 h-auto shadow-2xl'>
        <img className='p-5' src="src\assets\Tailwind CSS.png" alt="" />
        <h1 className='text-2xl font-semibold '>Tailwind CSS</h1>
      </div>

      <div className='w-70 h-auto shadow-2xl'>
        <img className='p-5' src="src\assets\bootstrap.png" alt="" />
        <h1 className='text-2xl font-semibold '>Boostrap</h1>
      </div>




      </div>


    </div>
  )
}

export default Skill



