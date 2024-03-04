import React from 'react'
import { Carousel } from '.'

const Hero = () => {
  return (
    <div className="pt-20 bg-[url('/images/heroBg.svg')] bg-no-repeat">
        <div className='px-40'>
            <div className="pt-6">
                <p className=' text-9xl text-center'>Digital Art is <br className=''/> The Trend Today</p>
            </div>
            <div className='pb-20 pt-10'>
                <Carousel/>
            </div>
        </div>
    </div>
  )
}

export default Hero