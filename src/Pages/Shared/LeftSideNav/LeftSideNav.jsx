import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://server-tawheed-blog.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-xl">All Categoried</h2>

            <div className="overflow-x-auto whitespace-nowrap">
                {
                    categories.map(category => (
                        <Link to={`/category/${category.id}`} className="inline-block md:block bg-gray-100 p-2" key={category.id}>
                            <div className='bg-gray-700 text-white p-1 rounded  hover:bg-gray-900'>
                                {category.name}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftSideNav;