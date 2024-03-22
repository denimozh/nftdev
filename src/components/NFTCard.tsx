
import React from 'react'

const NFTCard = ({name}:{name:string}, {price}:{price:number}, {img}:{img:string}) => {
  return (
    <div className='flex flex-col p-4'>
      <div className='w-full h-1/2'>
        <img src={img} alt='123'/>
      </div>
      <div className='flex flex-row justify-between'>
        <p>{name}</p>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div className='flex flex-row justify-between'>
        <p>Price</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default NFTCard