import React from 'react'
import './Help.css'



function Help() {
  return (
    <div className='mt-24 ms-16'>
      

      <h1 className='text-center text-white '><b><u>HELP</u></b></h1>
      <div className='hlp flex justify-center '>
        <div className="help w-4 bg-gray-100 p-4 rounded-md mx-2">
          <b><h1 className='text-white mt-3 ms-5'>Press</h1></b>
          <p className='lorem text-white font-bold mx-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum iusto dolorum id. Magni doloribus praesentium quisquam architecto dolorem, nisi delectus, eveniet impedit dolores quis omnis officia! A aperiam odio quibusdam doloremque?
          </p>            <button className="mt-4 ms-44 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
        </div>
        <div className="help1 w-64 bg-gray-100 p-4 rounded-md mx-2">
          <b><h1 className='text-white mt-3 ms-5'>Press</h1></b>
          <p className='lorem text-white font-bold  mx-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum iusto dolorum id. Magni doloribus praesentium quisquam architecto dolorem, nisi delectus, eveniet impedit dolores quis omnis officia! A aperiam odio quibusdam doloremque?
          </p>
          
          <button className="mt-4 ms-44 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
        </div>
        <div className="help2 w-64 bg-gray-100 p-4 rounded-md mx-2">
          <b><h1 className='text-white mt-3 ms-5'>Press</h1></b>
          <p className='lorem text-white font-bold  mx-5'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum iusto dolorum id. Magni doloribus praesentium quisquam architecto dolorem, nisi delectus, eveniet impedit dolores quis omnis officia! A aperiam odio quibusdam doloremque?
          </p>
          <button className="mt-4 ms-44 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center">
            Click me
          </button>
        </div>
      </div>
    </div>

  )
}

export default Help



