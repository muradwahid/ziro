import React from 'react';
const first = 'https://i.ibb.co/sbbTbft/image.png';
const second = 'https://i.ibb.co/Mk1dYJ5/image-1.png';
const third = 'https://i.ibb.co/M9ZK128/image-2.png';
const fourth = 'https://i.ibb.co/LhmYZzJ/image-3.png';
const fifth = 'https://i.ibb.co/3rxKTCY/image-4.png';
const sixth = 'https://i.ibb.co/CmT3dpj/Mask-Group.png';
const seventh = 'https://i.ibb.co/R02bjQh/image-5.png';
const eight = 'https://i.ibb.co/x86Nvrt/image-6.png';
const nine = 'https://i.ibb.co/dgS5cnB/image-7.png';
const LastUpcommingEvents = () => {
  const eventsData = [
    {
      date: { day: 20, month: 'nov' },
      category: 'mobile app',
      heading: 'Ziro Mobile App Beta Tester Launching Ceremonials',
      img: first,
      btnBg: '#363848',
      icon: <i className="fa-solid fa-heart p-2 px-3 rounded-full text-2xl text-white bg-[#FF477E]"></i>
  },
    {
      date: { day: 22, month: 'nov' },
      category: 'BUSSINESS',
      heading: 'Manage Over 500 Employees Clearly with Mr. Samuel',
      img: second,
      btnBg: '#363848',
      icon: <i className="fa-solid fa-heart p-2 px-3 rounded-full text-2xl text-white bg-[#ffffff1c]"></i>
    },
    {
      date: { day: 21, month: 'nov' },
      category: 'ACCOUNTING',
      heading: 'Ziro Annualy Monthly Meetup : How to Increase Productivity',
      img: third,
      btnBg: '#363848',
      icon: <i className="fa-solid fa-heart p-2 px-3 rounded-full text-2xl text-white bg-[#FF477E]"></i>
    },
    {
      date: { day: 20, month: 'nov' },
      category: 'MOBILE APP',
      heading: 'Global Android Programmer Meetup 2020',
      img: fourth,
      btnBg: '#30C736',
      icon: <i className="fa-regular fa-circle-check p-2 px-3 rounded-full text-2xl text-[#30C736] bg-[#FFF]"></i>
    },
    {
      date: { day: 15, month: 'nov' },
      category: 'ART EXIBITHION',
      heading: 'Paris Designer Meetup with Ziro Partner',
      img: fifth,
      btnBg: '#363848',
      icon: <i className="fa-solid fa-heart p-2 px-3 rounded-full text-2xl text-white bg-[#ffffff1c]"></i>
    },
    {
      date: { day:'07', month: 'nov' },
      category: 'ACCOUNTING',
      heading: 'Bussiness Plan in Pandemic with Famous Native Speaker',
      img: sixth,
      btnBg: '#363848',
      icon: <i className="fa-solid fa-heart p-2 px-3 rounded-full text-2xl text-white bg-[#ffffff1c]"></i>
    },
    {
      date: { day:28, month: 'oct' },
      category: 'GRAPHIC DESIGN',
      heading: 'INCTOBER Meetup 2020',
      img: seventh,
      btnBg: '#363848',
      icon: <i className="fa-solid fa-heart  p-2 px-3 rounded-full text-2xl text-white bg-[#ffffff1c]"></i>
    },
    {
      date: { day:21, month: 'oct' },
      category: 'UX WRITER',
      heading: 'Ziro Online Meeting with INDONESIANS UX Writer ',
      img: eight,
      btnBg: '#FF5353',
      icon: <i className="fa-regular fa-circle-check p-2 px-3 rounded-full text-2xl text-[#FF5353] bg-[#ffffff]"></i>
    },
    {
      date: { day: '04', month: 'oct' },
      category: 'ACCOUNTING',
      heading: 'Bussiness Plan in Pandemic with Famous Native Speaker',
      img: nine,
      btnBg: '#363848',
      icon: <i className="fa-solid fa-heart p-2 px-3 rounded-full text-2xl text-white bg-[#ffffff1c] "></i>
    }
]
  return (
    <div className='py-28'>
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
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-16'>
          {
            eventsData?.map((data, idx) => <div key={idx} className='cardShadow cardStyleHove  rounded-2xl pb-8 cursor-pointer'>
              <img className='w-full' src={data.img} alt="" />
              <div className='px-5'>
                <div className='flex gap-3 cardText'>
                  <div className={`bg-[${data.btnBg}] relative text-center py-4 rounded-full -mt-14 px-3 h-[170px]`}>
                    <div>
                      <p className='text-white text-[34px] font-[700] leading-28'>{data.date.day}</p>
                      <p className='text-[18px] font-[500] leading-7 text-[#ffffff70] uppercase'>{data.date.month}</p>
                    </div>
                    <div className='absolute bottom-2 right-[7px]'>
                      {
                        data.icon
                      }
                    </div>
                  </div>
                  <div className='mt-3'>
                    <p className='uppercase mb-2 text-[#FE8D4D] text-[18px] tracking-[2px] leading-[28px] font-semibold cardText'>{data.category}</p>
                    <p className='font-poppins text-[20px] font-semibold leading-[30px] text-color'>{data.heading}</p>
                  </div>
                </div>
                <p className='text-color cardText mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>)
          }
        </div>
        <div class="flex justify-center mt-16"><div class="flex gap-6"><div class="flex items-center gap-3 primary-color  cursor-pointer"><i class="fa-solid fa-angles-left"></i><p>Previous</p></div><div class="flex px-4 rounded-full bg-[#ECDEFF] text-[18px] font-[500]"><p class="primary-color py-2 px-5 rounded-full text-white">1</p><p class="primary-colorbg py-2 px-5 rounded-full text-white">2</p><p class="primary-color py-2 px-5 rounded-full text-white">3</p><p class="primary-color py-2 px-5 rounded-full text-white">4</p></div><div class="flex items-center gap-3 primary-color cursor-pointer"><p>Next</p><i class="fa-solid fa-angles-right"></i></div></div></div>
      </div>
    </div>
  );
};

export default LastUpcommingEvents;