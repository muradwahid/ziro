import React from 'react';
import HomePartners from '../../Home/HomePartners/HomePartners';
import JobListHero from '../JobListHero/JobListHero';
import JobListShowJobs from '../JobListShowJobs/JobListShowJobs';
import JobsEvents from '../JobsEvents/JobsEvents';

const JobList = () => {
  return (
    <div>
      <JobListHero />
      <JobListShowJobs />
      <JobsEvents />
      <HomePartners/>
    </div>
  );
};

export default JobList;