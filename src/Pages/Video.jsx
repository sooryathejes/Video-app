import React from 'react';

const Video = () => {
  const handleLikeClick = () => {
    console.log('Like button clicked');
  };


  return (
    <div className="player mt-24 ms-24 w-full">
      <div className="w-full md:w-3/4 lg:w-3/4 ">
        <video controls className="w-full">
          Your browser does not support the video tag.
        </video>
        <div className="like flex justify-start  me-24 mt-4">
          <button
            className="flex justify-center bg-red-700 w-16 h-8 rounded outline-none cursor-pointer"
            onClick={handleLikeClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6   mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
        <h1 className=' flex justify-top'>Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
        <h3 className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a placeat veritatis alias maiores aliquam laborum? Quidem, corrupti et voluptate iste deserunt placeat voluptatum ad.</h3>
      </div>

    </div>
  );
};

export default Video;
