import React, { useState } from 'react';
const accentFirst = 'https://i.ibb.co/09FNCh3/accept-2.png';
const accentSecond = 'https://i.ibb.co/TqC1HdJ/accept-1.png';
const FreelancerShowPeople = () => {
  const [details, setDetails] = useState(false);
  const [sellery, setSellery] = useState(true);
  const [toggle, setToggle] = useState(false);
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
    <div className='xl:mt-0 lg:mt-60 md:mt-60 sm:mt-96 mt-[530px]'>
      <div className='primary-width'>
        <div className='flex justify-between items-center relative mb-10'>
          <h2 className='text-color text-[24px] font-semibold font-poppins'>Showing 87 of 234 Peoples</h2>
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
      </div>
</div>
  );
};

export default FreelancerShowPeople;