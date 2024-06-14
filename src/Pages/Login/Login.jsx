import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {


    const { logIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);


        logIn(email, password)
            .then(result => {
                console.log(result.user)
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
                <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                    <h2 className="text-2xl font-semibold text-center mb-6">Login your account</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Email address
                            </label>
                            <input
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                type="email"
                                id="email"
                                name='email'
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
                        <button
                            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        Don't Have An Account? <Link to='/register' className="text-red-500">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;