import React from 'react'
import './SideBar.css';
import { Link } from 'react-router-dom';




function SideBar() {

  return (
    <div className=" min-h-screen bg-gray-100 ">
      <div className="sidebar min-h-screen w-[4.35rem] overflow-hidden  hover:w-56 hover:bg-#140D19  hover:shadow-lg" >
        <div className="flex items-center mt-3  space-x-4">
          <Link to="/">  <img
            src="https://logodownload.org/wp-content/uploads/2018/09/youtube-music-logo-1.png"
            alt="Logo"
            className="w-10 h-10 rounded-full m-2"
          /></Link>
        </div>
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div> 

            <ul className="mt-0 space-y-2 tracking-wide me-3 text-white">
              <Link to="/"><li className="min-w-max">
                <a href="#home" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                  <svg fill="#FCFCFC" width="25px" height="25px" viewBox="-4.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>home</title> <path d="M19.469 12.594l3.625 3.313c0.438 0.406 0.313 0.719-0.281 0.719h-2.719v8.656c0 0.594-0.5 1.125-1.094 1.125h-4.719v-6.063c0-0.594-0.531-1.125-1.125-1.125h-2.969c-0.594 0-1.125 0.531-1.125 1.125v6.063h-4.719c-0.594 0-1.125-0.531-1.125-1.125v-8.656h-2.688c-0.594 0-0.719-0.313-0.281-0.719l10.594-9.625c0.438-0.406 1.188-0.406 1.656 0l2.406 2.156v-1.719c0-0.594 0.531-1.125 1.125-1.125h2.344c0.594 0 1.094 0.531 1.094 1.125v5.875z"></path> </g></svg>
                  <span className="group-hover:text-cyan-700">Home</span>
                </a>
              </li></Link>
              <Link to="/trending"><li className="min-w-max">
                <a href="#trending" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white-600">
                  <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#FCFCFC" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" fill="#000000"></path></g></svg>
                  <span className="group-hover:text-white-700">Trending</span>

                </a>
              </li> </Link>


              <Link to="/music"> <li className="min-w-max">
                <a href="#music" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white-600">
                  <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#FCFCFC" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.75 12.508L21.25 9.108V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.5 22.75 17.5 22.75 17.5L22.75 7.94625C22.75 6.80342 22.75 5.84496 22.6696 5.08131C22.6582 4.97339 22.6448 4.86609 22.63 4.76597C22.5525 4.24426 22.4156 3.75757 22.1514 3.35115C22.0193 3.14794 21.8553 2.96481 21.6511 2.80739C21.6128 2.77788 21.573 2.74927 21.5319 2.7216L21.5236 2.71608C20.8164 2.2454 20.0213 2.27906 19.2023 2.48777C18.4102 2.68961 17.4282 3.10065 16.224 3.60469L14.13 4.48115C13.5655 4.71737 13.0873 4.91751 12.712 5.1248C12.3126 5.34535 11.9686 5.60548 11.7106 5.99311C11.4527 6.38075 11.3455 6.7985 11.2963 7.25204C11.25 7.67831 11.25 8.19671 11.25 8.80858V16.7609C10.7448 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.5 12.75 19.5 12.75 19.5L12.75 12.508Z" fill="#1C274C"></path> <path d="M7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2V7.76091C5.74485 7.4375 5.14432 7.25 4.5 7.25C2.70507 7.25 1.25 8.70507 1.25 10.5C1.25 12.2949 2.70507 13.75 4.5 13.75C6.29493 13.75 7.75 12.2949 7.75 10.5V5.0045C8.44852 5.50913 9.27955 5.75 10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.54565 4.25 8.9663 4.07389 8.51159 3.69837C8.0784 3.34061 7.75 2.79785 7.75 2Z" fill="#1C274C"></path> </g></svg>
                  <span className="group-hover:text-white-700">Music</span>
                </a>
              </li></Link>


              
              <Link to="/categories"> <li className="min-w-max ">
                <a href="#categories" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white-600">
                  <svg width="25px" height="25px" viewBox="-2 -2 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2" y="-2" width="24.00" height="24.00" rx="12" fill="#FCFCFC" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M5 7h13v10H2V4h7l2 2H4v9h1V7z"></path> </g> </g></svg>
                  <span className="group-hover:text-white-700">Categories</span>
                </a>
              </li></Link>
              <Link to="/language"><li className="min-w-max">
                <a href="#languages" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#FCFCFC" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.3599999999999994"></g><g id="SVGRepo_iconCarrier"> <path d="M5 8l6 6"></path> <path d="M4 14l6-6 2-3"></path> <path d="M2 5h12"></path> <path d="M7 2h1"></path> <path d="M22 22l-5-10-5 10"></path> <path d="M14 18h6"></path> </g></svg>
                  <span className="group-hover:text-white-700">Languages</span>
                </a>
              </li></Link>
              
             

              <Link to="/addvideos"> <li className="min-w-max">
                <a href="#addvideos" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-white-600">
                  <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#FCFCFCFC" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>                  <span className="group-hover:text-white-700">Add Videos</span>
                </a>
              </li></Link>

              <Link to="/help">
                <li className="min-w-max">
                  <a href="#help" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white-600">
                    <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#FCFCFC" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5 8.67709C10.8665 8.26188 11.4027 8 12 8C13.1046 8 14 8.89543 14 10C14 10.9337 13.3601 11.718 12.4949 11.9383C12.2273 12.0064 12 12.2239 12 12.5V12.5V13" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 16H12.01" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <span className="group-hover:text-white-700">Help</span>
                  </a>
                </li>
              </Link>




              <Link to="/feedback"><li className="min-w-max">
                <a href="#feedback" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-white-600">
                  <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#FCFCFC" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM11 13v2h2v-2h-2zm0-6v5h2V7h-2z"></path> </g> </g></svg>
                  <span className="group-hover:text-white-700">Feedback</span>
                </a>
              </li></Link>
            </ul>
          </div>
          <Link to="/settings"> <div className="w-max mb-10 text-white-600">
            <a href="#settings" className="group flex items-center space-x-4 rounded-md px-4 py-3 ">
              <svg width="25px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#FCFCFC" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="#1C274C"></path> </g></svg>
              <span className="group-hover:text-grey-700">Settings</span>
            </a>
          </div></Link>
        </div>
      </div>
    </div >
  )
}

export default SideBar;