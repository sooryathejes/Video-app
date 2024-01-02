import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <header className="header bg-gray-500 p-4 flex items-center justify-between ms-12">
      <div className="relative w-64"style={{marginLeft:'800px'}}>
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-8 pr-3 py-2 rounded-full bg-transparent border-2 border-white-700 focus:border-blue-500 focus:outline-none"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M11.982 13.716a6.5 6.5 0 111.061-1.06l3.405 3.404a1 1 0 11-1.416 1.415l-3.05-3.05zm-.684-5.067a4.5 4.5 0 11-7.17-5.606A1 1 0 016.11 3.89a6.5 6.5 0 108.187 8.187 1 1 0 11-1.413-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
        <Link to="/play"> <p>play</p></Link>

        <div className="flex items-center space-x-4">
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/profile">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046400.png"
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
          </Link>

          <Link to="/login">
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline me-10">
              SignIn/SignUp
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
