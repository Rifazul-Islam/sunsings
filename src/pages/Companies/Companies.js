import React, { useEffect, useState } from 'react';
import CompaniesCard from './CompaniesCard';

const Companies = () => {

      const [companies,setCompanies]=useState([]);
      useEffect(()=>{
      
          fetch('http://localhost:5000/compnies')
          .then(res => res.json())
          .then(data => setCompanies(data) )

      } ,[])

    return (
      <div>
        <h2 className='text-green-500 text-5xl font-bold mb-7 mt-14'> IT Companies</h2>
      
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                     companies.map(companie => <CompaniesCard
                      key={companie.id}
                        companie={companie}
                     >
                     </CompaniesCard>
                       
                   
                      )

                    
                }
            </div>
      </div>
    );
};

export default Companies;