import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Loading from './Loading';

const VansDetails = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [vanDetails, setVanDetails] = useState([]);
    const params = useParams()

    const location = useLocation()
    const currentPath = location.pathname;
    console.log(location)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setVanDetails([data.vans])
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [])

    return (
        <div>
            <Link
                to='/vans'
                className={` p-5 back-button inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath.startsWith('/vans') ? 'text-black underline' : ''}`}
            >&larr; <span>Back to all vans</span>
            </Link>
            {isLoading ? <Loading width={100} /> : vanDetails.map(item =>
                <div className="bg-white overflow-hidden md:w-3/5 lg:w-1/3 mx-auto my-5" key={item.id}>
                    <img className="w-full max-sm:w-11/12 m-auto" src={item.imageUrl} alt={item.name} />
                    <div className="p-4 flex flex-col justify-evenly">
                        <h2 className="text-gray-900 font-bold text-2xl  m-2">{item.name}</h2>
                        <p className="text-gray-700 font-bold m-2">${item.price}<span className="text-[#161616] text-sm">/day</span></p>
                        <p className="details m-2 font-serif">{item.description}</p>
                        <button className='bg-[#FF8C38] text-white font-bold py-2 px-4 rounded m-2'>Rent this van</button>

                    </div>
                </div>)}
        </div>
    );
}

export default VansDetails;
