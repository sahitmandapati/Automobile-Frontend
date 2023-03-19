import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div id="header" className='flex justify-between items-center px-10 h-28 bg-[#FFF7ED]'>
            <div className="logo text-3xl font-extrabold"><Link to='/'>#vanlife</Link></div>
            <nav className="navigation">
                <ul className="flex text-[#4D4D4D] font-semibold space-x-4">
                    <li>
                        <Link to='/host' className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath.startsWith('/host') ? 'text-black underline' : ''}`}>Host</Link>
                    </li>
                    <li>
                        <Link to='/about' className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath.startsWith('/about') ? 'text-black underline' : ''}`}>About</Link>
                    </li>
                    <li>
                        <Link to='/vans' className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath.startsWith('/vans') ? 'text-black underline' : ''}`}>Vans</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;
