import React from 'react';

const Home = () => {
    return (
        <div id="main" className='h-96 text-[#ffff] content flex flex-col text-left justify-evenly'>
            <section className='w-2/4 m-auto'>
                <h1 className='font-extrabold text-4xl mb-10'>You got the travel plans, we got the travel vans.</h1>
                <p className=''>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            </section>
            <button className='w-2/4 m-auto bg-[#ff974e] hover:bg-[#FF8C38] text-white font-bold py-2 px-4 rounded'>Find your van</button>
        </div>
    );
}

export default Home;
