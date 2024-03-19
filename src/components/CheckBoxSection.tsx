import { Checkbox } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

const CheckBoxSection = () => {
  return (
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
  )
}

export default CheckBoxSection