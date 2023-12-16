import React from 'react'

const ClientCard = ({review}) => {
    const {image, author, message} = review;
  return (
    <div className='flex flex-col items-center gap-5 text-center'>
        <img src={image} alt={author} />
        <h4 className='border-b-2 border-gray-400 inline-block pb-4'>{author}</h4>
        <p>{message}</p>
    </div>
  )
}

export default ClientCard