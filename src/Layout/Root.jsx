import React from 'react'
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>
            <Outlet />
        </div>
    )
}

export default Root;