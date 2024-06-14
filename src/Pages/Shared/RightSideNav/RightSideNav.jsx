import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            <div className='border p-2'>
                <h2 className="text-xl text-center">Login With</h2>
                <button className='btn btn-outline w-full mt-6'>
                    <FaGoogle />Google
                </button>
                <button className='btn btn-outline w-full mt-1'>
                    <FaGithub />Github
                </button>

            </div>
        </div>
    );
};

export default RightSideNav;