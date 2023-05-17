import React from 'react';
import Slider from 'react-slick';
import first from '../../../assests/featureLogo/first.PNG'
import second from '../../../assests/featureLogo/second.PNG'
import third from '../../../assests/featureLogo/third.PNG'
import fourth from '../../../assests/featureLogo/fourth.PNG'
import left from '../../../assests/featureLogo/arrowLeft.png'
import right from '../../../assests/featureLogo/arrowRight.png'
const HomeFeature = () => {
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
    <div className='primary-width'>
      <div className='flex justify-between items-center mb-16'>
        <h4 className='text-[28px] text-color font-semibold'>Featured profile this week</h4>
        <p className='primary-color font-semibold'>View more</p>
      </div>
      <Slider {...settings}>
        {sliderContent.map((content, idx) => <div key={idx} className='slidCardShadow mx-6 rounded-lg px-5 py-4'>
          <div className='flex items-center z-10'>
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
  );
};

export default HomeFeature;