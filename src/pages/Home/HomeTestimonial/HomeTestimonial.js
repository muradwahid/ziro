import React from 'react';
import Slider from 'react-slick';
const profile = 'https://i.ibb.co/DgZLJdF/author-Profile.png';
const quote = 'https://i.ibb.co/Y8JSmLn/quote.png';
const customar = 'https://i.ibb.co/H2zhy7s/customers.png';
const HomeTestimonial = () => {

  const textimonialContent = [
    {
      name: 'William Smith',
      image: profile,
      profe: 'CEO of True Love Studios',
      dis: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
      rating: 4.8
    },
    {
      name: 'William Smith',
      image: profile,
      profe: 'CEO of True Love Studios',
      dis: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
      rating: 4.8
    },
    {
      name: 'William Smith',
      image: profile,
      profe: 'CEO of True Love Studios',
      dis: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
      rating: 4.8
    },
  ]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    nextArrow: <div><i className="fa-solid fa-arrow-right-long right-arrow-slider-pro lg:bottom-[-8vw]  -bottom-[35vw]"></i></div>,
    prevArrow: <div><i className="fa-solid fa-arrow-left-long left-arrow-slider-pro lg:left-[35vw] lg:bottom-[-8vw] left-44 -bottom-[8vw]"></i></div>,
    
  };
  return (
    <div className='w-[78%] mx-auto mb-20'>
      <h2 className='text-[#363848] text-[35px] font-semibold text-center mb-6'>What our Customer Says</h2>
      <div className='flex justify-center'>
        <p className='text-[#00000099] w-[580px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
      <div className='mt-24'>
        <Slider {...settings}>
          {
            textimonialContent.map((content, idx) => <div key={idx} className=' pb-20'>
              <div className='flex items-center lg:flex-row flex-col gap-12'>
                <div className='w-[450px]'>
                  <img className='object-cover' src={quote} alt="" />
                  <img className='object-cover h-[350px]' src={content.image} alt="" />
                </div>
                <div className='w-[65%] mt-12'>
                  <div className='flex justify-between items-center'>
                    <div className='mb-5'>
                      <h5 className='text-[20px] font-semibold text-color mb-2'>{content.name}</h5>
                      <p>{content.profe}</p>
                    </div>
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
                  </div>
                  <p>{content.dis}</p>
                  <div className='flex justify-end h-[57px] mt-6'>
                    <img src={customar} alt="" />
                  </div>
                </div>
              </div>
            </div>)
          }
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonial;