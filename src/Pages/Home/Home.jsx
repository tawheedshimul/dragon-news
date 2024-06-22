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
            <Header />
            <BreakingNews />
            <div className='sticky top-0 border-b'>
                <Navbar />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-'>
                <div className=''>
                    <LeftSideNav />
                </div>
                <div className='md:col-span-2 border-x border-b'>
                    {news.slice(0, visibleCount).map(aNews => (
                        <NewsCard key={aNews._id} news={aNews} />
                    ))}
                    {visibleCount < news.length ? (
                        <button onClick={handleShowMore} className="bg-red-500 text-white p-2 m-4 w-full mx-auto rounded">
                            Show More
                        </button>
                    ) : (
                        <p className=" mt-4 w-full bg-red-500 mx-auto text-white p-2">No more stories... <ImCrying/> </p>
                    )}
                </div>
                <div className=''>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;
