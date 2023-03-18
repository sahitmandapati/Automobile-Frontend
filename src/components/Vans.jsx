import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getVansData } from '../redux-store/reducers/vansReducer';

const Vans = () => {

    const dispatch = useDispatch();
    const vansData = useSelector((state) => state.vansData.vans)

    useEffect(() => {
        fetch('api/vans')
            .then(response => response.json())
            .then(data => {
                console.log(data.vans)
                dispatch(getVansData(data.vans))
            })
            .catch(error => console.error(error));


    }, []);

    return (
        <div className='vans m-5'>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4">
                {vansData.map(item => <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="w-full" src={item.imageUrl} alt={item.name} />
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-gray-900 font-bold text-2xl ">{item.name}</h2>
                            <p>
                                <p className="text-gray-700 font-bold">${item.price}</p>
                                <span className="text-[#161616] text-sm">/day</span>
                            </p>

                        </div>
                        <button className={`${ item.type === 'simple' ? 'bg-[#E17654]' : item.type === 'rugged' ? 'bg-[#115E59]' : 'bg-[#161616]' } text-white font-bold py-2 px-4 rounded mt-4`}>{item.type}</button>
                        
                    </div>
                </div>)}



            </div>

        </div>
    );
}

export default Vans;
