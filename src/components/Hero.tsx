import React from 'react'
import { Carousel, GetStarted, Slider } from '.'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = () => {
  return (
    <div>
      <div className="pt-20 bg-[url('/images/hhhorizon.svg')] bg-no-repeat bg-cover">
          <div className='px-40'>
              <div className="pt-6 text-white" >
                  <p className=' text-9xl text-center leading-[160px]'><RoughNotation type={'highlight'} color={'#1945A2'} show={true}>Digital Art</RoughNotation> is <br className=''/> The Trend <RoughNotation type={'underline'} color={'#1745B2'} show={true} strokeWidth={2}>Today</RoughNotation></p>
              </div>
              <div className='pb-20 pt-6'>
                  <Carousel/>
              </div>
          </div>
      </div>
      <div className='pb-8'>
        <Slider/>
      </div>
      <div>
        <GetStarted/>
      </div>
    </div>

  )
}

export default Hero