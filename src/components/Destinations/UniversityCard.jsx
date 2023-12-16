import React from 'react'

const UniversityCard = ({university}) => {
    const {image, name, rating, status, location} = university;
  return (
    <div className='bg-white rounded-lg shadow-lg'>
        <div>
        <img className='h-80 w-full' src={image} alt={name} />
        </div>
        <h3 className='md:text-[20px] text-[17px] font-extrabold md:p-5 p-2'>{name}</h3>
        <div className='flex justify-between items-center md:p-5 p-2'>
        <p className='font-medium text-[13px]'>{location}</p>
        <button className='bg-gray-200 w-10 h-10 font-bold rounded-full text-2xl flex flex-col items-center'>...</button>
        </div>
    </div>
  )
}

export default UniversityCard