import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import { useParams, Link , useLocation, Outlet } from 'react-router-dom';
import HostDetailsNavigation from '../HostDetails/HostDetailsNavigation';

const HostVansListDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hostVanDetails, setHostVanDetails] = useState([]);
    const params = useParams()
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setHostVanDetails(data.vans)
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [])

    return (
        <div>

            {isLoading ? <Loading width={100} /> :
                <>
                    <Link
                        to='/host/vans'
                        className={` back-button px-14 inline-block font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${currentPath.startsWith('/host/vans') ? 'text-black underline' : ''}`}
                    >&larr; <span>Back to all vans</span>
                    </Link>
                    <div className='flex px-14 py-5 space-x-5'>
                        <img className='w-40' src={hostVanDetails[0].imageUrl} alt={hostVanDetails[0].name} />
                        <div className='p-5 space-y-5'>
                            <button className={`${hostVanDetails[0].type === 'simple' ? 'bg-[#E17654]' : hostVanDetails[0].type === 'rugged' ? 'bg-[#115E59]' : 'bg-[#161616]'} text-white font-bold py-2 px-4 rounded mt-4`}>{hostVanDetails[0].type}</button>
                            <div>
                                <h1 className='text-xl font-bold'>{hostVanDetails[0].name}</h1>
                                <p className="text-gray-500 font-bold">${hostVanDetails[0].price}<span className=" text-sm">/day</span></p>
                            </div>

                        </div>

                    </div>
                    <HostDetailsNavigation id = {hostVanDetails[0].id} />
                    <Outlet context={{hostVanDetails}}/>
                </>}
        </div>
    );
}

export default HostVansListDetails;
