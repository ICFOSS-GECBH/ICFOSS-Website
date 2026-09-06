import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { delay } from 'motion';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const MainButton = ({tlRef}) => {
    const navi = useNavigate();
    const buttonRef=useRef()
    const mainButtonAnimation=()=>{
         const tl = tlRef.current
    useGSAP(()=>{
        tl.from(buttonRef.current,{
            opacity:0,
            duration:1,
            delay:1
        },"but")
    },{dependencies:[tl]})
    }
    const handleFadeOutAndNavigate = () => {
        // Target h1 and p elements globally (or pass a ref from MainPage)
        // We target h1 and p as they are the elements we want to fade out.
        gsap.to(["h1", "p"], { 
            opacity: 0,
            y: -50, // Added slight upward movement for effect
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                // 3. Navigate ONLY after the fade out animation finishes
                navi('/main');
            }
        });
    };
    mainButtonAnimation()
    return (
        <div>
            <button 
                ref={buttonRef}
                onClick={handleFadeOutAndNavigate}
                className=' bg-blue-900 px-7 py-2 rounded-3xl lg:text-lg font-semibold lg:my-9 active:scale-95 text-[10px] my-3'
            >
                Join Us
            </button>
        </div>
    );
};

export default MainButton;