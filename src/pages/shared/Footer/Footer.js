import React from 'react';
const logo = 'https://i.ibb.co/C087CxZ/logo.png';
const Footer = () => {
  return (
    <div className='bg-[#363843]'>
      <div className='primary-width'>
        <div className='flex justify-between items-center lg:flex-row flex-col py-24'>
          <div className='lg:w-[58%]'>
            <h1 className='lg:text-[35px] text-[26px] text-white font-semibold tracking-wider'>Don’t miss our weekly updates about freelancer career</h1>
          </div>
          <div className='lg:mt-0 mt-5'>
            <div className='border border-[#4e505c] px-2 py-[6px] pl-10 rounded-full'>
              <input className='placeholder:text-[#72737C] bg-transparent w-60 outline-none text-white' type="search" placeholder='Enter your email address...'/>
              <button type='submit' className='text-white bg-[#FE8D4D] px-6 py-3 rounded-full'>subscribe</button>
            </div>
          </div>
        </div>
        <div className='lg:flex gap-20 md:grid md:grid-cols-3 grid-cols-1 gapY-20 justify-center'>
          <div className='lg:w-[30%]'>
            <img src={logo} alt="" />
            <p className='text-white leading-[24px] mt-6'>Ziro is a Freelance Landing Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            <div className='text-[18px] flex gap-3 text-[#72737C] mt-5'>
              <i className="fa-brands fa-facebook-f transition-all duration-500 cursor-pointer hover:bg-[#3CB5DB] hover:text-white py-3 px-4 rounded-full"></i>
              <i className="fa-brands fa-twitter transition-all duration-500 cursor-pointer hover:bg-[#3CB5DB] hover:text-white py-3 px-3 rounded-full"></i>
              <i className="fa-brands fa-youtube transition-all duration-500 cursor-pointer hover:bg-[#3CB5DB] hover:text-white py-3 px-3 rounded-full"></i>
              <i className="fa-brands fa-linkedin transition-all duration-500 cursor-pointer hover:bg-[#3CB5DB] hover:text-white py-3 px-3 rounded-full"></i>
              <i className="fa-brands fa-instagram transition-all duration-500 cursor-pointer hover:bg-[#3CB5DB] hover:text-white py-3 px-3 rounded-full"></i>
            </div>
          </div>
          <div className='md:my-0 my-10 md:text-left text-center'>
            <ul className='text-white font-poppins grid gap-4'>
            <li className='text-[20px] font-semibold'>Ziro</li>
              <li>Why Ziro</li>
              <li>Enterprise</li>
              <li>Customer Story</li>
              <li>Security</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className='md:text-left text-center'>
            <ul className='text-white font-poppins grid gap-4'>
              <li className='text-[20px] font-semibold'>Resources</li>
              <li>Download</li>
              <li>Help Center</li>
              <li>Events</li>
              <li>Guides</li>
              <li>Partners</li>
              <li>Directories</li>
            </ul>
          </div>
          <div className='md:my-0 my-10 md:text-left text-center'>
            <ul className='text-white font-poppins grid gap-4'>
              <li className='text-[20px] font-semibold'>Company</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Products</li>
              <li>Login</li>
              <li>Sign Up</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='lg:w-[30%] md:text-left text-center'>
            <ul className='text-white font-poppins grid gap-4'>
              <li className='text-[20px] font-semibold md:text-left text-center'>Get in Touch with Us</li>
              <li className='leading-6 flex items-center gap-4 md:text-left text-center'><i className="text-2xl fa-solid fa-location-dot"></i> <p>832  Thompson Drive, San Fransisco
                CA 94107, United States</p></li>
              <li className='flex items-center gap-4 md:text-left text-center'><i className="text-2xl fa-solid fa-phone"></i><p>+123 345123 556</p></li>
              <li className='flex items-center gap-4 md:text-left text-center'><i className="text-2xl fa-regular fa-envelope"></i><p>support@ziro.id</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-[#4e505c] mt-20'>
        <div className='primary-width flex items-center justify-between lg:flex-row flex-col py-6 text-white'>
          <p>Ziro Freelancer Landing Website  -   © 2020 All Rights Reserved</p>
          <p>Made with <span className='text-red-700'>♥</span> by Peterdraw</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;