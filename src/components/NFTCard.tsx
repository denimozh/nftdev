"use client"
import React, { useState } from 'react'
import { FaEthereum } from "react-icons/fa";
import { FaHeart } from 'react-icons/fa6';

interface Props{
  name: string,
  price: number,
  img: string,
}

const NFTCard: React.FC<Props> = ({name, price, img}) => {
  const [heart, setHeart] = useState(false);
  let color = "";
  if (heart == true){
    color = "text-red-500"
  } else {
    color = "text-white"
  }

  return (
    <div className='relative flex flex-col p-4'>
      <div className='bg-white p-5 rounded-[30px]'>
        <div className=''>
          <img src={img} alt='123' className='h-[500px] w-[400px] rounded-[20px]'/>
        </div>
        <div className='pt-5'>
          <div className='flex flex-row justify-between'>
            <p className='text-3xl'>{name}</p>
            <p className='text-3xl items-center'><FaEthereum/></p>
          </div>
          <div className='flex flex-row justify-between pt-5'>
            <p className='text-xl text-gray-400'>Price</p>
            <p className='pr-1 text-2xl font-semibold text-blue-600'>{price} ETH</p>
          </div>
        </div>
        <div className='group absolute top-12 right-12 rounded-full backdrop-blur-xl border bg-gray-400 border-white ease-in-out duration-500'>
            <p onClick={() => setHeart(!heart)} 
            className={`text-[24px] p-[10px] ${color} group-hover:text-red-400 group-active:text-red-500 ease-in-out duration-500`}>
                <FaHeart/>
            </p>
        </div>
      </div>
    </div>
  )
}

export default NFTCard