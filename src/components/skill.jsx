import React from 'react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

function skill() {
  return (
    <div className='px-14 py-6 text-white bg-blue-600'>
      <div className='flex flex-col md:flex-row justify-center md:space-x-40 space-y-10 md:space-y-0'>
        <div className='flex flex-col font-bold md:justify-start'>
          <h1 className='p-2 px-4 text-center rounded-full mb-4 bg-white text-lg text-blue-600'>Skills</h1>
          <ul>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Python</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>PHP</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>JavaScript</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>SQL</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Restful API</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>linux</li>
          </ul>
        </div>
        <div className='flex flex-col font-bold md:justify-start'>
          <h1 className='p-2 px-4 text-center rounded-full mb-4 bg-white text-lg text-blue-600'>Frameworks</h1>
          <ul>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Flask API</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Flutter</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>React</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Node JS</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Express</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Nuxt JS</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Bootstrap</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Tailwind</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Nginx</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Gunicorn</li>
          </ul>
        </div>
        <div className='flex flex-col font-bold md:justify-start'>
          <h1 className='p-2 px-4 text-center rounded-full mb-4 bg-white text-lg text-blue-600'>Tools</h1>
          <ul>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Ubuntu</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Postman</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Robot Framework</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Cypress</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Power BI</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>Figma</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>My SQL</li>
            <li className='flex items-center justify-left'><ChevronDoubleRightIcon className='h-5'/>MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default skill
