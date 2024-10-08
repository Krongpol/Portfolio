import React from 'react';

function Experience() {
  return (
    <div className='flex flex-col text-blue-600 px-4 sm:px-10 md:px-20 lg:px-52 m-4 md:m-10 border-b-4 pb-10 border-blue-600'>
        <h1 className='font-bold text-4xl pb-8 underline underline-offset-6 text-start'>Experience</h1>
        <div className='container'>
            <div className='border-y-4 py-8 border-blue-400'>
                <h2 className='text-2xl pb-2 underline underline-offset-4'>Final Project</h2>
                <p className='text-xl'>Automated Bird Population Counting Application Using Image Processing</p>
                <p className='text-lg'>2023</p>
                <ul className='mt-2 space-y-4'>
                    <li >Model: Count the number of birds in a picture using object detection. The model creates bounding boxes around counted birds with over 80% accuracy.</li>
                    <li >API: Enables communication between web apps and the trained model. Images are processed and returned in JSON format using Flask.</li>
                    <li >Web and Mobile App: Communication through an API built with PHP and Flutter.</li>
                    <li >Deploy: Nginx and Gunicorn used to deploy both the model and web application on an Ubuntu VM Server.</li>
                </ul>
                <button className='transition duration-300 delay-150 hover:delay-150 text-white bg-blue-800 p-2 mt-4 rounded-full hover:text-blue-800 hover:bg-white border-2 border-transparent hover:border-blue-800'>
                    Read more
                </button>
            </div>
        </div>
    </div>
  );
}

export default Experience;
