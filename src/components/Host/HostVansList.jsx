import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getVansListData } from '../../redux-store/reducers/vansReducer';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

const HostVansList = () => {

    const dispatch = useDispatch()
    const vansListData = useSelector((state) => state.vansData.vansList)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/host/vans')
            .then(response => response.json())
            .then(data => {
                dispatch(getVansListData(data.vans))
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [])


    return (
        <div className='px-10 py-20'>
            <h1 className='text-3xl font-extrabold p-5'>Your listed vans</h1>
            {
                isLoading ?
                    <Loading width={100} /> :
                    vansListData.map(item => <Link to={`${item.id}`} key={item.id}>
                        <div className='flex p-5 space-x-5' >
                            <img className='w-24' src={item.imageUrl} alt={item.name} />
                            <div>
                                <h1 className='text-xl font-bold'>{item.name}</h1>
                                <p className="text-gray-500 font-bold">${item.price}<span className=" text-sm">/day</span></p>
                            </div>

                        </div>
                    </Link>

                    )

            }

        </div>
    );
}

export default HostVansList;

