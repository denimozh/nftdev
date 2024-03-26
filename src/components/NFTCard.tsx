
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
      <div className='w-full h-1/2'>
        <img src={img} alt='123'/>
      </div>
      <div className='flex flex-row justify-between'>
        <p>{name}</p>
        <p><FaEthereum/></p>
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