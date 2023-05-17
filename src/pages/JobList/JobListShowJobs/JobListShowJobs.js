import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const accentFirst = 'https://i.ibb.co/09FNCh3/accept-2.png';
const accentSecond = 'https://i.ibb.co/TqC1HdJ/accept-1.png';
const JobListShowJobs = () => {
  const [details, setDetails] = useState(false);
  const [sellery, setSellery] = useState(true);
  const [toggle, setToggle] = useState(false);

  const showjobs = [
    {
      image: "https://i.ibb.co/mSnGTbh/company-Logo.png",
      name: "Senior UX Designer",
      work: "Highspeed Studios",
      dollar_beg: "https://i.ibb.co/9hkfHHQ/icSalary.png",
      sallery: "$14,000 - $25,000",
      monthly: "Monthly Salary",
      location_icon: 'https://i.ibb.co/85ThXnh/ic-Location.png',
      location: "London, England",
      location_text: "Location"
    },
    {
      image: "https://i.ibb.co/hLTMZ9h/company-Logo-1.png",
      name: "Intern UX Designer",
      work: "Maximoz Team",
      dollar_beg: "https://i.ibb.co/9hkfHHQ/icSalary.png",
      sallery: "$500 - $1000",
      monthly: "Monthly Salary",
      location_icon: 'https://i.ibb.co/85ThXnh/ic-Location.png',
      location: "Manchester, England",
      location_text: "Location"
    },
    {
      image: "https://i.ibb.co/JytcPXW/company-Logo.png",
      name: "Junior UX Designer",
      work: "Vvibu Leu Boz Studios",
      dollar_beg: "https://i.ibb.co/9hkfHHQ/icSalary.png",
      sallery: "$8,000 - $12,000",
      monthly: "Monthly Salary",
      location_icon: 'https://i.ibb.co/85ThXnh/ic-Location.png',
      location: "Oxford, England",
      location_text: "Location"
    },
    {
      image: "https://i.ibb.co/cb3c0zt/company-Logo-1.png",
      name: "Principal UX Designer",
      work: "Vvibu Leu Boz Studios",
      dollar_beg: "https://i.ibb.co/9hkfHHQ/icSalary.png",
      sallery: "$11,000 - $60,000",
      monthly: "Monthly Salary",
      location_icon: 'https://i.ibb.co/85ThXnh/ic-Location.png',
      location: "London, England",
      location_text: "Location"
    },
    {
      image: "https://i.ibb.co/khkYWjW/company-Logo-2.png",
      name: "Senior UX Designer",
      work: "Highspeed Studios",
      dollar_beg: "https://i.ibb.co/9hkfHHQ/icSalary.png",
      sallery: "$500 - $1,000",
      monthly: "Monthly Salary",
      location_icon: 'https://i.ibb.co/85ThXnh/ic-Location.png',
      location: "London, England",
      location_text: "Location"
    },
    {
      image: "https://i.ibb.co/PrN8NJt/company-Logo-3.png",
      name: "Principal UX Designer",
      work: "Lowvoltages Team",
      dollar_beg: "https://i.ibb.co/9hkfHHQ/icSalary.png",
      sallery: "$11,00 - $60,000",
      monthly: "Monthly Salary",
      location_icon: 'https://i.ibb.co/85ThXnh/ic-Location.png',
      location: "London, England",
      location_text: "Location"
    },
    {
      image: "https://i.ibb.co/G7mdbzv/company-Logo-4.png",
      name: "Senior UX Designer",
      work: "Highspedd Studios",
      dollar_beg: "https://i.ibb.co/9hkfHHQ/icSalary.png",
      sallery: "$500 - $1000",
      monthly: "Monthly Salary",
      location_icon: 'https://i.ibb.co/85ThXnh/ic-Location.png',
      location: "London, England",
      location_text: "Location"
    },
    {
      image: "https://i.ibb.co/sqpSfxG/company-Logo-5.png",
      name: "Principal UX Designer",
      work: "Lowvoltages Team",
      dollar_beg: "https://i.ibb.co/9hkfHHQ/icSalary.png",
      sallery: "$11,00 - $60,000",
      monthly: "Monthly Salary",
      location_icon: 'https://i.ibb.co/85ThXnh/ic-Location.png',
      location: "London, England",
      location_text: "Location"
    },
    {
      image: "https://i.ibb.co/7gx2nVF/company-Logo-6.png",
      name: "Senior UX Designer",
      work: "Highspeed Studios",
      dollar_beg: "https://i.ibb.co/9hkfHHQ/icSalary.png",
      sallery: "$500 - $1,000",
      monthly: "Monthly Salary",
      location_icon: 'https://i.ibb.co/85ThXnh/ic-Location.png',
      location: "London, England",
      location_text: "Location"
    },
  ]


  const menuData = <>
    <div className='flex items-center gap-4'>
      <img src={accentFirst} alt="" />
      <p>Fulltime</p>
    </div>
    <div className='flex items-center gap-4'>
      <img src={accentSecond} alt="" />
      <p>Freelance</p>
    </div>
    <div className='flex items-center gap-4'>
      <p>Details</p>
      <div onClick={() => setDetails(!details)} className='w-9 relative'>
        <div className={`cursor-pointer h-[22px] w-[22px] rounded-full absolute -top-[3px] ${details ? 'primary-colorbg -right-[10px]' : '-left-3 bg-[#959595]'}`}>
        </div>
        <div className={`h-4 w-8 rounded-full ${details ? 'bg-[#E4CFFF]' : 'bg-[#D8D8D8]'}`}>
        </div>
      </div>
    </div>
    <div className='flex items-center gap-4'>
      <p>Sellery</p>
      <div onClick={() => setSellery(!sellery)} className='w-9 relative'>
        <div className={`cursor-pointer h-[22px] w-[22px] rounded-full absolute -top-[3px] ${sellery ? 'primary-colorbg -right-[10px]' : '-left-3 bg-[#959595]'}`}>
        </div>
        <div className={`h-4 w-8 rounded-full ${sellery ? 'bg-[#E4CFFF]' : 'bg-[#D8D8D8]'}`}>
        </div>
      </div>
    </div>
    <div className='border px-3 py-2 rounded-full relative'>
      <i className="fa-solid fa-angle-down absolute right-4 top-1/2 -translate-y-1/2 primary-color"></i>
      <select className='outline-none px-3 pr-7 appearance-none'>
        <option value="newest">Newest</option>
        <option value="newest">Newest</option>
        <option value="newest">Newest</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  </>
  return (
    <div className='my-32'>
      <div className='primary-width'>
        <div className='flex justify-between items-center relative mb-10'>
          <h2 className='text-color text-[28px] font-semibold font-poppins'>Showing 34 Jobs</h2>
          <div className='lg:block hidden'>
            <div className='flex items-center gap-10'>
              {
                menuData
              }
              <div className='p-[10px] border rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>

              </div>
            </div>
          </div>
          <div onClick={() => setToggle(!toggle)} className='lg:hidden block'>
            {
              toggle ? <i className="fa-solid fa-xmark py-3 px-[14px] border rounded-full"></i> : <i className="fa-solid fa-bars py-3 px-[14px] border rounded-full"></i>
            }
          </div>
          <div className={`absolute joblistShadow bg-white px-6 py-5 rounded-xl grid gap-5 right-0 top-14  origin-top transition-all duration-300 ${toggle ? 'scale-y-100' : "scale-y-0"} lg:hidden block`}>
            <div className='flex items-center justify-between'>
              <div className='p-[10px] border rounded-full inline-block'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>

              </div>
              <p onClick={() => setToggle(!toggle)} className='cursor-pointer'><i className="fa-solid fa-xmark py-3 px-[14px] border rounded-full"></i></p>
            </div>
            {
              menuData
            }
          </div>
        </div>
        <div className='xl:block hidden'>
          {
            showjobs.map(jobs => <div className='flex justify-between cardStyleHove items-center cardShadow rounded-2xl py-4 px-5 mt-4'>
              <div className='flex gap-6 xl:w-[30%]'>
                <img className='h-16' src={jobs.image} alt="" />
                <div>
                  <p className='text-[24px] font-semibold leading-[36px]'>{jobs.name}</p>
                  <p className='primary-color'>{jobs.work}</p>
                </div>
              </div>
              <div className='flex gap-12 items-center xl:w-[45%] mx-auto'>
                <div className='flex items-center gap-3 xl:w-[45%]'>
                  <img className='h-12' src={jobs.dollar_beg} alt="" />
                  <div>
                    <p className='text-[#2E2E2E] leading-7 text-[20px] font-[500] font-poppins'>{jobs.sallery}</p>
                    <p className='text-[#8A8A8A] leading-6'>{jobs.monthly}</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 xl:w-[45%]'>
                  <img className='h-12' src={jobs.location_icon} alt="" />
                  <div>
                    <p className='text-[#2E2E2E] leading-7 text-[20px] font-[500] font-poppins'>{jobs.location}</p>
                    <p className='text-[#8A8A8A] leading-6'>{jobs.location_text}</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-10'>
                <Link to='/jobdetails' className='bg-[#F0EEFF] primary-color px-6 py-3 rounded-full cardBtn'>Apply Now</Link>
                <div>
                  <i className="fa-solid fa-heart text-2xl py-3 px-4 bg-[#FFD9D9] text-[#FF5353] rounded-full"></i>
                </div>
              </div>
            </div>)
          }
        </div>
        <div className='xl:hidden block'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {
              showjobs.map((feture, idx) => <div className='cardStyleHove px-5 py-6 slidCardShadow rounded-[18px]' key={idx}>
                <div className='flex justify-center'>
                  <img className='h-[90px] mb-2' src={feture.image} alt="" />
                </div>
                <p className='text-[18px] text-color font-semibold text-center '>{feture.name}</p>
                <p className='text-[#5F4BDB] text-center text-[13px] mt-2'>{feture.work}</p>
                <div className='flex flex-col justify-center gap-4 font-[500] mt-5'>
                  <div className='flex items-center justify-center gap-2 2xl:text-[15px] text-[14px]'>
                    <div>
                      <img className='' src={feture.dollar_beg} alt="" />
                    </div>
                    <div className='flex gap-1 justify-center'>
                      <p className=''>${feture.sallery}</p>
                    </div>
                    <p className='text-[14px] text-[#C2C2C2]'>/monthly</p>
                  </div>
                  <div className='flex items-center justify-center gap-2 2xl:text-[15px] text-[14px]'>
                    <div><img src={feture.location_icon} alt="" /></div>
                    <p>London,England</p>
                    <p className='text-[#C2C2C2]'>/View Maps</p>
                  </div>
                </div>
                <div className='flex items-center justify-between mt-10'>
                  <div>
                    <div className='likeBtnParent transition-all duration-500'>
                      <i className="fa-solid fa-heart text-2xl py-3 px-4 bg-[#FFD9D9] text-[#FF5353] rounded-full"></i>
                    </div>
                  </div>
                  <div>
                    <Link to='/jobdetails' className='text-[#5F4BDB] bg-[#F0EEFF] px-7 py-3 rounded-full cardBtn'>Apply Now</Link>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>

        <div className='flex justify-center mt-16'>
          <div className='flex gap-6'>
            <div className='flex items-center gap-3 primary-color  cursor-pointer'>
              <i className="fa-solid fa-angles-left"></i>
              <p>Previous</p>
            </div>
            <div className='flex px-4 rounded-full bg-[#ECDEFF] text-[18px] font-[500]'>
              <p className='primary-colorbg py-2 px-5 rounded-full text-white'>1</p>
              <p className='primary-color py-2 px-5 rounded-full text-white'>2</p>
              <p className='primary-color py-2 px-5 rounded-full text-white'>3</p>
              <p className='primary-color py-2 px-5 rounded-full text-white'>4</p>
            </div>
            <div className='flex items-center gap-3 primary-color cursor-pointer'>
              <p>Next</p>
              <i className="fa-solid fa-angles-right"></i>
            </div>
          </div>
</div>
      </div>
    </div>
  );
};

export default JobListShowJobs;