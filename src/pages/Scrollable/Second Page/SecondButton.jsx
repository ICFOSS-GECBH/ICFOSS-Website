import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const SecondButton = () => {
  const secondBtnRef=useRef()
  useGSAP(()=>{
    gsap.to(secondBtnRef.current,{
      opacity:0,
      delay:1
    })
  })
  return (
    <div>
            <button 
                ref={secondBtnRef}
                className='bg-blue-900 px-7 py-2 rounded-3xl text-lg font-semibold my-9 active:scale-95'
            >
                Join Us
            </button>
        </div>
  )
}

export default SecondButton
