import { CodeXml } from 'lucide-react'
import React from 'react'

const OpenDevelopment = () => {
  return (
    <div>
      <div className="text-white lg:w-[280px] lg:h-[280px] bg-[#181818] flex items-center justify-center flex-col p-5 rounded-4xl h-[170px] w-[170px] gap-2">
            <div className="relative top-5 w-5 lg:w-8">
              <img 
              className='lg:w-full'
              src="/code.svg" alt="" />
            </div>
            <div className='p-4 text-center'>
              <h3 className='my-2 lg:font-bold lg:text-[20px] text-sm text-[10px] font-extrabold '>Open Knowledge & Collaboration</h3>
              <p className='lg:text-[10px] text-[7px] whitespace-normal font-normal'>
              We champion free and open knowledge through transparent development, teamwork, peer to peer learning, and shared contributions that benefit everyone.
              </p>
            </div>
          </div>
    </div>
  )
}

export default OpenDevelopment
