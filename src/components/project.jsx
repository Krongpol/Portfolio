import React, { useRef } from 'react';
import { ArrowRightCircleIcon, ArrowLeftCircleIcon,GlobeAsiaAustraliaIcon  } from '@heroicons/react/24/solid'; // Import icons
import projectData from '../data/project'; // Import data from project.js

function Project() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col text-blue-600 px-4 sm:px-10 md:px-20 lg:px-52 m-4 md:m-10'>
      <div>
      <h1 className='font-bold text-4xl pb-8 underline underline-offset-6 text-start'>My Project</h1>
        {/* Container for buttons and scrollable content */}
        <div className="flex items-center border-y-4 p-6 border-blue-400">
          {/* Left button with icon */}
          <button onClick={scrollLeft} className="bg-blue-800 rounded-full text-white mr-2 hover:bg-blue-400">
            <ArrowLeftCircleIcon className="h-10 w-10" />
          </button>

          {/* Scrollable container */}
          <div
            className='flex space-x-4 overflow-x-auto flex-grow w-full scrollbar-hidden'
            ref={scrollRef}
          >
            {projectData.map((card) => (
              <div 
                key={card.id} 
                className='bg-white rounded-lg shadow-md w-72 p-4 flex-shrink-0 
                sm:w-64 md:w-56 lg:w-72 xl:w-80' // Responsive widths
              >
                <img 
                  src={card.project_image} 
                  alt={card.project_Name} 
                  className='w-full h-32 object-cover rounded-md mb-4'
                />
                <h2 className='text-xl font-semibold mb-2'>{card.project_Name}</h2>
                <p className='text-sm text-gray-500 mb-1'>Tools: {card.project_tool}</p>
                <p>{card.content}</p>
                <a href={card.url} className="flex items-center justify-center bg-blue-600 text-white rounded-full py-2 mt-2">
                  View on GitHub <GlobeAsiaAustraliaIcon className="ml-2 h-6 w-6" /> </a>
              </div>
            ))}
          </div>

          {/* Right button with icon */}
          <button onClick={scrollRight} className="bg-blue-800 rounded-full text-white ml-2 hover:bg-blue-400">
            <ArrowRightCircleIcon className="h-10 w-10" />
          </button>
        </div>
      </div>

      {/* Custom styles for hiding the scrollbar */}
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }
        .scrollbar-hidden {
          -ms-overflow-style: none; /* Internet Explorer and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default Project;
