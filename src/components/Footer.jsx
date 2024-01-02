import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
        <footer className="fte bg-gray-900 text-white py-8 ml-14 p-3 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <img
            src="https://logodownload.org/wp-content/uploads/2018/09/youtube-music-logo-1.png"
            alt="Company Logo"
            className="w-10 h-10 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="mt-4">Our mission is to...</p>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold">Services</h2>
          <ul className="mt-4 space-y-2">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold">Contact Us</h2>
          <address className="mt-4">
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 789</p>
          </address>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="mt-4">
            <a href="#facebook" className="text-blue-400 hover:text-blue-600">Facebook</a>
            <a href="#twitter" className="text-twitter-400 hover:text-twitter-600 ml-4">Twitter</a>
            {/* Add more social media icons here */}
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer