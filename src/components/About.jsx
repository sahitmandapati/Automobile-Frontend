import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about bg-[#FFF7ED]'>
            <div className="aboutImage h-60"></div>
            <section className="heading w-10/12 mx-auto flex items-center font-extrabold text-4xl my-5">
                Don't squeeze in a sedan when you could relax in a van.
            </section>
            <section className="para w-10/12 mx-auto my-5 font-serif">
                <p className='my-2'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)</p>

                <p className='my-2'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </section>
            <section className="highlight px-10 py-14 bg-[#FFCC8D] w-10/12 m-auto rounded my-5">
                <h1 className='font-bold text-2xl my-2'>Your destination is waiting.
                    Your van is ready.</h1>
                <button className='bg-[#161616] hover:bg-[#232323] text-white font-bold py-2 px-4 rounded my-2'><Link to='/vans'>Explore our vans</Link></button>
            </section>
        </div>
    );
}

export default About;
