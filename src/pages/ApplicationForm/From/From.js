import React from 'react';

const From = () => {
  return (
    <div>
      <h2 className='text-[24px] font-semibold text-color font-poppins leading-[36px]'>Fill the job applications</h2>
      <form>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-7'>
          <div>
            <label className='text-[#1F2131] leading-6 font-[500] font-poppins'>First Name</label>
            <input className='border py-2 px-4 rounded-full w-full outline-[#5F4BDB] placeholder:text-[14px] bg-[#FBFBFB] mt-2' type="text" name='fName' placeholder='Type here' />
          </div>
          <div>
            <label className='text-[#1F2131] leading-6 font-[500] font-poppins'>Middle Name</label>
            <input className='border py-2 px-4 rounded-full outline-[#5F4BDB] placeholder:text-[14px] bg-[#FBFBFB] mt-2 w-full' type="text" name='mName' placeholder='Type here' />
          </div>
          <div>
            <label className='text-[#1F2131] leading-6 font-[500] font-poppins'>Last Name</label>
            <input className='border py-2 px-4 rounded-full outline-[#5F4BDB] placeholder:text-[14px] bg-[#FBFBFB] mt-2 w-full' type="text" name='lName' placeholder='Type here' />
          </div>
          <div>
            <label className='text-[#1F2131] leading-6 font-[500] font-poppins'>Birth Date</label>
            <input className='border py-2 px-4 rounded-full outline-[#5F4BDB] placeholder:text-[14px] bg-[#FBFBFB] w-full mt-2' type="date" name='bDate' />
          </div>
          <div>
            <label className='text-[#1F2131] leading-6 font-[500] font-poppins'>Email Address</label>
            <input className='border py-2 px-4 rounded-full outline-[#5F4BDB] placeholder:text-[14px] bg-[#FBFBFB] mt-2 w-full' type="email" name='email' placeholder='Type here' />
          </div>
          <div>
            <label className='text-[#1F2131] leading-6 font-[500] font-poppins'>Phone Number</label>
            <input className='border py-2 px-4 rounded-full outline-[#5F4BDB] placeholder:text-[14px] bg-[#FBFBFB] mt-2 w-full' type="number" name='number' placeholder='Type here' />
          </div>
        </div>
      
      <div>
        <p className='text-[#1F2131] font-[500] mb-5 mt-8'>About You</p>
        <div className='border border-[#C2C2C2] text-[#363848] rounded-3xl p-5 bg-[#FBFBFB]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta su</p>
        </div>
      </div>
        <div>
          <h4 className='text-[#1F2131] font-[500] mb-5 mt-12'>Attach your resume</h4>
          <div className='flex gap-7 flex-wrap'>
            <div className='flex gap-3 bg-[#F5F5F5] py-3 pl-3 w-[300px] rounded-2xl border border-dashed border-[#C2C2C2]'>
              <img src="https://i.ibb.co/kXSdC96/XMLID-270.png" className='bg-[#5F4BDB] p-3 rounded-xl' alt="" />
              <div>
                <p className='text-color cardText font-semibold'>Upload Files</p>
                <p className='text-[#A5A5A5] text-[14px] cardText font-semibold'>PDF, DOC, PPT, JPG, PNG</p>
              </div>
            </div>
            <div className='border border-[#5F4BDB] flex items-center rounded-2xl py-3 pl-3 pr-10  gap-3 relative'>
              <div>
                <i className="fa-solid fa-file bg-[#F6EEFF] text-[#5F4BDB] py-4 px-5 rounded-2xl text-[18px]"></i>
              </div>
              <div>
                <p className='text-color cardText font-semibold'>Contact_2020.pdf</p>
                <p className='text-[#5F4BDB] text-[14px] cardText font-semibold'>456 KB</p>
              </div>
              <p className='absolute right-0 -top-[14px] cursor-pointer'><i className="fa-solid fa-circle-xmark text-red-600"></i></p>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-16'>
          <input type="submit" className='bg-[#5F4BDB] font-poppins text-[#FFFDFD] px-10 py-[10px] rounded-full' />
          <div>
            <button className='bg-[#F4F4F4] px-8 py-[10px] rounded-full text-[#9F9F9F] font-[500]'>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default From;