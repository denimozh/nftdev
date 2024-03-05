import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between pt-8 items-center px-40 bg-[#5468CD]">
        <div>
            <p className='text-3xl text-white'>nft<b className='text-blue-800'>dev</b></p>
        </div>
        <div className='flex flex-row gap-10 text-lg text-white'>
            <p>Why Us</p>
            <p>Services</p>
            <p>Purchase</p>
            <p>Company</p>
        </div>
        <div>
            <button className='border border-white text-white rounded-[20px] hover:border-blue-500 hover:bg-white active:bg-slate-100 hover:text-blue-500 ease-in-out duration-500'>
                <p className='px-7 py-3 text-xl'>Sign In</p>
            </button>
        </div>
    </div>
  )
}

export default Navbar