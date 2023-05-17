import React from 'react';
import first from '../../../assests/featureJobs/companyLogo.png'
import second from '../../../assests/featureJobs/companyLogo (1).png'
import third from '../../../assests/featureJobs/companyLogo (2).png'
import fourth from '../../../assests/featureJobs/companyLogo (3).png'
import icSellary from '../../../assests/featureJobs/icSalary.png';
import icLocation from '../../../assests/featureJobs/icLocation.png';
import { Link } from 'react-router-dom';
const HomeFeturedJobs = () => {
  const fetureJobs = [
    {
      image: first,
      header: "Database Programmer",
      team: 'Maximoz Team',
      amount: { first: '14,000', second: '25,000' },
      location: 'London,England'
    },
    {
      image: second,
      header: "UI/UX Designer",
      team: 'Colo Colo Studios',
      amount: { first: '14,000', second: '25,000' },
      location: 'London,England'
    },
    {
      image: third,
      header: "Content Writer",
      team: 'Faster WOY Crew',
      amount: { first: '14,000', second: '25,000' },
      location: 'London,England'
    },
    {
      image: fourth,
      header: "Database Programmer",
      team: 'Snailination Studios',
      amount: { first: '14,000', second: '25,000' },
      location: 'London,England'
    }
  ]
  return (
    <div className='my-32'>
      <div className='primary-width'>
        <h3 className='text-color text-[35px] font-semibold leading-[60px] text-center mb-4'>Featured Jobs</h3>
        <div className='flex justify-center mb-20'>
          <p className='w-[531px] text-color leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
          {
            fetureJobs.map((feture, idx) => <div className='cardStyleHove px-5 py-6 slidCardShadow rounded-[18px]' key={idx}>
              <div className='flex justify-center relative'>
                <img className='h-[90px] mb-2' src={feture.image} alt="" />
                <div className='font-bold flex gap-[2px] absolute right-2'>
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </div>
              </div>
              <p className='text-[18px] text-color font-semibold text-center '>{feture.header}</p>
              <p className='text-[#5F4BDB] text-center text-[13px] mt-2'>{feture.team}</p>
              <div className='flex flex-col justify-center gap-4 font-[500] mt-5'>
                <div className='flex items-center justify-center gap-2 2xl:text-[15px] text-[14px]'>
                  <div>
                    <img className='' src={icSellary} alt="" />
                  </div>
                  <div className='flex gap-1 justify-center'>
                    <p className=''>${feture.amount.first}</p>
                    -
                    <p>${feture.amount.second}</p>
                  </div>
                  <p className='text-[14px] text-[#C2C2C2]'>/monthly</p>
                </div>
                <div className='flex items-center justify-center gap-2 2xl:text-[15px] text-[14px]'>
                  <div><img src={icLocation} alt="" /></div>
                  <p>London,England</p>
                  <p className='text-[#C2C2C2]'>/View Maps</p>
                </div>
              </div>
              <div className='flex items-center justify-between mt-10'>
                <div>
                  <div className=''>
                    <i className="fa-solid fa-heart text-xl py-2 px-3 transition-all duration-300 text-white bg-[#FF5353] rounded-full hover:bg-[#FFD9D9] hover:text-[#FF5353]"></i>
                  </div>
                </div>
                <div>
                  <button className='text-[#5F4BDB] bg-[#F0EEFF] px-7 py-3 rounded-full cardBtn'>Apply Now</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <Link to='/joblist' className='bg-[#5F4BDB] text-[17px] font-semibold text-white px-6 py-2 rounded-full'>View more</Link>
      </div>
 </div>
  );
};

export default HomeFeturedJobs;