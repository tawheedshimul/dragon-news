import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex items-center'>
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true}>
                I can be aReact component, multiple React component or just some text
            </Marquee>
        </div>
    );
};

export default BreakingNews;