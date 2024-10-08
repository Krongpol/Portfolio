import React from 'react'

function navbar() {
  return (
    <div className='flex items-center justify-between text-white bg-blue-800 px-10 py-6'>
        <div>
            <h1 className='text-2xl'>Portolio</h1>
        </div>
        <ul className='flex items-center space-x-4'>
            <li>Profile</li>
            <li>Skill</li>
            <li>Experience</li>
            <li>Project</li>
        </ul>
    </div>
  )
}

export default navbar