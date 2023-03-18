import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getVansData } from '../redux-store/reducers/vansReducer';
import Loading from './Loading';

const Vans = () => {

    const dispatch = useDispatch();
    const vansData = useSelector((state) => state.vansData.vans)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('api/vans')
            .then(response => response.json())
            .then(data => {
                console.log(data.vans)
                dispatch(getVansData(data.vans))
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className='vans m-5'>
            <div className={`grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 ${isLoading ? 'animate-pulse' : ''}`}>
                {vansData.map(item => <div className="bg-white shadow-lg rounded-lg overflow-hidden" key={item.id}>
                    <img className="w-full" src={item.imageUrl} alt={item.name} />
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-gray-900 font-bold text-2xl ">{item.name}</h2>
                            <p>
                                <p className="text-gray-700 font-bold">${item.price}</p>
                                <span className="text-[#161616] text-sm">/day</span>
                            </p>

                        </div>
                        <button className={`${item.type === 'simple' ? 'bg-[#E17654]' : item.type === 'rugged' ? 'bg-[#115E59]' : 'bg-[#161616]'} text-white font-bold py-2 px-4 rounded mt-4`}>{item.type}</button>

                    </div>
                </div>)}
            </div>
            {isLoading && <Loading width={100}/>}
        </div>
    );
}

export default Vans;
