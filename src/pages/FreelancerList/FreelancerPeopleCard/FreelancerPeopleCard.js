import React from 'react';
const FreelancerPeopleCard = () => {
  const allPerson = [
    {
      id: 1,
      img: 'https://i.ibb.co/Cz8JTqH/placeholder-1.png',
      name: "Angela Moss",
      profession: "Content Writer",
      starReview: 4.3,
      country: "New York, US",
      joining: "oct 2018",
      rate: "$50/hr",
      review: "4 Days ago",
      active: true
    },
    {
      id: 2,
      img: 'https://i.ibb.co/HtgnFSJ/placeholder-2.png',
      name: "Jimmy Lee",
      profession: "Programmer",
      starReview: 4.3,
      country: "Jakarta, Indoneisa",
      joining: "oct 2014",
      rate: "$26/hr",
      review: "4 Days ago",
      active: false
    },
    {
      id: 3,
      img: 'https://i.ibb.co/bmgrjfC/placeholder-3.png',
      name: "Melinda Humbles",
      profession: "Graphic Designer",
      starReview: 3.0,
      country: "New York",
      joining: "oct 2020",
      rate: "$92/hr",
      review: "4 Days ago",
      active: true
    },
    {
      id: 4,
      img: 'https://i.ibb.co/kc7LRJh/placeholder-4.png',
      name: "Jordan Sigh",
      profession: "Content Writer",
      starReview: 4.3,
      country: "New York",
      joining: "oct 2020",
      rate: "$38/hr",
      review: "4 Days ago",
      active: true
    },
    {
      id: 5,
      img: 'https://i.ibb.co/dQ8Nbmt/placeholder-5.png',
      name: "Mahmuda",
      profession: "Programmer",
      starReview: 4.3,
      country: "Jakarta, Indonesia",
      joining: "oct 2014",
      rate: "$26/hr",
      review: "4 Days ago",
      active: false
    },
    {
      id: 6,
      img: 'https://i.ibb.co/C2rQPPG/placeholder-6.png',
      name: "Roberto Karloz",
      profession: "Photographer",
      starReview: 3.0,
      country: "New York",
      joining: "oct 2020",
      rate: "$92/hr",
      review: "4 Days ago",
      active: true
    },
    {
      id: 7,
      img: 'https://i.ibb.co/f81f3QT/placeholder-7.png',
      name: "Gwen Claudya",
      profession: "Programmer",
      starReview: 4.3,
      country: "Jakarta Indonsia",
      joining: "oct 2014",
      rate: "$26/hr",
      review: "4 Days ago",
      active: false
    },
    {
      id: 8,
      img: 'https://i.ibb.co/j6kbqMy/placeholder-8.png',
      name: "Bella Smith",
      profession: "Content Writer",
      starReview: 4.3,
      country: "New York",
      joining: "oct 2020",
      rate: "$38/hr",
      review: "4 Days ago",
      active: true
    },
    {
      id: 9,
      img: 'https://i.ibb.co/ncVQYPP/placeholder-9.png',
      name: "Samantha William",
      profession: "Programmer",
      starReview: 4.3,
      country: "Jakarta, Indonesia",
      joining: "oct 2014",
      rate: "$26/hr",
      review: "4 Days ago",
      active: false
    },
    {
      id: 10,
      img: 'https://i.ibb.co/pZkLcdL/placeholder-10.png',
      name: "Kokom",
      profession: "Photgrapher",
      starReview: 3.0,
      country: "New York",
      joining: "oct 2020",
      rate: "$92/hr",
      review: "4 Days ago",
      active: true
    },
    {
      id: 11,
      img: 'https://i.ibb.co/fpwdXBt/placeholder-11.png',
      name: "Fanny Fancyson",
      profession: "Programmer",
      starReview: 4.3,
      country: "Jakarta, Indonesia",
      joining: "oct 2014",
      rate: "$92/hr",
      review: "4 Days ago",
      active: false
    },
    {
      id: 12,
      img: 'https://i.ibb.co/b1nPNhj/placeholder-12.png',
      name: "Louis Anderson",
      profession: "Content Writer",
      starReview: 4.3,
      country: "New York",
      joining: "oct 2020",
      rate: "$38/hr",
      review: "4 Days ago",
      active: true
    },
  ]
  return (
    <div>
      <div className="primary-width">
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-12'>
          {
            allPerson?.map(person => <div key={person.id} className='border pt-7 rounded-3xl relative'>
              <div className='flex gap-[2px] font-bold absolute right-7'>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
              <div className='flex justify-center'>
                <img className='w-24' src={person?.img} alt="" />
              </div>
              <div className='flex justify-center -mt-4 mb-6'>
                <div className={`flex items-center gap-2 text-white px-4 py-[6px] rounded-full ${person.active ? "bg-[#30C736]" : "bg-[#8A8A8A]"}`}><i className="fa-solid fa-circle text-[8px]"></i> <span className='uppercase cardText text-[14px] font-bold'>{person.active ? 'available' :'unavailable'}</span></div>
              </div>
              <div className='text-center'>
                <h3 className='text-color text-2xl font-semibold leading-9 font-poppins'>{person.name}</h3>
                <p className='cardText text-[15px] leading-[20px] my-2'>{person.profession}</p>
                <div className='flex items-center gap-4 justify-center'>
                  <p className='flex gap-1'>
                    <i className="text-[#FF8412] fa-solid fa-star"></i>
                    <i className="text-[#FF8412] fa-solid fa-star"></i>
                    <i className="text-[#FF8412] fa-solid fa-star"></i>
                    <i className="text-[#FF8412] fa-solid fa-star"></i>
                    <i className="text-[#D8D8D8] fa-solid fa-star"></i>
                  </p>
                  <p className='cardText font-bold'>{person.starReview}</p>
                </div>
              </div>
              <div className='px-6 my-7'>
                <div className='flex items-center justify-between'>
                  <p className='text-[#636363] text-[14px] cardText font-semibold'>From</p>
                  <p className='text-[#000000] text-[14px] cardText font-semibold'>{person.country}</p>
                </div>
                <div className='flex items-center justify-between my-2'>
                  <p className='text-[#636363] text-[14px] cardText font-semibold'>Member since</p>
                  <p className='text-[#000000] text-[14px] cardText font-semibold'>{person.joining}</p>
                </div>
                <div className='flex items-center justify-between mb-2'>
                  <p className='text-[#636363] text-[14px] cardText font-semibold'>Rate</p>
                  <p className='text-[#000000] text-[14px] cardText font-semibold'>{person.rate}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-[#636363] text-[14px] cardText font-semibold'>Latest Review</p>
                  <p className='text-[#000000] text-[14px] cardText font-semibold'>{person.review}</p>
                </div>
              </div>
            </div>)
          }
        </div>
        <div className='flex justify-center mt-16'>
          <div className='flex gap-6'>
            <div className='flex items-center gap-3 primary-color  cursor-pointer'>
              <i className="fa-solid fa-angles-left"></i>
              <p>Previous</p>
            </div>
            <div className='flex px-4 rounded-full bg-[#ECDEFF] text-[18px] font-[500]'>
              <p className='primary-color py-2 px-5 rounded-full text-white'>1</p>
              <p className='primary-colorbg py-2 px-5 rounded-full text-white'>2</p>
              <p className='primary-color py-2 px-5 rounded-full text-white'>3</p>
              <p className='primary-color py-2 px-5 rounded-full text-white'>4</p>
            </div>
            <div className='flex items-center gap-3 primary-color cursor-pointer'>
              <p>Next</p>
              <i className="fa-solid fa-angles-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerPeopleCard;