import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../../assests/logo/logo.png';
const NavBar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const stickyNav = () => {
    if (window.scrollY >= 90) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  window.addEventListener("scroll", stickyNav);
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${scrollNav ?'py-3 bg-white shadow-md':"py-8"}`}>
      <div className='w-[90%] mx-auto flex justify-between items-center'>
        <div>
          <Link to='/'><img className='xl:h-[57px]' src={navLogo} alt="" /></Link>
        </div>
        <div className='xl:block hidden'>
          <ul className='flex 2xl:gap-12 xl:gap-6 gap-4 2xl:text-[18px] xl:text-[18px] text-[16px]'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/application-form'>Application</Link></li>
            <li><Link to='/event-list'>Even-List</Link></li>
            <li><Link to='/freelancer-list'>Freelancer-List</Link></li>
          </ul>
        </div>
        <div className='lg:block hidden'>
          <div className='flex gap-5 items-center'>
            <div className='navbarSearchInput'>
              <input className='bg-gray-50 2xl:h-[60px] xl:h-[50px] h-[45px] 2xl:w-[375px] border outline-none px-8 rounded-full placeholder:text-[16px] placeholder:font-normal' type="search" name="" id="" placeholder='Search here...' />
              <i className="fa-solid fa-magnifying-glass navbarIcon"></i>
            </div>
            <button className='2xl:h-[60px] xl:h-[50px] h-[45px] bg-[#F0EEFF] px-10 rounded-full xl:text-[18px] text-[16px] font-[600] text-[#363848]'><Link href="">Log In</Link></button>
            <button className='2xl:h-[60px] xl:h-[50px] h-[45px] bg-[#5F4BDB] shadow shadow-[#7a69ec7a] text-white xl:text-[18px] text-[16px] font-[600] px-10 rounded-full'><Link href="">Sign Up</Link></button>

            <div onClick={() => setToggle(!toggle)} className='cursor-pointer'>
              {toggle ? <i className="fa-solid fa-xmark text-[26px] pl-1 xl:hidden block"></i> : <i className="fa-solid fa-bars text-2xl xl:hidden block"></i>}
            </div>
          </div>
        </div>
        <div onClick={() => setToggle(!toggle)} className='cursor-pointer lg:hidden block'>
          {toggle ? <i className="fa-solid fa-xmark text-[26px] pl-1 xl:hidden block"></i> : <i className="fa-solid fa-bars text-2xl xl:hidden block"></i>}
        </div>
      </div>

      <div className={`absolute left-6 top-28 bg-[#5F4BDB] pl-4 pr-8 py-10 rounded-md origin-left transition-all duration-300 ${toggle ? 'scale-x-100' : "scale-x-0"} xl:hidden block z-50`}>
        <div className='relative'>
          <div>
            <ul className='grid gap-2 text-white font-[500]'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/application-form'>Application</Link></li>
              <li><Link to='/event-list'>Even-List</Link></li>
              <li><Link to='/freelancer-list'>Freelancer-List</Link></li>
            </ul>
            <div className='navbarSearchInput mt-5'>
              <input className='bg-gray-50 py-2 border outline-none px-8 rounded-full placeholder:text-[16px] placeholder:font-normal border-[#a09f9f]' type="search" name="" id="" placeholder='Search here...' />
              <i className="fa-solid fa-magnifying-glass navbarIcon"></i>
            </div>
            <button className='bg-[#F0EEFF] px-10 rounded-full text-[16px] font-[600] py-2 mt-5 text-[#363848] lg:hidden block'><Link href="">Log In</Link></button>
          </div>
          <i onClick={() => setToggle(!toggle)} className="fa-solid fa-xmark text-[26px] text-white -top-8 -right-5 py-2 px-[14px] bg-[#7e6dee] rounded-full absolute cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;