import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div id="header" className='flex justify-between items-center px-5 md:px-10 h-28 bg-[#FFF7ED]'>
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
                    <li>
                        <Link to='/auth' className={`inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath.startsWith('/auth') ? 'text-black underline' : ''}`}><svg width="20"   viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.12104 15.8047C5.15267 14.6564 7.4998 14.001 10 14.001C12.5002 14.001 14.8473 14.6564 16.879 15.8047M13 8.00098C13 9.65783 11.6569 11.001 10 11.001C8.34315 11.001 7 9.65783 7 8.00098C7 6.34412 8.34315 5.00098 10 5.00098C11.6569 5.00098 13 6.34412 13 8.00098ZM19 10.001C19 14.9715 14.9706 19.001 10 19.001C5.02944 19.001 1 14.9715 1 10.001C1 5.03041 5.02944 1.00098 10 1.00098C14.9706 1.00098 19 5.03041 19 10.001Z" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;
