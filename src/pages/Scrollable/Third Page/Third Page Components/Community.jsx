import { Users } from 'lucide-react'
import React from 'react'

const Community = () => {
  return (
    <div>
      {/*About Community Driven */}
          <div className="text-white lg:w-[280px] lg:h-[280px] bg-[#181818] flex items-center justify-center flex-col p-5 rounded-4xl h-[170px] w-[170px] gap-2 ">


            <div className="relative top-5 w-5 lg:w-8">
              <img 
              className='lg:w-full'
              src="/users.svg" alt="" />
            </div>
            <div className='p-4 text-center'>
              <h3 className='my-2 font-bold lg:text-[20px]  text-[10px] '>Community Driven Learning</h3>
              <p className='lg:text-[10px] text-[7px]'>
Our community is at the heart of everything we do, fostering mentorship, cooperation, collective growth, and open participation for all.
              </p>
            </div>
          </div>
    </div>
  )
}

export default Community
