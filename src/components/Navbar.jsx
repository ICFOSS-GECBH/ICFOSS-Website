import React, { useRef } from "react";
import { Github, Instagram, Linkedin, Menu, Twitter, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
  const tl = gsap.timeline();
  const logoRef = useRef();
  const navRef = useRef();
  const navMobRef = useRef();

  const navAnimation = () => {
    useGSAP(
      () => {
        tl.from("h2", {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });
        tl.from("h4", {
          y: -100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.3,
        });

        tl.from(
          logoRef.current.querySelectorAll("svg"),
          {
            y: -100,
            opacity: 0,
            duration: 0.5,
            stagger: 0.3,
          },
          "<2"
        );
      },
      { scope: navRef }
    );
  };
  navAnimation();

  
  const { contextSafe } = useGSAP();


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
    }
  }
  return (
    <div ref={navRef} className="relative overflow-hidden">
      <div className="p-5 lg:hidden absolute right-0 ">
        <Menu
          onClick={contextSafe(() => {
            gsap.to(navMobRef.current, {
              xPercent: -100,
              opacity: 1,
            });
          })}
          color="#ffffff"
        />
      </div>
      <div
        ref={navMobRef}
        className="h-screen w-[70%] bg-[#1e293b] text-amber-50 z-10 translate-x-full fixed right-0"
      >
        <div className="text-2xl p-3 flex flex-row justify-between">
          <h4>Menu</h4>
          <div onClick={contextSafe(()=>{
            gsap.to(navMobRef.current,{
              xPercent:0,
              opacity:0
            })
          })}>
            <X color="#ffffff" />
          </div>
        </div>
          <MobileMenu/>
      </div>
      <div className="lg:flex lg:items-center lg:justify-between lg:px-40 lg:py-4 flex items-center justify-between">
        <h2 className="text-white font-bold lg:text-2xl px-3 py-5">
          FOSS CELL
        </h2>
        <div>
          <div className="text-white font-bold lg:flex lg:items-center lg:justify-between lg:gap-4 hidden">
            <h4
            onClick={()=>{
              scrollToSection('home')
            }}
            className="cursor-pointer"
            >Home</h4>
            <h4
            onClick={()=>{
              scrollToSection('about')
            }}
            className="cursor-pointer"
            >About</h4>
            <h4 onClick={()=>{
              scrollToSection('events')
            }}
            className=" cursor-pointer ">Events</h4>
            <h4
            onClick={()=>{
              scrollToSection('projects')
            }}
            className=" cursor-pointer "
            >Project</h4>
            <h4
            onClick={()=>{
              scrollToSection('team')
            }}
            className="cursor-pointer"
            >Team</h4>
            <h4>Join</h4>
          </div>
        </div>
        <div
          ref={logoRef}
          className="text-white lg:flex lg:items-center lg:justify-between lg:gap-4 hidden"
        >
          <a target='_blank' href="https://www.linkedin.com/in/foss-cell-gecb-a767a8211"><img className='invert size-6' src="icons/linkedin.svg" alt="" /></a>
                <a href=""><img className='invert size-6' src="icons/github.svg" alt="" /></a>
                <a target='_blank' href="https://www.instagram.com/fosscellgecb?igsh=NGN3cmJ3ODUyMTM3"><img className='invert size-6' src="icons/instagram.svg" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
