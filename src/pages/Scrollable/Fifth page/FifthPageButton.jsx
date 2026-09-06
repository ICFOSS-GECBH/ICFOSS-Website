import { Github } from 'lucide-react'
import React from 'react'

const FifthPageButton = () => {
  return (
    <div>
      <div className='flex w-full justify-center'>

        <button className='border-[#1351DC] rounded-lg border-2 w-fit my-10 active:scale-95'>
          <div className='flex flex-row px-10 py-2'>
          <Github size={15} color="#ffffff" />
           <p className='text-white text-[10px]'>View All Projects</p>
          </div>
          </button>
        </div>
    </div>
  )
}

export default FifthPageButton
