import React from 'react';

const HomeModal = () => {
  return (
    <div className='z-50'>
      {/* The button to open modal */}
      

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className=" relative">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Eyoq0cJ43Pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className="modal-action absolute bg-[#5F4BDB] py-2 px-4 rounded-full cursor-pointer -top-16 right-0">
            <label htmlFor="my-modal" className="cursor-pointer text-white text-[18px] font-semibold">X</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;