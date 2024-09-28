import React from 'react'
export default function ClipCard(props) {
  return (
    <div className='flex mb-10 max-md:flex-col font-Montserrat'>
          <img className='max-md:w-[25%] max-sm:w-[30%]' src={props.img} alt="" />
          <div className='mx-5 max-md:mx-0'>
              <p className='text-xl font-semibold max-sm:text-lg'>{props.title}</p>
              <p className='text-[#707c84]'>{props.text}</p>
          </div>
    </div>
  )
}