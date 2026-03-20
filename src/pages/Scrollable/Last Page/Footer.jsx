import { Github, Instagram,  Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div> 
      <div className="bg-[#153885] w-full h-full">
          <div className="flex flex-row  justify-evenly lg:px-30 lg:py-15 px-10 py-5">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-sm font-medium">
                Foss Cell GECBH
              </h1>
              <p className="lg:text-[10px] text-[5px] text-white font-light">
                At FOSS Cell GECBH, we empower <br />
                aspiring developers through <br />
                learning, collaboration, and <br />
                open-source contributions.{" "}
              </p>
              <div className="text-white flex flex-row gap-2 ">
                <a target='_blank' href="https://www.linkedin.com/in/foss-cell-gecb-a767a8211"><img className='invert size-4' src="icons/linkedin.svg" alt="" /></a>
                <a href="https://github.com/ICFOSS-GECBH"><img className='invert size-4' src="icons/github.svg" alt="" /></a>
                <a target='_blank' href="https://www.instagram.com/fosscellgecb?igsh=NGN3cmJ3ODUyMTM3"><img className='invert size-4' src="icons/instagram.svg" alt="" /></a>
              </div>
            </div>
            <div className="flex flex-col gap-2 relative">
              <h1 className="text-white text-sm font-medium"> Quick Links</h1>
              <Link to="#about" className="lg:text-[10px] text-[7px] text-white font-light"> About </Link>
              <Link to="#projects" className="lg:text-[10px] text-[7px] text-white font-light"> Projects </Link>
              <Link to="#events" className="lg:text-[10px] text-[7px] text-white font-light"> Events </Link>
              <Link to="#join" className="lg:text-[10px] text-[7px] text-white font-light"> Join </Link>
              <Link to="#contact" className="lg:text-[10px] text-[7px] text-white font-light"> Contact </Link>
            </div>
            {/* <div className="flex flex-col gap-2">
              <h1 className="text-white text-sm font-medium"> Resources</h1>
              <p className="text-[10px] text-white font-light">
                Getting Started
              </p>
              <p className="text-[10px] text-white font-light">Documentation</p>
              <p className="text-[10px] text-white font-light">Guidlines</p>
              <p className="text-[10px] text-white font-light">
                Code of Conduct
              </p>
            </div> */}
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-sm font-medium"> Contact Info</h1>
              <p className="lg:text-[10px] text-[7px] text-white font-light">
                Government Engineering College, Barton Hill, Barton Hill Colony,{" "}
                <br />
                Kunnukuzhy, Thiruvananthapuram, <br />
                Kerala 695035
              </p>

              {/* <p className="lg:text-[10px] text-[7px] text-white font-light">
                Phone: +91 00000 00000
              </p> */}

              <p className="lg:text-[10px] text-[7px] text-white font-light">
                Email: fosscellgecbh@gmail.com
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer
