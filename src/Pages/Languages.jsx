import React from 'react'
import './language.css'
import { Link } from 'react-router-dom';


function Languages() {
  return (
    <div className='mt-16 ms-16'>
      <br />
      <h1 className='ms-5 text-white text-center'><u>LANGUAGES</u></h1>

      <div className="flex justify-center justify-center mt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-40">
          <div>
          <Link to="/eng"> <div className="lngs bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center "><h1 className=' text-black inline-block mr-2'>ENGLISH</h1> </div></Link>
          </div>
          <div>
          <Link to="/hin"><div className="lngs1 bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center "><h1 className=' text-black inline-block mr-2'>HINDI</h1></div></Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-40">
          <Link to="/tam">  <div className="lngs2 bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center"><h1 className=' text-black inline-block mr-2i'>TAMIL</h1></div></Link>
          <Link to="/tel"> <div className="lngs3 bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center"><h1 className=' text-black inline-block mr-2'>TELUNGU</h1></div></Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-40">
          <Link to="/kan"> <div className="lngs4 bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center"><h1 className=' text-black inline-block mr-2'>KANNADA</h1></div></Link>
          <Link to="/mal"> <div className="lngs5 bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center"><h1 className=' text-black inline-block mr-2'>MALAYALAM</h1></div></Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-40">
          <Link to="/pan"><div className="lngs6 bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center"><h1 className=' text-black inline-block mr-2'>PUNJABI</h1></div></Link>
          <Link to="/spa"><div className="lngs7 bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center"><h1 className=' text-black inline-block mr-2'>SPANISH</h1></div></Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5  ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-40">
          <Link to="/kor"> <div className="lngs8 bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center"><h1 className=' text-black inline-block mr-2'>KOREAN</h1></div></Link>
          <Link to="/ara"><div className="lngs9 bg-gray-200 p-4 text-center rounded-lg w-250 flex items-center justify-center"><h1 className=' text-black inline-block mr-2'>ARABIC</h1></div></Link>
        </div>
      </div>

    </div>
  )
}

export default Languages