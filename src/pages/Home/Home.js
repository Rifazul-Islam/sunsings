import React from 'react';
import Banner from '../Banner/Banner';
import ExperiencedSection from '../Experienced/ExperiencedSection';
import FresherSection from '../FresherSection/FresherSection';


const Home = () => {
    return (
        <div className='mt-14'>
         
         <FresherSection></FresherSection>
          <ExperiencedSection></ExperiencedSection>
        </div>
    );
};

export default Home;