import React, { useState } from 'react';
import Slider from 'react-slick';
const bg1 = 'https://i.ibb.co/h9M2pX2/background-1.png';
const bg2 = 'https://i.ibb.co/LvLLR50/background.png';
const HomeLatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay:true,
    arrows:false,
    afterChange: (current) => setCurrentSlide(current),
  };
  return (
    <div className='bg-[#FDFDFD] mt-32 pt-16 pb-20'>
      <div className='primary-width '>
        <h3 className='text-[35px] font-poppins font-semibold'>Latest News</h3>
        <p className='w-[660px] text-[#00000099]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className='flex justify-end mr-6 mb-7 mt-7'>
          <div className='slide-dots flex items-center gap-8 max-w-sm'>
            <span className={`h-[6px] transition-all duration-500 ${currentSlide === 0 ? 'w-[80px] bg-[#5F4BDB]' : 'w-[55px] bg-[#DADADA]'}`}></span>
            <span className={`h-[6px] transition-all duration-500 ${currentSlide === 1 ? 'w-[80px] bg-[#5F4BDB]' : 'w-[55px] bg-[#DADADA]'}`}></span>
            <span className={`h-[6px] transition-all duration-500 ${currentSlide === 2 ? 'w-[80px] bg-[#5F4BDB]' : 'w-[55px] bg-[#DADADA]'}`}></span>
          </div>
        </div>
        <Slider {...settings}>
          <div className='mb-6 font-poppins'>
            <div className='flex gap-10 lg:flex-row flex-col'>
              <div
                className='bg-no-repeat object-cover bg-center lg:w-[40%] w-full rounded-2xl'
                style={{
                  backgroundImage: `url(${bg2})`
                }}
              >
                <div className='grid gap-44 px-6'>
                  <div className='flex justify-end mt-3'>
                    <button className='uppercase font-[500] tracking-wide bg-[#FE8D4D] text-white px-7 py-4 rounded-full'>peoples</button>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex gap-3 items-center text-white '>
                      <p>James</p>
                      <p>24min read</p>
                    </div>
                    <h2 className='text-white text-[28px] font-[600] tracking-wide'>A Media Critic Focuses on the Crisis in Local News</h2>
                  </div>
                </div>
              </div>
              <div
                className='lg:w-[60%] w-full bg-no-repeat object-cover bg-center rounded-2xl'
                style={{
                  backgroundImage: `url(${bg1})`,

                }}
              >
                <div className='flex flex-col justify-between gap-28 pt-4 px-6'>
                  <div className='flex justify-end'>
                    <button className='uppercase font-[500] tracking-wide bg-[#FE8D4D] text-white px-7 py-4 rounded-full'>technology</button>
                  </div>
                  <div className='flex flex-col gap-3 pb-12'>
                    <div className='flex text-[14px] gap-3 items-center text-white '>
                      <p>James</p>
                      <p>24min read</p>
                    </div>
                    <h2 className='text-white text-[24px] font-[500] tracking-wide underline lg:w-[600px]'>Let’s increase your skills in pandemic with Ziro Workshops 2020</h2>
                    <p className='text-[15px] text-white lg:w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-6 font-poppins'>
            <div className='flex gap-10 lg:flex-row flex-col'>
              <div
                className='bg-no-repeat object-cover bg-center lg:w-[40%] w-full rounded-2xl'
                style={{
                  backgroundImage: `url(${bg2})`
                }}
              >
                <div className='grid gap-44 px-6'>
                  <div className='flex justify-end mt-3'>
                    <button className='uppercase font-[500] tracking-wide bg-[#FE8D4D] text-white px-7 py-4 rounded-full'>peoples</button>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex gap-3 items-center text-white '>
                      <p>James</p>
                      <p>24min read</p>
                    </div>
                    <h2 className='text-white text-[28px] font-[600] tracking-wide'>A Media Critic Focuses on the Crisis in Local News</h2>
                  </div>
                </div>
              </div>
              <div
                className='lg:w-[60%] w-full bg-no-repeat object-cover bg-center rounded-2xl'
                style={{
                  backgroundImage: `url(${bg1})`,

                }}
              >
                <div className='flex flex-col justify-between gap-28 pt-4 px-6'>
                  <div className='flex justify-end'>
                    <button className='uppercase font-[500] tracking-wide bg-[#FE8D4D] text-white px-7 py-4 rounded-full'>technology</button>
                  </div>
                  <div className='flex flex-col gap-3 pb-12'>
                    <div className='flex text-[14px] gap-3 items-center text-white '>
                      <p>James</p>
                      <p>24min read</p>
                    </div>
                    <h2 className='text-white text-[24px] font-[500] tracking-wide underline lg:w-[600px]'>Let’s increase your skills in pandemic with Ziro Workshops 2020</h2>
                    <p className='text-[15px] text-white lg:w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mb-6 font-poppins'>
            <div className='flex gap-10 lg:flex-row flex-col'>
              <div
                className='bg-no-repeat object-cover bg-center lg:w-[40%] w-full rounded-2xl'
                style={{
                  backgroundImage: `url(${bg2})`
                }}
              >
                <div className='grid gap-44 px-6'>
                  <div className='flex justify-end mt-3'>
                    <button className='uppercase font-[500] tracking-wide bg-[#FE8D4D] text-white px-7 py-4 rounded-full'>peoples</button>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex gap-3 items-center text-white '>
                      <p>James</p>
                      <p>24min read</p>
                    </div>
                    <h2 className='text-white text-[28px] font-[600] tracking-wide'>A Media Critic Focuses on the Crisis in Local News</h2>
                  </div>
                </div>
              </div>
              <div
                className='lg:w-[60%] w-full bg-no-repeat object-cover bg-center rounded-2xl'
                style={{
                  backgroundImage: `url(${bg1})`,

                }}
              >
                <div className='flex flex-col justify-between gap-28 pt-4 px-6'>
                  <div className='flex justify-end'>
                    <button className='uppercase font-[500] tracking-wide bg-[#FE8D4D] text-white px-7 py-4 rounded-full'>technology</button>
                  </div>
                  <div className='flex flex-col gap-3 pb-12'>
                    <div className='flex text-[14px] gap-3 items-center text-white '>
                      <p>James</p>
                      <p>24min read</p>
                    </div>
                    <h2 className='text-white text-[24px] font-[500] tracking-wide underline lg:w-[600px]'>Let’s increase your skills in pandemic with Ziro Workshops 2020</h2>
                    <p className='text-[15px] text-white lg:w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
</div>
  );
};

export default HomeLatestNews;