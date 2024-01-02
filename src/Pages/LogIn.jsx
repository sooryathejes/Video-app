import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import bgvid1 from '../video/bgvid1.mp4'


function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-grey-100">
      <div className="relative">
                <video autoPlay muted loop className="fixed top-0 left-0 min-w-full min-h-full object-cover z-0">
                    <source src={bgvid1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
      <form className="frm bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
        <div className="mb-4">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
           <p className="text-sm">
            New to the site?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
