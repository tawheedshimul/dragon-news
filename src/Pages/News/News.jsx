import React from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {
    const { id } = useParams()
    return (
        <div>
            <Header />
            <div className='sticky top-0'>
            <Navbar />
            </div>
            <div className="grid md:grid-cols-4">
                <div className='col-span-3'>
                    <h2 className="text-4xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>

        </div>
    );
};

export default News;