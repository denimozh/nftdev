import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between pt-8 items-center px-40">
        <div>
            <p className='text-3xl'>nft<b className='text-blue-600'>dev</b></p>
        </div>
        <div className='flex flex-row gap-10 text-lg'>
            <p>Why Us</p>
            <p>Services</p>
            <p>Purchase</p>
            <p>Company</p>
        </div>
        <div>
            <button className='border border-blue-600 text-blue-600 rounded-[20px] hover:bg-blue-700 active:bg-blue-800 hover:text-white ease-in-out duration-500'>
                <p className='px-7 py-3 text-xl'>Sign In</p>
            </button>
        </div>
    </div>
  )
}

export default Navbar