import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, image_url, total_view, details, _id, author } = news;
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-3">
            <div className="px-6 py-4">
                <div className="flex items-center">
                    <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={author.img}
                        alt="Avatar"
                    />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{author.name}</p>
                        <p className="text-gray-600">{author.published_date}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <h1 className="text-xl font-bold text-gray-900">
                        {title}
                    </h1>
                    <img className='cover w-full' src={image_url} alt="" />
                    <p className="mt-2 text-gray-600">
                        {
                            details.length > 200 ? <p> {details.slice(0, 200)}<Link to={`/news/${_id}`} className='text-blue-600 hover:underline'>...Read More</Link></p> : <p>{details}</p>
                        }
                    </p>
                </div>
                <div className="mt-4 flex items-center">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.157 3.568a1 1 0 00.95.69h3.743c.969 0 1.371 1.24.588 1.81l-3.028 2.198a1 1 0 00-.364 1.118l1.157 3.568c.3.921-.755 1.688-1.54 1.118l-3.028-2.198a1 1 0 00-1.176 0l-3.028 2.198c-.785.57-1.84-.197-1.54-1.118l1.157-3.568a1 1 0 00-.364-1.118L2.91 8.995c-.783-.57-.38-1.81.588-1.81h3.743a1 1 0 00.95-.69l1.157-3.568z" />
                        </svg>
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.157 3.568a1 1 0 00.95.69h3.743c.969 0 1.371 1.24.588 1.81l-3.028 2.198a1 1 0 00-.364 1.118l1.157 3.568c.3.921-.755 1.688-1.54 1.118l-3.028-2.198a1 1 0 00-1.176 0l-3.028 2.198c-.785.57-1.84-.197-1.54-1.118l1.157-3.568a1 1 0 00-.364-1.118L2.91 8.995c-.783-.57-.38-1.81.588-1.81h3.743a1 1 0 00.95-.69l1.157-3.568z" />
                        </svg>
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.157 3.568a1 1 0 00.95.69h3.743c.969 0 1.371 1.24.588 1.81l-3.028 2.198a1 1 0 00-.364 1.118l1.157 3.568c.3.921-.755 1.688-1.54 1.118l-3.028-2.198a1 1 0 00-1.176 0l-3.028 2.198c-.785.57-1.84-.197-1.54-1.118l1.157-3.568a1 1 0 00-.364-1.118L2.91 8.995c-.783-.57-.38-1.81.588-1.81h3.743a1 1 0 00.95-.69l1.157-3.568z" />
                        </svg>
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.157 3.568a1 1 0 00.95.69h3.743c.969 0 1.371 1.24.588 1.81l-3.028 2.198a1 1 0 00-.364 1.118l1.157 3.568c.3.921-.755 1.688-1.54 1.118l-3.028-2.198a1 1 0 00-1.176 0l-3.028 2.198c-.785.57-1.84-.197-1.54-1.118l1.157-3.568a1 1 0 00-.364-1.118L2.91 8.995c-.783-.57-.38-1.81.588-1.81h3.743a1 1 0 00.95-.69l1.157-3.568z" />
                        </svg>
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.157 3.568a1 1 0 00.95.69h3.743c.969 0 1.371 1.24.588 1.81l-3.028 2.198a1 1 0 00-.364 1.118l1.157 3.568c.3.921-.755 1.688-1.54 1.118l-3.028-2.198a1 1 0 00-1.176 0l-3.028 2.198c-.785.57-1.84-.197-1.54-1.118l1.157-3.568a1 1 0 00-.364-1.118L2.91 8.995c-.783-.57-.38-1.81.588-1.81h3.743a1 1 0 00.95-.69l1.157-3.568z" />
                        </svg>
                    </div>
                    <span className="ml-2 text-gray-600">4.9</span>
                    <span className="ml-4 text-gray-600">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;