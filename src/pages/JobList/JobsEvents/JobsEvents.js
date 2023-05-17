import React from 'react';
import { Link } from 'react-router-dom';
const first = 'https://i.ibb.co/Tvqdm9X/image.png';
const second = 'https://i.ibb.co/L5Th5sZ/Mask-Group.png';
const third = 'https://i.ibb.co/Ky0PjDC/Mask-Group-1.png';

const JobsEvents = () => {
  return (
    <div className='border-t py-28'>
      <div className='primary-width'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-color text-[28px] font-semibold font-poppins'>Upcoming Events</h2>
          <div className='flex gap-7 cursor-pointer'>
            <div className='border flex items-center px-3 py-2 rounded-full relative'>
              <img src="https://i.ibb.co/4YZCfpn/Layer-93.png" alt="" />
              <i className="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2 primary-color"></i>
              <select className='outline-none px-3 pr-7 appearance-none'>
                <option value="newest">Filter Date</option>
                <option value="newest">Filter Date</option>
                <option value="newest">Filter Date</option>
                <option value="newest">Filter Date</option>
              </select>
            </div>
            <div className='border px-3 py-2 rounded-full relative cursor-pointer'>
              <i className="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2 primary-color"></i>
              <select className='outline-none px-3 pr-7 appearance-none'>
                <option value="newest">Newest</option>
                <option value="newest">Newest</option>
                <option value="newest">Newest</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
        <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-16'>
          <div className='cardShadow rounded-2xl pb-8 eventCardMain cursor-pointer'>
            <img src={first} alt="" />
            <div className=' ml-7'>
              <div className='flex gap-3 cardText'>
                <div className='bg-[#363848] relative text-center py-4 rounded-full px-3 -mt-16 eventBtn'>
                  <div>
                    <p className='text-white text-[34px] font-[700] leading-28'>20</p>
                    <p className='text-[18px] font-[500] leading-7 text-[#ffffff70]'>NOV</p>
                  </div>
                  <div className='absolute bottom-2 right-[7px]'>
                    <i className="fa-regular fa-circle-check text-2xl bg-[#ffffff1c] text-white p-2 px-3 rounded-full cardIcon"></i>
                  </div>
                </div>
                <div className='mt-3'>
                  <p className='uppercase mb-2 text-[#FE8D4D] text-[18px] tracking-[2px] leading-[28px] font-semibold cardText'>mobile app</p>
                  <p className='font-poppins text-[20px] font-semibold leading-[30px] text-color'>Global Android Programmer Meetup 2020 </p>
                </div>
              </div>
              <p className='text-color cardText mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='cardShadow rounded-2xl pb-8 eventCardMain cursor-pointer'>
            <img src={second} alt="" />
            <div className=' ml-7'>
              <div className='flex gap-3 cardText'>
                <div className='bg-[#363848] relative text-center py-4 rounded-full px-3 -mt-16 eventBtn'>
                  <div>
                    <p className='text-white text-[34px] font-[700] leading-28'>15</p>
                    <p className='text-[18px] font-[500] leading-7 text-[#ffffff70]'>NOV</p>
                  </div>
                  <div className='absolute bottom-2 right-[7px]'>
                    <i className="fa-solid fa-heart text-2xl bg-[#ffffff1c] text-white p-2 px-3 rounded-full cardIcon"></i>
                  </div>
                </div>
                <div className='mt-3'>
                  <p className='uppercase mb-2 text-[#FE8D4D] text-[18px] tracking-[2px] leading-[28px] font-semibold cardText'>ART EXIBITHION</p>
                  <p className='font-poppins text-[20px] font-semibold leading-[30px] text-color'>Paris Designer Meetup with Ziro Partner</p>
                </div>
              </div>
              <p className='text-color cardText mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='cardShadow rounded-2xl pb-8 eventCardMain cursor-pointer'>
            <img src={first} alt="" />
            <div className=' ml-7'>
              <div className='flex gap-3 cardText'>
                <div className='bg-[#363848] relative text-center py-4 rounded-full px-3 -mt-16 eventBtn'>
                  <div>
                    <p className='text-white text-[34px] font-[700] leading-28'>07</p>
                    <p className='text-[18px] font-[500] leading-7 text-[#ffffff70]'>NOV</p>
                  </div>
                  <div className='absolute bottom-2 right-[7px]'>
                    <i className="fa-solid fa-heart text-2xl bg-[#ffffff1c] text-white p-2 px-3 rounded-full cardIcon"></i>
                  </div>
                </div>
                <div className='mt-3'>
                  <p className='uppercase mb-2 text-[#FE8D4D] text-[18px] tracking-[2px] leading-[28px] font-semibold cardText'>ACCOUNTING</p>
                  <p className='font-poppins text-[20px] font-semibold leading-[30px] text-color'>Bussiness Plan in Pandemic with Famous Native Speaker</p>
                </div>
              </div>
              <p className='text-color cardText mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center'><Link to='/event-list' className='primary-colorbg text-[18px] font-semibold font-poppins text-white px-5 py-2 rounded-full cardShadow'>View more</Link></div>
      </div>
    </div>
  );
};

export default JobsEvents;