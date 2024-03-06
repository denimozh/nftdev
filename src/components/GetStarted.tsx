import Image from 'next/image'
import React from 'react'
import nft2 from "./images/nft2.png"
import { FaCheck } from "react-icons/fa6";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const GetStarted = () => {
  return (
    <div className='bg-[#FFFBF5]'>
      <div className='relative px-40 flex flex-col pt-28'>
          <div className='animate-blob absolute bottom-[10rem] left-[1rem] w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-xl'></div>
          <div className='animate-blob absolute top-[25rem] right-[13rem] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animation-delay-2000'></div>
          <div className='animate-blob absolute top-[20rem] right-[5rem] w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animation-delay-4000'></div>
          <div className='flex flex-row justify-between pb-20 items-center'>
            <div className='text-6xl'>
              <p className='text-6xl'>This will be your Favourite </p>
              <div className='text-white'>
                <RoughNotation type={'highlight'} color={'#4A80EB'} show={true}>NFT Marketplace</RoughNotation>
              </div>
            </div>
            <p className='text-2xl text-gray-400'>Top NFT Picks in the NFT World - Unlock the Web3 Art World </p>
          </div>
          <div className='flex flex-row pt-10 relative '>
            <div className='flex flex-row basis-[55%] border-2 bg-white border-black justify-between p-6 rounded-[20px] border-b-8 border-r-8'>
                <div className='flex flex-col justify-between'>
                  <p className='border border-black p-2 text-2xl rounded-lg w-fit'>#hotonNFT</p>
                  <div className='flex flex-col gap-5'>
                    <p className='text-5xl'>Raging Ape</p>
                    <p className='text-4xl'>_Ubio@</p>
                    <div>
                      <p className='text-4xl text-blue-500'>0.32 ETH</p>
                    </div>
                  </div>
                  <div className='pb-10 bg-blue-300 h-fit flex flex-row justify-center items-center rounded-[20px] border-black border-b-4 border-r-4 hover:border-blue-500 hover:bg-blue-700 active:bg-blue-800 hover:text-white ease-in-out duration-500'>
                    <p className='text-3xl font-medium pt-10'>View Details</p>
                  </div>
                </div>
                <div>
                  <Image src={nft2} width={500} height={500} alt='img' className='rounded-[20px]'/>
                </div>
            </div>
            <div className='basis-[45%] pl-20'>
              <p className='text-[2.5rem]'>Built For Traders And Sellers</p>
              <div className='pl-4 pb-16'>
                <div className='text-lg flex gap-5 items-center pt-6'>
                  <FaCheck className='text-[40px] p-1 bg-blue-500 text-white w-fit rounded-full'/>
                  <p>Secure and Intergrated Payment System</p>
                </div>
                <div className='text-lg flex gap-5 items-center pt-6'>
                  <FaCheck className='text-[40px] p-1 bg-blue-500 text-white w-fit rounded-full'/>
                  <p>Sells and Withdraws straight to your bank</p>
                </div>
                <div className='text-lg flex gap-5 items-center pt-6'>
                  <FaCheck className='text-[40px] p-1 bg-blue-500 text-white w-fit rounded-full'/>
                  <p>Connect your coinbase account intergrations</p>
                </div>
              </div>
              <div className='cursor-pointer w-1/2 h-1/6 bg-blue-300 flex flex-row justify-center items-center rounded-[20px] border-black border-b-4 border-r-4 hover:bg-white active:bg-blue-800 ease-in-out duration-500'>
                <p className='text-3xl font-medium'>Explore Now</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default GetStarted