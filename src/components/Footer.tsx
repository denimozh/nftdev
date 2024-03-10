import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className='px-40 flex flex-row pt-20 '>
      <div className='bg-[#5468CD] w-full flex flex-col gap-14 rounded-t-[20px] p-10 border-t-2 border-x-2 border-black'>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-3xl text-white'>nft<b className='text-blue-800'>dev</b></p>
          </div>
          <div className='flex flex-row gap-10'>
            <p className='text-[40px]'><IoLogoInstagram/></p>
            <p className='text-[40px]'><IoLogoFacebook/></p>
            <p className='text-[40px]'><IoLogoTwitter/></p>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
            <div>
              <p>2024 nftdev All Rights Reserved</p>
            </div>
            <div className='flex flex-row gap-8'>
              <p className='underline'>Privacy Policy</p>
              <p className='underline'>Terms Of Service</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer