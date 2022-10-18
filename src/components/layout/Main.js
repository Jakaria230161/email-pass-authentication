import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h3 className='text-white bg-warning text-center my-4 mx-auto py-2 w-75 rounded fs-2 fw-semibold'>Simple Email and Password Auth</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;