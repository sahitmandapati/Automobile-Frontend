import React from 'react';
import { useOutletContext } from 'react-router-dom';

const VansPhotos = () => {
    const { hostVanDetails } = useOutletContext()
    return (
        <div className='px-14 py-5 bg-[#fffdfb] space-y-2'>
            <img className='w-24' src={hostVanDetails[0].imageUrl} alt={hostVanDetails[0].name} />
        </div>
    );
}

export default VansPhotos;
