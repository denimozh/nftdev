
import React from 'react'
import { FaEthereum } from "react-icons/fa";

interface Props{
  name: string,
  price: number,
  img: string,
}

const NFTCard: React.FC<Props> = ({name, price, img}) => {
  return (
    <div className='flex flex-col p-4'>
      <div className='bg-white p-5 rounded-[30px]'>
        <div className=''>
          <img src={img} alt='123' className='h-[450px] w-[400px] rounded-[20px]'/>
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
      </div>
    </div>
  )
}

export default NFTCard