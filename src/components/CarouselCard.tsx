"use client"

import React from 'react'
import nft1 from "./images/nft1.png"
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
import { FaEthereum } from "react-icons/fa";

const CarouselCard = () => {
  const [heart, setHeart] = useState(false);
  let color = "";
  if (heart == true){
    color = "text-red-500"
  } else {
    color = "text-white"
  }
  return (
    <div className='relative bg-white shadow-xl flex flex-col gap-4 w-[500px] rounded-[20px]'>
        <div className='p-2 rounded-[20px]'>
            <Image src={nft1} width={500} height={200} alt='image' className='rounded-[20px]'/>
        </div>
        <div className='flex flex-row px-10 justify-between'>
            <p className='text-3xl font-medium'>Nine Lives</p>
            <p className='text-3xl'><FaEthereum/></p>
        </div>
        <div className='flex flex-row px-10 justify-between'>
            <p className='text-xl'>Highest Bid 1/1</p>
        </div>
        <div className='flex flex-row px-10 pb-6 justify-between'>
            <p className='text-2xl text-gray-300'>Price</p>
            <p className='text-3xl text-blue-600 font-semibold'>0.024 ETH</p>
        </div>
        <div className='group absolute top-5 right-5 rounded-full backdrop-blur-xl border bg-gray-400 border-white ease-in-out duration-500'>
            <p onClick={() => setHeart(!heart)} 
            className={`text-3xl p-3 ${color} group-hover:text-red-400 group-active:text-red-500 ease-in-out duration-500`}>
                <FaHeart/>
            </p>
        </div>
    </div>
  )
}

export default CarouselCard