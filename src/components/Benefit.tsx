import React from 'react'

const Benefit = () => {
  return (
    <div className='bg-[#FFFBF5]'>
        <div className='relative px-40 pt-48 flex flex-col'>
            <div className='flex flex-col gap-8'>
                <p className='text-6xl'>The most trusted NFT Marketplace exchange</p>
                <p className='text-3xl'>Millions of users trust us, and so can you. The proof is in our platform</p>
            </div>
            <div className='flex flex-row justify-center items-center gap-20 pt-20'>
                <div className='border-2 border-black w-1/3 p-4'>
                    <p className='text-2xl'>Utilizes Coinbase Technology for Secure Payments</p>
                </div>
                <div className='border-2 border-black w-1/3 p-4'>
                    <p className='text-2xl'>Help when you need it</p>
                </div>
                <div className='border-2 border-black w-1/3 p-4'>
                    <p className='text-2xl'>Your NFTS are your NFTS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit