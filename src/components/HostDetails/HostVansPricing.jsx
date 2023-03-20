import React from 'react';
import { useOutletContext } from 'react-router-dom';

const VansPricing = () => {
    const { hostVanDetails } = useOutletContext()
    return (
        <div className='px-14 py-5 bg-[#fffdfb] space-y-2'>
            <p className="text-2xl font-bold">${hostVanDetails[0].price}<span className=" text-sm">/day</span></p>
        </div>
    );
}

export default VansPricing;
