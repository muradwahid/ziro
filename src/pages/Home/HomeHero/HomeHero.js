import React from 'react';
const heroBg = 'https://i.ibb.co/YfXB1F7/hero-Image.png';
const HomeHero = () => {
  return (
    <div className='w-full h-[100vh]' style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat'}}>
      <div className="primary-width flex items-center">
        <div className='lg:w-[40%] w-full mt-28'>
          <h2 className='text-5xl font-semibold font-poppins leading-[65px]'>Find out <span className='text-[#5F4BDB]'>talented freelancer</span> with better review faster</h2>
          <p className='text-[#11142D] leading-7 cardText text-[18px] mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className=' flex gap-20 mt-8'>
            <button className='primary-colorbg text-[18px] text-white font-[500] font-poppins px-6 py-2 rounded-full hero-slider-shadow'>Discover Now</button>
            <label htmlFor="my-modal" className="">
              <div className='flex items-center gap-3'>
                <i className="fa-regular fa-circle-play text-[20px] primary-color p-4 rounded-full border hero-slider-shadow cursor-pointer"></i>
                <span className='text-[18px] font-semibold text-color'>Watch Demo</span>
              </div>
            </label>

          </div>
          <div className='mt-7 '>
            <span className='bg-[#D7D0FB] h-[6px] w-[30px] rounded-full inline-block  mr-2'></span>
            <span className='bg-[#D7D0FB] h-[6px] w-[30px] rounded-full inline-block mr-2'></span>
            <span className='primary-colorbg h-[6px] w-[50px] rounded-full inline-block mr-2'></span>
            <span className='bg-[#D7D0FB] h-[6px] w-[30px] rounded-full inline-block mr-2'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;