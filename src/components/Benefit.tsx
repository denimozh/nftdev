import React from 'react'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Benefit = () => {
  return (
    <div className='bg-[#FFFBF5]'>
        <div className='relative px-40 pt-48 pb-32 flex flex-col'>
            <div className='flex flex-col gap-8'>
                <p className='text-6xl'>The <RoughNotation type={'underline'} color={'#1945A2'} show={true}><a className=''>Most trusted</a></RoughNotation> NFT Marketplace exchange</p>
                <p className='text-3xl'>Millions of users trust us, and so can you. The proof is in our platform</p>
            </div>
            <div className='flex flex-row justify-center items-center gap-20 pt-20'>
                <div className='bg-gradient-to-r from-orange-200 to-green-200 animate-bgMove flex flex-col rounded-[20px] gap-5 border-2 border-b-8 border-r-8 border-black w-1/3 p-6 h-[350px]'>
                    <p className='text-2xl'>Utilizes Coinbase Technology for Secure Payments</p>
                    <p className='text-lg text-gray-400'>In April 2021, Coinbase became the largest publicly traded crypto company in the world. That means we operate with more financial transparency, and make our financial statements available each quarter.</p>
                </div>
                <div className='bg-gradient-to-r from-green-200 to-blue-200 animate-bgMove flex flex-col rounded-[20px] gap-5 border-2 border-b-8 border-r-8 border-black w-1/3 p-6 h-[350px]'>
                    <p className='text-2xl'>Help when you need it</p>
                    <p className='text-lg text-gray-400'>You can always contact our support team by messaging to speak with our virtual assistant, or depending on the hours, with a real live support agent. You can also check out our Help Center for quick solutions to common problems.</p>
                </div>
                <div className='bg-gradient-to-r from-blue-200 to-orange-200 animate-bgMove flex flex-col rounded-[20px] gap-5 border-2 border-b-8 border-r-8 border-black w-1/3 p-6 h-[350px]'>
                    <p className='text-2xl'>Your NFTS are your NFTS</p>
                    <p className='text-lg text-gray-400'>Its that simple. NFTDEV doesnt use, or lend, your assets without your permission. We run a multifaceted risk management program designed to protect our customers assets.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit