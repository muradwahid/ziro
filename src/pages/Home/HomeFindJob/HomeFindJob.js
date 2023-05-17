import React, { useState } from 'react';
const img = 'https://i.ibb.co/LR5K4Qy/righSide.png';
const HomeFindJob = () => {
  const [collaps, setCollaps] = useState(true);
  const [collaps2, setCollaps2] = useState(false);
  const [collaps3, setCollaps3] = useState(true);
  console.log(collaps);
  return (
    <div className='w-[90%] mx-auto flex justify-between lg:flex-row flex-col'>
      <div className='lg:w-[45%] mx-auto'>
        <p className='text-[20px] text-[#5F4BDB]'>How it works</p>
        <h2 className='font-[Poppins] 2xl:text-[50px] xl:text-[45px] text-[45px] 2xl:leading-[65px] xl:leading-[65px] leading-[65px] font-[600] text-[#363848] mb-8'>Start find a job you love with us easily</h2>
        <div onClick={() => setCollaps(!collaps, setCollaps3(true), setCollaps2(true))} className={`cursor-pointer flex items-center justify-between pl-5 pr-8 gap-4 ${collaps ? 'projectShadow' : 'shadow-2xl'} rounded-[20px] py-4`}>
          <div className={`flex gap-4 ${collaps ? 'items-center' : ''}`}>
            <div>
              <p className='text-[22px] px-[22px] py-3 rounded-[18px] text-[#8E22E2] bg-[#F6EBFF] font-semibold'>1</p>
            </div>

            <div>
              <p className='text-[#363848] 2xl:text-[24px] lg:text-[22px] text-[20px] font-semibold'>Complete Profile</p>
              <p className={`${collaps && 'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore explicabo quaerat fugit quibusdam ullam culpa dolorem, quam et delectus quidem libero, quasi magni iste, numquam necessitatibus laboriosam minima ad.</p>
            </div>
          </div>

          <i className={`fa-solid fa-chevron-down text-[#2B3DC7] ${!collaps && 'hidden'}`}></i>
        </div>
        <div onClick={() => setCollaps2(!collaps2, setCollaps(true), setCollaps3(true))} className={`my-4 cursor-pointer flex items-center justify-between pl-5 pr-8 gap-4 ${collaps2 ? 'projectShadow' : 'shadow-2xl'} rounded-[20px] py-4`}>
          <div className={`flex gap-4 ${collaps2 ? 'items-center' : ''}`}>
            <div>
              <p className='text-[22px] px-5 py-3 rounded-[18px] text-[#2B3DC7] bg-[#E7E9FF] font-semibold'>2</p>
            </div>

            <div>
              <p className='text-[#363848] 2xl:text-[24px] lg:text-[22px] text-[20px] font-semibold'>Search Vacancies</p>
              <p className={`${collaps2 && 'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore explicabo quaerat fugit quibusdam ullam culpa dolorem, quam et delectus quidem libero, quasi magni iste, numquam necessitatibus laboriosam minima ad.</p>
            </div>
          </div>

          <i className={`fa-solid fa-chevron-down text-[#2B3DC7] ${!collaps2 && 'hidden'}`}></i>
        </div>
        <div onClick={() => setCollaps3(!collaps3, setCollaps(true), setCollaps2(true))} className={`cursor-pointer flex items-center justify-between pl-5 pr-8 gap-4 ${collaps3 ? 'projectShadow' : 'shadow-2xl'} rounded-[20px] py-4`}>
          <div className={`flex gap-4 ${collaps3 ? 'items-center' : ''}`}>
            <div>
              <p className='text-[22px] px-5 py-3 rounded-[18px] text-[#3DCD65] bg-[#E9FFEF] font-semibold'>3</p>
            </div>

            <div>
              <p className='text-[#363848] 2xl:text-[24px] lg:text-[22px] text-[20px] font-semibold'>Complete Profile</p>
              <p className={`${collaps3 && 'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium inventore explicabo quaerat fugit quibusdam ullam culpa dolorem, quam et delectus quidem libero, quasi magni iste, numquam necessitatibus laboriosam minima ad.</p>
            </div>
          </div>

          <i className={`fa-solid fa-chevron-down text-[#2B3DC7]${collaps3 && 'hidden'}`}></i>
        </div>
      </div>
      <div className='lg:w-[50%] relative'>
        <img className='lg:h-[590px]' src={img} alt="" />
        <i class="fa-solid fa-play text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] bg-white px-3 py-[5px] rounded-full pl-[13px] btnPlayShadow"></i>
      </div>
    </div>
  );
};

export default HomeFindJob;