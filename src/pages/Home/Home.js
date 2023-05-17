import React from 'react';
import HomeCounter from './HomeCounter/HomeCounter';
import HomeFeature from './HomeFeature/HomeFeature';
import HomeFeturedJobs from './HomeFeturedJobs/HomeFeturedJobs';
import HomeFindJob from './HomeFindJob/HomeFindJob';
import HomeHero from './HomeHero/HomeHero';
import HomeLatestNews from './HomeLatestNews/HomeLatestNews';
import HomeModal from './HomeModal/HomeModal';
import HomePartners from './HomePartners/HomePartners';
import HomePricingPlan from './HomePricingPlan/HomePricingPlan';
import HomeTestimonial from './HomeTestimonial/HomeTestimonial';
import HomeWhyUse from './HomeWhyUse/HomeWhyUse';

const Home = () => {
  return (
    <div>
      <HomeModal/>
      <HomeHero/>
      <HomePartners />
      <HomeFindJob />
      <HomeWhyUse/>
      <HomeFeature/>
      <HomeFeturedJobs />
      <HomeTestimonial/>
      <HomeCounter />
      <HomePricingPlan />
      <HomeLatestNews/>
    </div>
  );
};

export default Home;