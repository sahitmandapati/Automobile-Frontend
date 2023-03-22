import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getVansData } from '../redux-store/reducers/vansReducer';
import Loading from './Loading';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Vans = () => {

    const dispatch = useDispatch();
    const vansData = useSelector((state) => state.vansData.vans)
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get('type')
    const currentPath = location.pathname;

    useEffect(() => {
        fetch('api/vans')
            .then(response => response.json())
            .then(data => {
                dispatch(getVansData(data.vans))
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    const renderedVans = typeFilter ? vansData.filter(item => item.type.toLowerCase() === typeFilter) : vansData

    const vanElements = renderedVans.map(item => <Link to={`${item.id}`} key={item.id}>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full" src={item.imageUrl} alt={item.name} />
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-gray-900 font-bold text-2xl ">{item.name}</h2>
                    <div>
                        <p className="text-gray-700 font-bold">${item.price}</p>
                        <span className="text-[#161616] text-sm">/day</span>
                    </div>

                </div>
                <button className={`${item.type === 'simple' ? 'bg-[#E17654]' : item.type === 'rugged' ? 'bg-[#115E59]' : 'bg-[#161616]'} text-white font-bold py-2 px-4 rounded mt-4`}>{item.type}</button>

            </div>
        </div>
    </Link>)

    return (
        <div className='vans m-5'>
            {isLoading ? <Loading width={100} /> :
                <>
                    <h1 className='text-3xl font-bold py-5'>Explore our van options</h1>
                    <section className="filter">
                        <ul className='flex space-x-5 flex-wrap gap-10 p-5'>
                            {/* this also can be done onClick={() => setSearchParams("?type=simple") */}
                            <li><Link to='?type=simple' className={`bg-[#FFEAD0] hover:bg-[#E17654] hover:text-white py-2 px-4 rounded `}>Simple  </Link></li>
                            <li><Link to='?type=luxury' className={`bg-[#FFEAD0] hover:bg-[#115E59] hover:text-white py-2 px-4 rounded `}>Luxury</Link></li>
                            <li><Link to='?type=rugged' className={`bg-[#FFEAD0] hover:bg-[#161616] hover:text-white py-2 px-4 rounded `}>Rugged</Link></li>
                            <li><Link to='.' className={`py-2 inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath.startsWith('/vans') ? 'text-black underline' : ''}`}>
                                &larr; Clear Filters</Link></li>
                        </ul>
                    </section>
                    <div className={`grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 ${isLoading ? 'animate-pulse' : ''}`}>
                        {vanElements}
                    </div>
                </>
            }
        </div>
    );
}

export default Vans;
