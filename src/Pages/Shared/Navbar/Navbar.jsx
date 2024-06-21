

import React, { useContext, useState } from 'react';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

        const { user, logOut } = useContext(AuthContext);

         console.log(user)

         const handleSignOut = () => {
             logOut()
                 .then()
                 .catch()
         }


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems =
        <>
            <li><Link to='/' className="text-gray-800 hover:text-gray-600 hover:border-b-2 border-red-500">Home</Link></li>
            <li><Link to='/' className="text-gray-800 hover:text-gray-600 hover:border-b-2 border-red-500">About</Link></li>
            <li><Link to='/' className="text-gray-800 hover:text-gray-600 hover:border-b-2 border-red-500">Services</Link></li>
            <li><Link to='/' className="text-gray-800 hover:text-gray-600 hover:border-b-2 border-red-500">Blog</Link></li>
            <li><Link to='/' className="text-gray-800 hover:text-gray-600 hover:border-b-2 border-red-500">Contact</Link></li>

        </>

    return (
        <div className="bg-white w-full">
            <div className="mx-auto px-4 py-4 flex justify-between items-center">
                {/* <Link className="flex items-center">
                    Home
                </Link> */}
                {
                     user ?

                         <div>
                             {user.email}
                             <button onClick={handleSignOut} className='btn'>SignOut</button></div>
                         :
                         <Link to='/login' className='btn'>Login</Link>
                 }
                <ul className="hidden md:flex space-x-6">
                    {navItems}
                </ul>
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-gray-800 hover:text-gray-600"><FaShoppingCart size={20} /></a>
                    <a href="#" className="text-gray-800 hover:text-gray-600"><FaSearch size={20} /></a>
                    <a href="#" className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">Appointment</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        {navItems}
                        <li><a href="#" className="text-gray-800 hover:text-gray-600"><FaShoppingCart size={20} /></a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600"><FaSearch size={20} /></a></li>
                        <li><a href="#" className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">Appointment</a></li>
                    </ul>
                </div>
            )}

        </div>
    );
};

export default NavBar;
