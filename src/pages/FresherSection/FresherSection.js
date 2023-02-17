import React from 'react';
import FresherCard from './FresherCard';

const FresherSection = () => {
    return (
        <div>
            <h1 className='text-red-500 text-5xl font-bold mb-4'>  Freshar Jobs</h1>
         <FresherCard></FresherCard>
        </div>
    );
};

export default FresherSection;