import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import bgvid from '../video/bgvid.mp4';
import './register.css';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({}); 
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate the form fields
        const errorsObj = {};

        if (!username.trim()) {
            errorsObj.username = 'Username is required';
        }

        if (!email.trim()) {
            errorsObj.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errorsObj.email = 'Invalid email address';
        }

        if (!password.trim()) {
            errorsObj.password = 'Password is required';
        }

        if (password !== confirmPassword) {
            errorsObj.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errorsObj).length > 0) {
            setErrors(errorsObj);
        } else {
            setErrors({});
            console.log('Email:', email);
            console.log('Password:', password);
        }
    };

    return (

        <div className=" flex justify-center items-center h-screen bg-gray-100">
            <div className="relative">
                <video autoPlay muted loop className="fixed top-0 left-0 min-w-full min-h-full object-cover z-0">
                    <source src={bgvid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <form className="frm bg-black shadow-md rounded px-8 pt-6 pb-8  w-96" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold text-center mb-4">SignUp</h2>
                <div className="">
                    <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
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
                <div className="">
                    <label className="block text-white-700 text-sm font-bold " htmlFor="confirmPassword">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="mt-2">
                    <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
                    Confirm Password
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
               
                <div className="flex items-center justify-between mt-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        SignUp
                    </button>
                    <p className="text-sm ms-2">
                        Already have an account?{' '}
                        <br />
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>

            </form>
            
        </div>
    );
}

export default LogIn;
