import React from 'react'

const CTA = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-black animate-bgMove rounded-t-[40px] h-[500px]'>
        <div className='flex flex-row p-14'>
          <div className='basis-[60%]'>
            <p className='text-6xl text-white'>Invest into the Future Of Art</p>
            <p className='text-2xl'>Come and Explore our Marketplace to see and purchase amazing digital NFT Art</p>
            <div className='bg-blue-200 border-2 flex border-black w-[250px] h-[90px] justify-center items-center rounded-2xl hover:border-r-4 hover:border-b-4'>
                <p className='text-3xl'>Start Now</p>
            </div>
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

export default CTA