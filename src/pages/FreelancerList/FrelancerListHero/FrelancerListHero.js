import React from 'react';
import Slider from 'react-slick';
import first from '../../../assests/featureLogo/first.PNG'
import second from '../../../assests/featureLogo/second.PNG'
import third from '../../../assests/featureLogo/third.PNG'
import fourth from '../../../assests/featureLogo/fourth.PNG'
import left from '../../../assests/featureLogo/arrowLeft.png'
import right from '../../../assests/featureLogo/arrowRight.png'
const heroBg = 'https://i.ibb.co/26whZRd/background.png';
const logo = 'https://i.ibb.co/Bg6V6H7/origami-1-1.png';
const FrelancerListHero = () => {

  var settings = {
    arrows: true,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <img className='h-12 w-12' src={right} alt='' />,
    prevArrow: <img className='h-12 w-12' src={left} alt='' />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const sliderContent = [
    {
      image: first,
      name: 'David Hutapea',
      profe: 'UI/UX Designer',
      time: 84,
      rating: 4.3
    },
    {
      image: second,
      name: 'Henry Simatupang',
      profe: 'Photographer',
      time: 95,
      rating: 4.8
    },
    {
      image: third,
      name: 'Jennie Smith',
      profe: 'Content Writer',
      time: 86,
      rating: 4.6
    },
    {
      image: fourth,
      name: 'Louis Anderson',
      profe: 'Customer Service',
      time: 27,
      rating: 4.3
    },
    {
      image: third,
      name: 'Jennie Smith',
      profe: 'Content Writer',
      time: 86,
      rating: 4.6
    },
    {
      image: fourth,
      name: 'Louis Anderson',
      profe: 'Customer Service',
      time: 27,
      rating: 4.3
    },
    {
      image: second,
      name: 'Henry Simatupang',
      profe: 'Photographer',
      time: 95,
      rating: 4.8
    },
    {
      image: third,
      name: 'Henry Simatupang',
      profe: 'Photographer',
      time: 95,
      rating: 4.8
    },
    {
      image: second,
      name: 'Henry Simatupang',
      profe: 'Photographer',
      time: 95,
      rating: 4.8
    },
    {
      image: third,
      name: 'Henry Simatupang',
      profe: 'Photographer',
      time: 95,
      rating: 4.8
    },
    {
      image: first,
      name: 'Henry Simatupang',
      profe: 'Photographer',
      time: 95,
      rating: 4.8
    }
  ]

  return (
    <div className='mb-44'>
      <div className='h-[130vh] bg-no-repeat bg-cover z-0' style={{
        backgroundImage: `url(${heroBg})`,
        zIndex: '-50'
      }}>
        <div className='pt-20'>
          <div className='w-[800px] mx-auto text-center'>
            <div className='flex justify-center'>
              <img src={logo} alt="" />
            </div>
            <h2 className='text-[40px] leading-[66px] font-[500] text-[#1F2131]'>Search over <span className='text-[#5F4BDB]'>30,000+</span> talented freelancers in the world through ziro</h2>
          </div>
          <div className=''>
            <div className='flex items-center justify-between w-1/2 mx-auto bg-white rounded-full pl-3 mt-16'>
              <div className='flex items-center flex-wrap'>
                <div className='flex items-center px-3 py-2'>
                  <i className="fa-solid fa-location-dot text-[#5F4BDB]"></i>
                  <select className='outline-none px-3 appearance-none text-[#363848]'>
                    <option value="newest">Loacation</option>
                    <option value="newest">Loacation</option>
                    <option value="newest">Loacation</option>
                    <option value="newest">Loacation</option>
                  </select>
                  <i className="fa-solid fa-angle-down text-[#D2D2D2]"></i>
                </div>
                <div className='flex items-center px-3 py-2'>
                  <select className='outline-none px-3 appearance-none text-[#363848]'>
                    <option value="newest">Tittle</option>
                    <option value="newest">Loacation</option>
                    <option value="newest">Loacation</option>
                    <option value="newest">Loacation</option>
                  </select>
                  <i className="fa-solid fa-angle-down text-[#D2D2D2]"></i>
                </div>
                <div>
                  <input type="text" className='outline-none' placeholder='Search here...' />
                </div>
              </div>
              <div>
                {/* <input className='bg-[#FE8D4D] px-5' type="submit" value='Search' /> */}
                <button className='bg-[#FE8D4D] flex items-center gap-2 px-6 py-2 rounded-full text-white my-2 mr-2'><span>Search</span> <i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <div className='primary-width'>
              <div className='flex flex-wrap w-[70%] mx-auto justify-center gap-4'>
                <p className='border px-5 py-2 rounded-full bg-[#F8F9FD]'>Web Dev</p>
                <p className='border px-5 py-2 rounded-full bg-[#F8F9FD]'>Mobile Dev</p>
                <p className='border px-5 py-2 rounded-full bg-[#F8F9FD]'>Design</p>
                <p className='border px-5 py-2 rounded-full bg-[#F8F9FD]'>Writing</p>
                <p className='border px-5 py-2 rounded-full bg-[#F8F9FD]'>Admin Support</p>
                <p className='border px-5 py-2 rounded-full bg-[#F8F9FD]'>Customer Service</p>
                <p className='border px-5 py-2 rounded-full bg-[#F8F9FD]'>Marketing</p>
                <p className='border px-5 py-2 rounded-full bg-[#F8F9FD]'>Accounting</p>
                <p className='border px-5 py-2 rounded-full bg-[#F8F9FD] border-[#5F4BDB] primary-color'>Try advance search mode</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[90%] mx-auto mt-14'>
          <h3 className='text-color text-[28px] font-semibold font-poppins leading-[48px] mb-10'>Featured this week</h3>
          <div>
            <Slider {...settings}>
              {sliderContent.map((content, idx) => <div key={idx} className='slidCardShadow mx-6 rounded-lg px-5 py-4 bg-white'>
                <div className='flex items-center z-50'>
                  <img className='w-[70px] object-cover' src={content.image} alt="" />
                  <div>
                    <h5 className=' text-color 2xl:text-[18px] font-semibold lg:text-[17px] text-[17px]'>{content.name}</h5>
                    <p className='text-[#000000] 2xl:text-[15px] lg:text-[14px] text-[14px]'>{content.profe}</p>
                  </div>
                </div>
                <div className='flex items-center justify-between my-4'>
                  <div className='flex gap-5'>
                    <div>
                      <i className="text-[#FE8D4D] fa-solid fa-star"></i>
                      <i className="text-[#FE8D4D] fa-solid fa-star"></i>
                      <i className="text-[#FE8D4D] fa-solid fa-star"></i>
                      <i className="text-[#FE8D4D] fa-solid fa-star"></i>
                      <i className="text-[#D8D8D8] fa-regular fa-star"></i>
                    </div>
                    <p className='font-semibold'>{content.rating}</p>
                  </div>
                  <button className='bg-[#FE8D4D] px-4 py-2 rounded-full font-semibold text-[16px] text-white'>${content.time}/hr</button>
                </div>
              </div>)}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrelancerListHero;