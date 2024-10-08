import React from 'react'
import image_profile from '../image/profile.jpg'

import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';


function profile() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center m-14'>
        <div className=''>
            <div className='flex items-center justify-center'>
                <img 
                    src={image_profile} 
                    className='rounded-full h-64 w-64 object-cover'
                    style={{minWidth: '16rem', minHeight: '16rem'}}
                />
            </div>
        </div>
        <div className='mt-6 md:ml-6 md:mt-0 space-y-2 text-center md:text-left'>
            <p className='text-2xl'>I'm Krongpol Hansombat.</p> 
            <p className='text-xl'>I am looking for jobs related to</p>
            <ul className='p-2 '>
                <li className='flex items-center justify-center md:justify-start text-blue-800 hover:bg-white hover:rounded-full'>
                    <ArrowRightCircleIcon className='m-1 h-6' />Frontend Developer
                </li>
                <li className='flex items-center justify-center md:justify-start text-blue-800 hover:bg-white hover:rounded-full'>
                    <ArrowRightCircleIcon className='m-1 h-6' />Backend Developer
                </li>
                <li className='flex items-center justify-center md:justify-start text-blue-800 hover:bg-white hover:rounded-full'>
                    <ArrowRightCircleIcon className='m-1 h-6' />Full Stack Developer
                </li>
                <li className='flex items-center justify-center md:justify-start text-blue-800 hover:bg-white hover:rounded-full'>
                    <ArrowRightCircleIcon className='m-1 h-6' />DevOps Engineer
                </li>
                <li className='flex items-center justify-center md:justify-start text-blue-800 hover:bg-white hover:rounded-full'>
                    <ArrowRightCircleIcon className='m-1 h-6' />Software Testing
                </li>
            </ul>
            <button className='transition duration-300 delay-150 hover:delay-150 text-white bg-blue-800 p-2 mt-4 rounded-full hover:text-blue-800 hover:bg-white border-2 border-transparent hover:border-blue-800'>Contact me</button>
        </div>
    </div>

  )
}

export default profile