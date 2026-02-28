import { Heart } from 'lucide-react'
import React from 'react'

const PassionForFoss = () => {
  return (
    <div>
      {/*Passion For Foss */}
          <div className="text-white lg:w-[280px] lg:h-[280px] bg-[#181818] flex items-center justify-center flex-col p-5 rounded-4xl h-[170px] w-[170px] gap-2">


            <div className="relative top-5 w-5 lg:w-8">
              <img 
              className='lg:w-full'
              src="/heart.svg" alt="" />
            </div>
            <div className='lg:p-4 p-3 text-center'>
              <h3 className='my-2 lg:font-bold lg:text-[20px] text-sm text-[10px] font-extrabold'>Inclusivity & Accessibility</h3>
              <p className='lg:text-[10px] text-[7px] whitespace-normal font-normal'>
                We ensure equal opportunities for students from all departments and backgrounds to learn, innovate, and benefit from FOSS without barriers.
              </p>
            </div>
          </div>
    </div>
  )
}

export default PassionForFoss
