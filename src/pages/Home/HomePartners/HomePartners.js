import React from 'react';
import img from '../../../assests/partnersLogo/img.png';
import img2 from '../../../assests/partnersLogo/img2.png';
import img3 from '../../../assests/partnersLogo/img3.png';
import img4 from '../../../assests/partnersLogo/img4.png';
import img5 from '../../../assests/partnersLogo/img5.png';
const HomePartners = () => {
  return (
    <div className='w-[75%] mx-auto py-36'>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10'>
        <img className='h-7' src={img} alt="" />
        <img className='h-7' src={img2} alt="" />
        <img className='h-7' src={img3} alt="" />
        <img className='h-7' src={img4} alt="" />
        <img className='h-7' src={img5} alt="" />
      </div>
    </div>
  );
};

export default HomePartners;