import React from 'react'
import { IoSearch } from "react-icons/io5";

const page = () => {
  return (
    <div className="pt-20 bg-[url('/images/hhhorizon.svg')] bg-no-repeat bg-cover">
        <div className='w-full'>
            <p className='text-center text-7xl text-white'>Collectables For You</p>
        </div>
        <div className='flex flex-row w-full'>
            <div className='flex flex-col w-full'>
                <p>Category</p>
                <div className='flex flex-row w-full'>
                    <div className='flex flex-row items-center'>
                        <div>
                            <IoSearch className='text-[30px]'/>
                        </div>
                        <div className='w-full h-16 flex flex-row justify-between items-center'>    
                            <input placeholder="Search" className='outline-none p-3' />
                        </div>
                    </div>
                    <div className='flex flex-row items-center bg-white border-2 border-slate-200 px-4 rounded-full'>
                        <div className='border-r pr-6'>
                            <IoSearch className='text-[30px]'/>
                        </div>
                        <div className='w-full pl-6 h-16 flex flex-row justify-between items-center'>    
                            <input placeholder="Search" className='outline-none p-3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page