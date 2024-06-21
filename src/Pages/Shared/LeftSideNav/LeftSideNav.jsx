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

            {
                categories.map(category => <Link to={`/category/${category.id}`} className='block hover:underline p-2' key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;