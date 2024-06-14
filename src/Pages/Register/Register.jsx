import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

function Register() {

    const { createUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, photo, name, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className='fixed top-0 w-full'>
                <Navbar />
            </div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                type="text"
                                id="name"
                                name='name'
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="photo-url">
                                Photo URL
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                type="text"
                                id="photo-url"
                                name='photo'
                                placeholder="Enter your photo URL"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                type="password"
                                id="password"
                                name='password'
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-6 flex items-center">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                id="terms"
                            />
                            <label className="text-gray-700" htmlFor="terms">
                                Accept <span className="text-black font-semibold">Term & Conditions</span>
                            </label>
                        </div>
                        <button
                            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
