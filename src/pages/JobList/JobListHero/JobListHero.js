import React from 'react';
const jobHeroImg = 'https://i.ibb.co/jJXjmZD/job-List-Hero.png';
const JobListHero = () => {
  return (
    <div>
      <div className='primary-width flex lg:flex-row flex-col-reverse items-center'>
        <div className='lg:w-1/2'>
          <h1 className='text-[#1F2131] mb-14 text-5xl font-semibold font-poppins leading-[70px]'>Find your dream jobs through <span className='primary-color'>Ziro</span> easily</h1>
          <div>
            <div className='flex items-center slidCardShadow justify-between p-1 rounded-full'>
              <input type="search" placeholder='Search here...' className='px-4 w-[70%] rounded-full py-1 outline-none' />
              <button className='primary-colorbg text-[18px] text-white px-6 py-2 rounded-full'>Search Job</button>
            </div>
          </div>
          <div className='flex flex-wrap gap-5 mt-10'>
            <p className='border inline-block px-4 py-2 rounded-full font-[500]'>Web Dev</p>
            <p className='border inline-block px-4 py-2 rounded-full font-[500]'>Mobile Dev</p>
            <p className='border inline-block px-4 py-2 rounded-full font-[500]'>Design</p>
            <p className='border inline-block px-4 py-2 rounded-full font-[500]'>Writing</p>
            <p className='border inline-block px-4 py-2 rounded-full font-[500]'>Admin Support</p>
            <p className='border inline-block px-4 py-2 rounded-full font-[500]'>Customer Service</p>
            <p className='border inline-block px-4 py-2 rounded-full font-[500]'>Marketing</p>
            <p className='border inline-block px-4 py-2 rounded-full font-[500]'>Accounting</p>
            <p className='border inline-block px-4 py-2 rounded-full font-[500] primary-color border-[#5F4BDB]'>View all categories</p>
          </div>
        </div>
        <div>
          <img className='' src={jobHeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JobListHero;