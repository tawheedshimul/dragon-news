import React, { useState } from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';
import { ImCrying } from 'react-icons/im';

const Home = () => {
    const news = useLoaderData();
    const [visibleCount, setVisibleCount] = useState(5);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };

    return (
        <div>
            {/* <Header />
            <BreakingNews /> */}
            <div className='fixed top-0 left-0 w-full px-4 border-b'>
                <Navbar />
            </div>
            {/* <div className=''></div> */}
            <div className='lg:flex items-start justify-between'>
                <div className=' mt-24 hidden lg:block'>
                    <LeftSideNav />
                </div>
                <div className='md:col-span-2 border-x border-b mt-[70px] overflow-y-scroll overflow-hidden' style={{ height: 'calc(100vh - 70px)' }}>
                    {news.slice(0, visibleCount).map(aNews => (
                        <NewsCard key={aNews._id} news={aNews} />
                    ))}
                    {visibleCount < news.length ? (
                        <button onClick={handleShowMore} className="bg-red-500 text-white p-2 m-4 w-full mx-auto rounded">
                            Show More
                        </button>
                    ) : (
                        <p className="mt-4 w-full bg-red-500 mx-auto text-white p-2">
                            No more stories... <ImCrying />
                        </p>
                    )}
                </div>

                <div className='mt-[70px] overflow-y-scroll overflow-hidden hidden lg:block'v style={{ height: 'calc(100vh - 70px)' }}>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;
