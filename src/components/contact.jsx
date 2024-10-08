import React from 'react'
import { PhoneIcon , EnvelopeIcon } from '@heroicons/react/24/solid'

function Contact() {
  return (
    <footer className='flex flex-col text-center bg-blue-600 text-white py-6'>
      <h1 className='text-2xl'>Contact</h1>
      <div className='flex items-center justify-center space-x-4 mt-2'>
      <p className='flex items-center justify-center'><EnvelopeIcon className='h-6 w-6 mr-2'/>Krongpol@kkumail.com</p>
      <p className='flex items-center justify-center'><PhoneIcon className='h-6 w-6 mr-2'/>0838736214</p>
      </div>
    </footer>
  )
}

export default Contact