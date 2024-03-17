"use client"

import React, { Fragment } from 'react'
import { IoChevronDownCircleOutline, IoSearch } from "react-icons/io5";
import { Menu, Transition } from '@headlessui/react'
import { FaEdit } from "react-icons/fa";
import { MdDomain } from "react-icons/md";
import { TbMathLower } from "react-icons/tb";
import { blue } from '@mui/material/colors';
import { TbMathGreater } from "react-icons/tb";
import { Checkbox } from '@mui/material';
import { PriceSlider } from '@/components';
import { FaBtc } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa";
import { SiTether } from "react-icons/si";

const page = () => {
  return (
    <div className="pt-20 bg-[url('/images/hhhorizon.svg')] bg-no-repeat bg-cover">
        <div className='w-full'>
            <p className='text-center text-7xl text-white'>Collectables For You</p>
        </div>
        <div className='w-full pb-20 pt-10'>
            <p className='pl-24 text-gray-300 pb-5 text-3xl'>Category</p>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row w-full justify-center gap-10'>
                    <div className='flex flex-row items-center bg-white border-2 border-slate-200 px-4 rounded-full'>
                        <div className='border-r pr-6'>
                            <IoSearch className='text-[30px]'/>
                        </div>
                        <div className='w-full pl-6 h-16 flex flex-row justify-between items-center'>    
                            <input placeholder="Search" className='outline-none p-3' />
                        </div>
                    </div>
                    <div className='flex flex-row items-center basis-1/2 bg-white border-2 border-slate-200 px-4 rounded-full'>
                        <div className='border-r pr-6'>
                            <IoSearch className='text-[30px]'/>
                        </div>
                        <div className='w-full pl-6 h-16 flex flex-row justify-between items-center'>    
                            <input placeholder="Search" className='outline-none p-3 w-full' />
                        </div>
                    </div>
                    <Menu as="div" className="basis-1/6 relative flex flex-row bg-white border-2 border-slate-200 px-4 rounded-full h">
                        <div className='w-full'>
                            <Menu.Button className="inline-flex h-full w-full justify-between items-center rounded-md  px-4 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                <p className='text-lg'>Options</p>
                                <IoChevronDownCircleOutline
                                className="-mr-1 ml-2 h-5 w-5 text-gray-300 hover:text-gray-500"
                                aria-hidden="true"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        >
                        <Menu.Items className="absolute top-14 mt-2 w-56 mb-2 right-8 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div className="px-1 py-1 ">
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                    <MdDomain
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    ) : (
                                    <MdDomain
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    )}
                                    Relevant
                                </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                    <TbMathLower
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    ) : (
                                    <TbMathLower
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    )}
                                    Low To High
                                </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    className={`${
                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                    <TbMathGreater
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    ) : (
                                    <TbMathGreater
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    )}
                                    High To Low
                                </button>
                                )}
                            </Menu.Item>
                            </div>
                            
                        </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
        <div className='flex flex-row px-[100px]'>
            <div className='flex flex-col gap-10 bg-white rounded-[30px] px-5 py-10 w-[350px] shadow-xl'>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row items-center gap-2'>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: blue[600] }}/>
                        <p className='text-lg'>Premium</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: blue[600] }}/>
                        <p className='text-lg'>Art</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: blue[600] }}/>
                        <p className='text-lg'>Sport</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: blue[600] }}/>
                        <p className='text-lg'>Entertainment</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: blue[600] }}/>
                        <p className='text-lg'>Games</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: blue[600] }}/>
                        <p className='text-lg'>Collecting</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <Checkbox inputProps={{ 'aria-label': 'controlled' }} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: blue[600] }}/>
                        <p className='text-lg'>Cybersports</p>
                    </div>
                </div>
                <div className='flex flex-col border-t-2 border-gray-200 pt-6'>
                    <p className='text-xl text-gray-400 pb-10'>Price Range</p>
                    <PriceSlider/>
                </div>
                <div>
                    <p className='text-xl text-gray-400 pb-10'>Currency</p>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-6'>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaBtc className='bg-slate-200 text-slate-400 rounded-full text-2xl p-[3px] pb-1'/>
                                <p className='text-2xl'>BTC</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <FaEthereum className='bg-slate-200 text-slate-400 rounded-full text-2xl p-[3px] pb-1'/>
                                <p className='text-2xl'>ETH</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <SiTether className='bg-slate-200 text-slate-400 rounded-full text-2xl p-[3px] pb-1'/>
                                <p className='text-2xl'>USDT</p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='basis-1/2'>
                                <p>Clear</p>
                            </div>
                            <div className='basis-1/2'>
                                <p>Apply</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default page