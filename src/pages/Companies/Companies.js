import React from 'react';

const Companies = () => {
    return (
      <div>
        <h2 className='text-green-500 text-5xl font-bold mb-7 mt-14'> IT Companies</h2>
        <div className='mx-4  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
     <div className="card  bg-blue-300 shadow-xl">
   <div className="card-body text-justify">
     <h2 className='text-2x'> <b>Company Name</b>:Grameenphone IT</h2>
     <p className='p-0'><b >Job description</b>: Grameenphone IT is the technology arm of Grameenphone, the largest mobile phone operator in Bangladesh. The company provides a wide range of IT
      services, including software development, system integration, and network services.....</p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">More</button>
     </div>
   </div>

</div>



<div className="card  bg-blue-300 shadow-xl">
   <div className="card-body text-justify">
     <h2 className='text-2x'> <b>Company Name</b>:DataSoft Systems Bangladesh Limited</h2>
     <p className='p-0'><b >Job description</b>: DataSoft is a leading software company in Bangladesh that provides a wide range of IT services, including software 
     development, digital transformation, and AI solutions.....</p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">More</button>
     </div>
   </div>

</div>


<div className="card  bg-blue-300 shadow-xl">
   <div className="card-body text-justify">
     <h2 className='text-2x'> <b>Company Name</b>:LEADS Corporation Limited</h2>
     <p className='p-0'><b >Job description</b>: LEADS is an IT consulting and software development company that provides a wide range of services, including IT consulting,
      custom software development, and mobile app development. .....</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">More</button>
     </div>
   </div>

</div>

        </div>
      </div>
    );
};

export default Companies;