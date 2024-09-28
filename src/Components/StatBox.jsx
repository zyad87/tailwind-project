import React from 'react';

export default function StatBox({ icon, num, text }) {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2">
      {/* Icon */}
      <img className='w-[45px] md:w-[60px] mb-2' src={icon} alt="icon" />
      {/* Number */}
      <p className='text-3xl md:text-4xl font-Fraunces font-semibold my-2 text-[#131516]'>{num}</p>
      {/* Text */}
      <p className='font-Montserrat text-xs md:text-sm font-semibold tracking-widest text-[#707c84]'>{text}</p>
    </div>
  );
}
