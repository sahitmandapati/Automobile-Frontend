import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const HostNavigation = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div>
            <nav className="host-nav px-10 py-5 bg-[#fffdfb]">
                <ul className='flex text-[#4D4D4D] font-semibold space-x-4'>
                    <li><Link className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath == '/host' ? 'text-black underline' : ''}`} to='/host'>Dashboard</Link> </li>
                    <li><Link className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath == '/host/income' ? 'text-black underline' : ''}`} to='/host/income'>Income</Link> </li>
                    <li><Link className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath.startsWith('/host/vans') ? 'text-black underline' : ''}`} to='/host/vans'>Vans</Link> </li>
                    <li><Link className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath == '/host/reviews' ? 'text-black underline' : ''}`} to='/host/reviews'>Reviews</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default HostNavigation;
