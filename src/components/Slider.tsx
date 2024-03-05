import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import binance from "./images/binance.png"
import coinbase from "./images/coinbase.png"
import opensea from "./images/opensea.svg"

const Slider = () => {
  return (
    <Marquee className='w-full h-fit flex flex-row items-center loop'>
      <Image src={binance} height={100} width={400} alt='pic' className='px-8'/>
      <Image src={coinbase} height={100} width={400} alt='pic' className='pb-4 px-8'/>
      <Image src={opensea} height={100} width={400} alt='pic' className='px-8'/>
      <Image src={binance} height={100} width={400} alt='pic' className='px-8'/>
      <Image src={coinbase} height={100} width={400} alt='pic' className='pb-4 px-8'/>
      <Image src={opensea} height={100} width={400} alt='pic' className='px-8'/>
    </Marquee>
  )
}

export default Slider