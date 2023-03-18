import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="main" className='text-[#ffff] content flex flex-col text-left justify-evenly py-10 lg:h-96'>
            <section className='w-3/4 m-auto py-10'>
                <h1 className='font-extrabold text-4xl mb-10'>You got the travel plans, we got the travel vans.</h1>
                <p className=''>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            </section>
            <button className='w-3/4 m-auto bg-[#ff974e] hover:bg-[#FF8C38] text-white font-bold py-2 px-4 rounded'><Link to='/vans'>Find your van</Link></button>
        </div>
    );
}

export default Home;
