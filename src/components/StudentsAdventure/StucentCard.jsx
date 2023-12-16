import React from 'react'

const StucentCard = ({student}) => {
    const {image, name, descriptions} = student;
  return (
    <div className='flex md:flex-row flex-col items-center gap-2 bg-white shadow-2xl mb-[50px] p-3 rounded-lg lg:max-w-[360px]'>
        <img className='' src={image} alt="" />
        <div className='md:text-start text-center'>
        <h5 className='font-medium'>{name}</h5>
        <p>{descriptions}</p>
        </div>
    </div>
  )
}

export default StucentCard