import React from 'react';
import { Link } from 'react-router-dom';
import HomePartners from '../Home/HomePartners/HomePartners';
import RelatedJobs from './RelatedJobs/RelatedJobs';
const detailsbg = 'https://i.ibb.co/f1Vw3qr/Mask-Group-2.png';
const company = 'https://i.ibb.co/s5CgQVb/company-Logo-1.png';
const sallary = 'https://i.ibb.co/nC2c4QJ/icSalary.png';
const sallarySecond = 'https://i.ibb.co/jrSyB3W/ic-Salary-1.png';
const location = 'https://i.ibb.co/kDKBqhL/ic-Location.png';
const man1 = "https://i.ibb.co/LQXDfbk/Mask-Group-1.png"
const man2 = "https://i.ibb.co/64HmWM4/Mask-Group-2.png"
const man3 = "https://i.ibb.co/vhkKjsX/image-3.png"
const man4 = "https://i.ibb.co/xgWF15V/Mask-Group-3.png"

const JobDetails = () => {
  return (
    <div className='bg-[#FBFBFB]'>
      <div className='h-[57vh]' style={{
        backgroundImage: `linear-gradient(#5f4bdba1,#5f4bdba1),url(${detailsbg})`
      }}>
        <div className='flex justify-center pt-20'>
          <div>
            <h1 className='text-[32px] font-semibold text-white leading-10 text-center mb-4'>Job Details</h1>
            <p className='cardText not-italic leading-5 text-white text-center'>Jobs / Highspeed Studios / UI Designer</p>
          </div>
        </div>
      </div>
      <div className='w-[90%] mx-auto flex justify-between lg:flex-row flex-col lg:gap-0 gap-10 -mt-28'>
        <div className='lg:w-[30%] bg-white py-10 rounded-3xl joblistShadow'>
          <div className='text-center'>
            <div className='flex justify-center mb-5'><img className='max-w-[110px]' src={company} alt="" /></div>
            <p className='text-[22px] font-poppins font-[500] leading-[33px] mb-2'>Highspeed Studios</p>
            <p className='text-[#000000b3] font-poppins leading-6'>Creative Design Agency</p>
            <div>
              <button className='primary-colorbg text-[18px] font-semibold font-poppins leading-[27px] text-white w-[55%] py-2 rounded-full my-7'>+ Follow</button>
            </div>
          </div>
          <div className='flex justify-between px-7 mt-5'>
            <div className='flex gap-4'>
              <i className="fa-solid fa-user bg-[#8743DF] text-[16px] text-white p-4 rounded-xl"></i>
              <div>
                <p className='text-[18px] font-semibold leading-7'>80 - 100</p>
                <p className='text-[#AEAEAE] text-[14px] leading-[21px]'>Employee</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <i className="fa-solid fa-star bg-[#FFBE17] text-[16px] text-white px-[14px] py-4 rounded-xl"></i>
              <div>
                <p className='text-[18px] font-semibold leading-7'>4.5</p>
                <p className='text-[#AEAEAE] text-[14px] leading-[21px]'>Reviews</p>
              </div>
            </div>
          </div>
          <div className='flex gap-4 px-7 mt-5'>
            <i className="fa-solid fa-location-dot text-[#808080] p-4 bg-[#ECECEC] rounded-xl"></i>
            <div>
              <p className='text-[18px] font-semibold leading-7'>London, England</p>
              <p className='text-[#AEAEAE] text-[14px] leading-[21px]'>Location</p>
            </div>
          </div>

          <div className='mx-7 pt-7 mt-9 border-t'>
            <div>
              <p className='text-color leading-6 font-[500] font-poppins not-italic'>About Company</p>
              <p className='text-[#313131] text-[14px] font-poppins leading-[21px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className='text-[#313131] text-[14px] font-poppins leading-[21px] my-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</p>
            </div>

            <div className='flex justify-between items-center'>
              <div>
                <button className='primary-color bg-[#EEECFF] px-5 py-3 rounded-full font-semibold transition-all duration-300 border border-[#EEECFF] hover:text-[#363848] hover:bg-transparent hover:border'>23 Vacancy</button>
              </div>
              <div>
                <button className='primary-color bg-[#EEECFF] px-5 py-3 rounded-full font-semibold transition-all duration-300 border border-[#EEECFF] hover:text-[#363848] hover:bg-transparent hover:border'>More Details</button>
              </div>
            </div>
          </div>

        </div>
        <div className='lg:w-[67%] joblistShadow bg-white px-8 rounded-3xl'>
          <div className='flex justify-between items-center flex-wrap'>
            <div className='mt-6'>
              <h2 className='text-color 2xl:text-[32px] text-[28px] font-semibold leading-[50px] font-poppins'>Lead UI/UX Designer</h2>
              <p className='text-color cardText not-italic text-[17px]'>Posted by Admin on November 12th, 2020</p>
            </div>
            <div className='flex items-center justify-between mt-10 gap-8'>
              <div>
                <Link to='/application-form' className='transition-all duration-300 hover:text-[#5F4BDB] hover:bg-[#F0EEFF] border hover:border-[#F0EEFF] border-[#5F4BDB] bg-[#5F4BDB] text-white px-7 py-3 rounded-full slidCardShadow'>Apply Now</Link>
              </div>
              <div>
                <div className='likeBtnParent transition-all duration-500'>
                  <i className="fa-solid fa-heart text-2xl py-3 px-4 bg-[#FFD9D9] text-[#FF5353] rounded-full"></i>
                </div>
              </div>

            </div>
          </div>
          <div className='flex gap-12 flex-wrap mt-10'>
            <div className='flex gap-3 items-center'>
              <img className='2xl:max-w-[50px] max-w-[45px]' src={sallary} alt="" />
              <div>
                <p className='text-[#2E2E2E] 2xl:text-[18px] font-[500] leading-6'>$14,000 - $25,000</p>
                <p className='text-[#8A8A8A] 2xl:text-[16px] text-[14px] leading-6'>Monthly Salary</p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <img className='2xl:max-w-[50px] max-w-[45px]' src={sallarySecond} alt="" />
              <div>
                <p className='text-[#2E2E2E] 2xl:text-[18px] font-[500] leading-6'>2-3 Years</p>
                <p className='text-[#8A8A8A] 2xl:text-[16px] text-[14px] leading-6'>Experience</p>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <img className='2xl:max-w-[50px] max-w-[45px]' src={location} alt="" />
              <div>
                <p className='text-[#2E2E2E] 2xl:text-[18px] font-[500] leading-6'>London, England</p>
                <p className='text-[#8A8A8A] 2xl:text-[16px] text-[14px] leading-6'>Location</p>
              </div>
            </div>
          </div>
          <div className='mt-14'>
            <p className='text-color font-semibold leading-6 mb-8 text-[18px]'>Job Description</p>
            <p className='text-color'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p className='mt-8 text-color'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, s</p>
          </div>
          <div className='lg:pb-0 pb-8'>
            <p className='text-color font-semibold leading-6 mt-6 text-[18px]'>Gallery</p>
            <div className='grid lg:grid-cols-4 gap-4 grid-cols-2 mt-10'>
              <img src={man1} alt="" />
              <img src={man2} alt="" />
              <img src={man3} alt="" />
              <img src={man4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <RelatedJobs />
      <HomePartners/>
    </div>
  );
};

export default JobDetails;