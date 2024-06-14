import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <div>
            <div className='border p-2 rounded'>
                <h2 className="text-2xl">Login With</h2>
                <button className='btn btn-outline w-full mt-6'>
                    <FaGoogle />Google
                </button>
                <button className='btn btn-outline w-full mt-1'>
                    <FaGithub />Github
                </button>

                <div className=" mt-6 w-full" >
                    <h2 className="text-2xl mb-4">FInd Us On</h2>

                    <a className='flex items-center p-4 border rounded-t-lg' href="">
                        <FaFacebook className='mr-3' />Facebook
                    </a>
                    <a className='flex items-center p-4 border-x' href="">
                        <FaTwitter className='mr-3' />Twitter
                    </a>
                    <a className='flex items-center p-4 border rounded-b-lg' href="">
                        <FaInstagram className='mr-3' />Instagram
                    </a>

                </div>
            </div>

            {/* q zone  */}

            <div className="space-y-3 mt-10">
                <h2 className="text-2xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;