import React from 'react';
import Slider from 'react-slick';
const heroimg = 'https://i.ibb.co/NTWqXGP/image-heroo-six.png';
const LastEventHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay:true
  };

  return (
    <div className='mb-20 last-page-hero w-[90%] mx-auto z-0'>
        <Slider {...settings}>
          <div className=''>
            <div className='flex items-center lg:flex-row flex-col bg-[#372F67] rounded-3xl'>
              <div className='lg:w-1/2 w-full'>
                <img className='h-[90vh]' src={heroimg} alt="" />
              </div>
              <div className='lg:w-1/2 lg:px-0 px-10 lg:py-0 py-10'>
                <div className='w-[85%]'>
                  <p className='text-[#FE8D4D] text-[18px] font-[500] font-poppins leading-7 font-style mb-3'>FEATURED EVENTS</p>
                  <h2 className='text-[35px] font-semibold leading-[55px] text-white mb-3'>Ziro Worldwide Freelancers Meetup Indonesia 2020</h2>
                  <div className='text-[#BFB5FF] flex items-center lg:flex-row flex-col gap-5 mb-3'>
                    <p>Saturday, November 28th, 2020</p>
                    <i className="fa-solid fa-circle text-[12px]"></i>
                    <p>Jakarta, Indonesia</p>
                  </div>
                  <p className='cardText font-style leading-7 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className='mt-8'>
                    <div className='h-[6px] w-full bg-[#2A2352] rounded-full'>
                      <div className='h-full w-[64%] bg-[#5F4BDB] rounded-full'></div>
                    </div>
                    <div className='flex justify-between items-center text-[17px] text-white font-poppins mt-2'>
                      <p>Tickets</p>
                      <p>34 left</p>
                    </div>
                  </div>
                  <div className='flex gap-5 mt-8'>
                    <button className='bg-[#5F4BDB] text-white font-[500] text-[17px] px-8 py-2 rounded-full'>Book Now</button>
                    <button className='px-6 py-2 font-[500] text-[17px] text-white flex gap-2 items-center bg-[#ffffff14] rounded-full'><i className="fa-solid fa-heart"></i> <span>Bookmark</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center lg:flex-row flex-col bg-[#372F67] rounded-3xl'>
              <div className='lg:w-1/2 w-full'>
                <img className='h-[90vh]' src={heroimg} alt="" />
              </div>
              <div className='lg:w-1/2 lg:px-0 px-10 lg:py-0 py-10'>
                <div className='w-[85%]'>
                  <p className='text-[#FE8D4D] text-[18px] font-[500] font-poppins leading-7 font-style mb-3'>FEATURED EVENTS</p>
                  <h2 className='text-[35px] font-semibold leading-[55px] text-white mb-3'>Ziro Worldwide Freelancers Meetup Indonesia 2020</h2>
                  <div className='text-[#BFB5FF] flex items-center lg:flex-row flex-col gap-5 mb-3'>
                    <p>Saturday, November 28th, 2020</p>
                    <i className="fa-solid fa-circle text-[12px]"></i>
                    <p>Jakarta, Indonesia</p>
                  </div>
                  <p className='cardText font-style leading-7 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <div className='mt-8'>
                    <div className='h-[6px] w-full bg-[#2A2352] rounded-full'>
                      <div className='h-full w-[64%] bg-[#5F4BDB] rounded-full'></div>
                    </div>
                    <div className='flex justify-between items-center text-[17px] text-white font-poppins mt-2'>
                      <p>Tickets</p>
                      <p>34 left</p>
                    </div>
                  </div>
                  <div className='flex gap-5 mt-8'>
                    <button className='bg-[#5F4BDB] text-white font-[500] text-[17px] px-8 py-2 rounded-full'>Book Now</button>
                    <button className='px-6 py-2 font-[500] text-[17px] text-white flex gap-2 items-center bg-[#ffffff14] rounded-full'><i className="fa-solid fa-heart"></i> <span>Bookmark</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>

    </div>
  );
};

export default LastEventHero;