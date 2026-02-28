import { Globe } from 'lucide-react'
import React from 'react'

const Collaboration = () => {
  return (
    <div>
      {/*Collaboration */}

          <div className="text-white lg:w-[280px] lg:h-[280px] bg-[#181818] flex items-center justify-center flex-col p-5 rounded-4xl h-[170px] w-[170px] gap-2 ">


            <div className="relative top-5 w-5 lg:w-8 lg:block">
              <img 
              className='lg:w-full'
              src="/globe.svg" alt="" />
            </div>
            <div className='p-4 text-center'>
              <h3 className='my-2 font-bold lg:text-[20px] text-sm text-[10px] '>Global & Industry Engagement</h3>
              <p className='lg:text-[10px] text-[7px]'>
                We actively collaborate with ICFOSS, global open source communities, research bodies, and industry partners to drive ethical and meaningful impact.
              </p>
            </div>
          </div>
    </div>
  )
}

export default Collaboration
