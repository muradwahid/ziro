import React from 'react';
import CountUp from 'react-countup';
const bgImage = 'https://i.ibb.co/sg2Tqww/counter.png';
const HomeCounter = () => {
  return (
    <div className='primary-width rounded-xl'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className='py-12 flex justify-evenly md:flex-wrap md:flex-row flex-col'>
        <div className='text-center'>
          <h2 className='text-white text-[48px] leading-[90px] font-semibold'><CountUp enableScrollSpy start={0} end={36789}></CountUp>+</h2>
          <p className='text-white text-[18px] fonnt-[Open Sans]'>Talented Freelancer</p>
        </div>
        <div className='text-center'>
          <h2 className='text-white text-[48px] leading-[90px] font-semibold'><CountUp enableScrollSpy start={0} end={458973}></CountUp>+</h2>
          <p className='text-white text-[18px] fonnt-[Open Sans]'>Visitors</p>
        </div>
        <div className='text-center'>
          <h2 className='text-white text-[48px] leading-[90px] font-semibold'><CountUp enableScrollSpy start={0} end={56461}></CountUp>+</h2>
          <p className='text-white text-[18px] fonnt-[Open Sans]'>Contract Made</p>
        </div>
        <div className='text-center'>
          <h2 className='text-white text-[48px] leading-[90px] font-semibold'><CountUp enableScrollSpy start={0} end={852}>k</CountUp>+</h2>
          <p className='text-white text-[18px] fonnt-[Open Sans]'>Companies</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCounter;