import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header />
            <BreakingNews/>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className=''>
                    <LeftSideNav />
                </div>
                <div className='md:col-span-2'>
                    <p className="text-2xl">news coming soon</p>
                </div>
                <div className=''>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;