import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header" className='flex justify-between items-center px-10 h-28 bg-[#FFF7ED]'>
            <div className="logo text-3xl font-extrabold"><Link to='/'>#vanlife</Link></div>
            <nav className="navigation">
                <ul className='flex text-[#4D4D4D] font-semibold w-24 justify-between'>
                    <li><Link to='/about'>About</Link> </li>
                    <li><Link to='/vans'>Vans</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
