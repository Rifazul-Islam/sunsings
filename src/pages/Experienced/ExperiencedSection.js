import React, { useEffect, useState } from 'react';
import ExperiencedCard from './ExperiencedCard';

const ExperiencedSection = () => {
   
    const [experienes,setExperienes] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:5000/experiences')
      .then(res=> res.json())
      .then(data => setExperienes(data));

    },[])

    return (
        <div className='my-7'>

                <h2> users : {experienes.length}  </h2> 
            <h2 className='text-blue-500 text-5xl font-bold mb-7 mt-14'> Experienced Jobs</h2>
          
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                     experienes.map(experiene => 
                     <ExperiencedCard
                     key={experiene.id}
                     experiene={experiene}
                     >

                     </ExperiencedCard>
                     )

                    
                }
            </div>
           
            
       
        </div>
    );
};

export default ExperiencedSection;