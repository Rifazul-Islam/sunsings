import React from 'react';
import { Link } from 'react-router-dom';

const ExperiencedCard = ({experiene}) => {
  
  const {description,name,location,company} = experiene
    return (
      <div className="card  bg-blue-300 shadow-xl">
      <div className="card-body text-justify">
      <p className='p-0'><b>Job description</b> :{description}.....</p>
       <h2 className=""> <b className='text-1xl'>Job position name</b>: {name} </h2>
       <h2 className='text-2x'> <b>Job Location</b> : {location} </h2>
        <h2 className='text-2x'> <b>Company Name</b>: {company} </h2>
       <div className="card-actions justify-end">
       <Link to='/contact'><button className="btn btn-primary">Apply Now</button> </Link>
        </div>
      </div>
   
   </div>
    );
};

export default ExperiencedCard;