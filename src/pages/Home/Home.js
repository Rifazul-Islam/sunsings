import React from 'react';
import Banner from '../Banner/Banner';
import Companies from '../Companies/Companies';
import ExperiencedSection from '../Experienced/ExperiencedSection';
import FresherSection from '../FresherSection/FresherSection';


const Home = () => {
    return (
        <div className='mt-2 mx-4'>
         
         <Banner></Banner>
         <FresherSection></FresherSection>
          <ExperiencedSection></ExperiencedSection>
          <Companies></Companies>
        </div>
    );
};

export default Home;