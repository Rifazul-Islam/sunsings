import React, { useEffect, useState } from 'react';
import FresherCard from './FresherCard';

const FresherSection = () => {
    
    const [freshers,setFreshers] = useState([]);

    useEffect(()=>{
      fetch(' https://sunsings-sever-side.vercel.app/freshers')
      .then(res=> res.json())
      .then(data => setFreshers(data));

    },[])

    
    return (
        <div>
 
            <h1 className='text-red-500 text-5xl font-bold mt-14 mb-4'>  Freshar Jobs</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                     freshers.map(fresher => <FresherCard
                        key={fresher.id}
                        fresher={fresher}
                     >
                     </FresherCard> )

                    
                }
            </div>
        </div>
    );
};

export default FresherSection;