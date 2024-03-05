import React from 'react'
import { Carousel, GetStarted, Slider } from '.'

const Hero = () => {
  return (
    <div>
      <div className="pt-20 bg-[url('/images/hhhorizon.svg')] bg-no-repeat bg-cover">
          <div className='px-40'>
              <div className="pt-6 text-white" >
                  <p className=' text-9xl text-center leading-[160px]'><a className='bg-[#1945a2] rounded-full p-3 border-4 border-blue-500'>Digital Art</a> is <br className=''/> The Trend Today</p>
              </div>
              <div className='pb-20 pt-6'>
                  <Carousel/>
              </div>
          </div>
      </div>
      <div>
        <Slider/>
      </div>
      <div>
        <GetStarted/>
      </div>
    </div>

  )
}

export default Hero