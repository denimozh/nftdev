import React from 'react'
import nft2 from "./images/nft2.png"
import Image from 'next/image'

const CTA = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-black animate-bgMove rounded-t-[40px] h-[500px]'>
        <div className='flex flex-row p-14 gap-32'>
          <div className='flex flex-col justify-between basis-[60%] pb-5'>
            <p className='text-6xl text-white'>Invest into the Future Of Art</p>
            <p className='text-2xl'>Come and Explore our Marketplace to see and purchase amazing digital NFT Art</p>
            <div className='cursor-pointer bg-blue-200 border-2 flex border-black w-[250px] h-[90px] justify-center items-center rounded-2xl hover:border-r-4 hover:border-b-4'>
                <p className='text-3xl'>Start Now</p>
            </div>
          </div>
          <div className='basis-[40%]'>
            <div className='rounded-[20px]'>
              <Image src={nft2} width={400} height={550} alt="a" className='rounded-[20px] border-l-8 border-b-8 border-black'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CTA