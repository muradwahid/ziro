import React from 'react';
import HomePartners from '../Home/HomePartners/HomePartners';
import FreelancerPeopleCard from './FreelancerPeopleCard/FreelancerPeopleCard';
import FreelancerShowPeople from './FreelancerShowPeople/FreelancerShowPeople';
import FrelancerListHero from './FrelancerListHero/FrelancerListHero';

const FreelancerList = () => {
  return (
    <div>
      <FrelancerListHero />
      <FreelancerShowPeople />
      <FreelancerPeopleCard />
      <HomePartners/>
    </div>
  );
};

export default FreelancerList;