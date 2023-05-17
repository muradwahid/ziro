import React from 'react';

const HomePricingPlan = () => {
  return (
    <div className='bg-[#fdfdfd] mt-28'>
      <div className='w-[80%] mx-auto text-color pt-16 pb-8'>
        <h2 className='text-color text-[35px] text-center font-semibold'>Pricing Plan</h2>
        <div className='w-[750px] mx-auto text-center leading-6 mt-5'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1  2xl:gap-12 gap-8 mt-20'>
          <div className='slidCardShadow cardStyleHove rounded-3xl py-10 px-8'>
            <h4 className='uppercase text-2xl leading-6 font-[700] text-center mb-3'>free</h4>
            <h1 className='text-[48px] text-center font-semibold leading-[90px]'>$ 0</h1>
            <p className='text-[18px] leading-3 text-center -mt-2'>per month</p>
            <div className=' cardText my-10'>
              <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-circle-check text-[#5F4BDB] text-[20px]"></i>
                <p className=''>Lorem ipsum dolor sit ame</p>
              </div>
              <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-circle-check text-[#5F4BDB] text-[20px]"></i>
                <p className='my-4'>Consectetur adipiscing elit, sed Do</p>
              </div>
              <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-circle-check text-[#5F4BDB] text-[20px]"></i>
                <p className=''>eiusmod tempor incididunt </p>
              </div>
            </div>
            <button className='text-[#5F4BDB] font-semibold bg-[#F7F5FF] w-full cardBtn rounded-full py-4'>Learn More</button>
          </div>
          <div className='slidCardShadow cardStyleHove rounded-3xl py-10 px-8'>
            <h4 className='uppercase text-2xl leading-6 font-[700] text-center mb-3'>premium</h4>
            <h1 className='text-[48px] text-center font-semibold leading-[90px]'>$ 175</h1>
            <p className='text-[18px] leading-3 text-center -mt-2'>per month</p>
            <div className=' cardText my-10'>
              <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-circle-check text-[#5F4BDB] text-[20px]"></i>
                <p className=''>Lorem ipsum dolor sit ame</p>
              </div>
              <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-circle-check text-[#5F4BDB] text-[20px]"></i>
                <p className='my-4'>Consectetur adipiscing elit, sed Do</p>
              </div>
              <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-circle-check text-[#5F4BDB] text-[20px]"></i>
                <p className=''>eiusmod tempor incididunt </p>
              </div>
            </div>
            <button className='text-[#5F4BDB] font-semibold bg-[#F7F5FF] w-full cardBtn rounded-full py-4'>Learn More</button>
          </div>
          <div className='slidCardShadow cardStyleHove rounded-3xl py-10 px-8'>
            <h4 className='uppercase text-2xl leading-6 font-[700] text-center mb-3'>platinum</h4>
            <h1 className='text-[48px] text-center font-semibold leading-[90px]'>$ 500</h1>
            <p className='text-[18px] leading-3 text-center -mt-2'>per month</p>
            <div className=' cardText my-10'>
              <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-circle-check text-[#5F4BDB] text-[20px]"></i>
                <p className=''>Lorem ipsum dolor sit ame</p>
              </div>
              <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-circle-check text-[#5F4BDB] text-[20px]"></i>
                <p className='my-4'>Consectetur adipiscing elit, sed Do</p>
              </div>
              <div className='flex gap-3 items-center'>
                <i className="fa-solid fa-circle-check text-[#5F4BDB] text-[20px]"></i>
                <p className=''>eiusmod tempor incididunt </p>
              </div>
            </div>
            <button className='text-[#5F4BDB] font-semibold bg-[#F7F5FF] w-full cardBtn rounded-full py-4'>Learn More</button>
          </div>
        </div>
      </div>
</div>
  );
};

export default HomePricingPlan;