import React from 'react';

const FresherCard = () => {
    return (
  <div className='mx-4  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4'>
   <div className="card  bg-blue-300 shadow-xl">
   <div className="card-body text-justify">
   <p><b >Job description</b>: This discipline has become more complex in recent years,
    with end users now accessing websites on screens.....</p>
    <h2 className=""> <b className='text-1xl'>Job position name</b> : Front-end web developer</h2>
    <h2 className='text-2x'> <b>Job Location</b> : Dhaka</h2>
     <h2 className='text-2x'> <b>Company Name</b>:Dhansiri Communication Limited </h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Apply Now</button>
     </div>
   </div>

</div>



<div className="card  bg-blue-300 shadow-xl">
   <div className="card-body text-justify">
   <p><b>Job description</b>: Data scientists collect, analyze and interpret large amounts of data using advanced analytics technologies...</p>
    <h2> <b className='text-1xl'>Job position name</b>: Data scientist</h2>
    <h2 className='text-2x'> <b>Job Location</b> : india</h2>
     <h2 className='text-2x'> <b>Company Name</b> : Leads4needs </h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Apply Now</button>
     </div>
   </div>
</div> 



<div className="card  bg-blue-300 shadow-xl">
   <div className="card-body text-justify">
    <h2> <b className='text-1xl'>Job position name</b>: Artificial intelligence specialist -- also known as machine learning engineer</h2>
     <h2 className='text-2x'> <b>Job Location</b> :india</h2>
     <h2 className='text-2x'> <b>Company Name</b> : payrasoft </h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Apply Now</button>
     </div>
   </div>
</div> 

        </div>
    );
};

export default FresherCard;