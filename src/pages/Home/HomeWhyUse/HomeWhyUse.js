import React from 'react';

const HomeWhyUse = () => {
  const useCard = [{
    id:1,
    header: 'Trusted',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.ibb.co/2hGQ87s/icon.png'
  }, {
    id:2,
    header: 'Easy to Use',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.ibb.co/qyHrNVV/icon-1.png'
    }, {
    id:3,
    header: 'Faster',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://i.ibb.co/zN9t7j4/icon-2.png'
  }]
  return (
    <div className='w-[75%] mx-auto text-[#363848] my-40'>
      <h2 className='text-4xl font-semibold leading-[60px] text-center'>Why Choose Us</h2>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
      <p className='text-center'>eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10'>
        {useCard.map(singleCard => <div className='cardShadow px-6 py-8 rounded-xl cursor-pointer cardShadowHover' key={singleCard.id}>
        <img src={singleCard.image} alt="" />
          <h4 className='text-[26px] py-2 font-semibold'>{singleCard.header}</h4>
          <p className='text-[16px]'>{singleCard.text}</p>
      </div>)}
      </div>
    </div>
  );
};

export default HomeWhyUse;