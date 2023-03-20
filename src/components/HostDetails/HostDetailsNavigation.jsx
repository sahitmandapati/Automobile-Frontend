import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HostDetailsNavigation = ({id}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div>
            <nav className="host-nav px-14 py-5 bg-[#fffdfb]">
                <ul className='flex text-[#4D4D4D] font-semibold space-x-4'>
                    <li><Link className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath == `/host/vans/${id}` ? 'text-black underline' : ''}`} to={`/host/vans/${id}`}>Details</Link> </li>
                    <li><Link className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath == `/host/vans/${id}/pricing` ? 'text-black underline' : ''}`} to={`/host/vans/${id}/pricing`}>Pricing</Link> </li>
                    <li><Link className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath == `/host/vans/${id}/photos` ? 'text-black underline' : ''}`} to={`/host/vans/${id}/photos`}>Photos</Link> </li>
                </ul>
            </nav>
        </div>
    );
}

export default HostDetailsNavigation;
