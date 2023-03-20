import React from 'react';
import { useOutletContext } from 'react-router-dom';

const VansDetails = () => {
    const { hostVanDetails } = useOutletContext()
    return (
        <div className='px-14 py-5 bg-[#fffdfb] space-y-2'>
            <h3><span className='font-bold'>Name:</span>  {hostVanDetails[0].name}</h3>
            <h3><span className='font-bold'>Category:</span> {hostVanDetails[0].type}</h3>
            <h3><span className='font-bold'>Description:</span> {hostVanDetails[0].description}</h3>
            <h3><span className='font-bold'>Visibility:</span> Public</h3>
        </div>
    );
}

export default VansDetails;
