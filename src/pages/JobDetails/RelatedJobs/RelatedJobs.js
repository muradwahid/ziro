import React from 'react';
import first from '../../../assests/featureJobs/companyLogo.png'
import second from '../../../assests/featureJobs/companyLogo (1).png'
import third from '../../../assests/featureJobs/companyLogo (2).png'
import fourth from '../../../assests/featureJobs/companyLogo (3).png'
import icSellary from '../../../assests/featureJobs/icSalary.png';
import icLocation from '../../../assests/featureJobs/icLocation.png';
const RelatedJobs = () => {
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
    <div className='mt-48 mb-44'>
      <div className='primary-width'>
        <div className='flex justify-between my-10'>
          <h3 className='text-color text-[34px] font-semibold'>Related jobs</h3>
          <div><button className='text-[18px] font-semibold text-white primary-colorbg px-7 py-3 rounded-full'>View more</button></div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
          {
            fetureJobs.map((feture, idx) => <div className='cardStyleHove px-5 py-6 slidCardShadow rounded-[18px]' key={idx}>
              <div className='flex justify-center'>
                <img className='h-[90px] mb-2' src={feture.image} alt="" />
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
    </div>
  );
};

export default RelatedJobs;