import React, { useRef } from "react";
import Python from "../../../components/Python";
import Linux from "../../../components/Linux";
import Blender from "../../../components/Blender";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SecondComponents = () => {
    const container = useRef();

    useGSAP(() => {
        let mm = gsap.matchMedia();


        mm.add("(min-width: 769px)", () => {
            gsap.to(".python", { x: -500, y: -10, rotate: -5, duration: 1, delay: 1 });
            gsap.to(".linux", { x: 0, y: -10, rotate: 2, duration: 1, delay: 1 });
            gsap.to(".blender", { x: 500, y: -10, rotate: 5, duration: 1, delay: 1 });
        });

        // 2. MOBILE LOGIC (Screen 768px or smaller)
        mm.add("(max-width: 768px)", () => {
            // Linux stays at top
            gsap.to(".linux", { x: 0, y: -10, rotate: 0, duration: 1, delay: 1 });
            // Python goes BELOW Linux
            gsap.to(".python", { x: 0, y: 150, rotate: 0, duration: 1, delay: 1 });
            // Blender goes BELOW Python
            gsap.to(".blender", { x: 0, y: 300, rotate: 0, duration: 1, delay: 1 });
        });

        // Common "Appear" animation
        gsap.from([".python", ".linux", ".blender"], {
            opacity: 0,
            duration: 0.8,
            delay: 1,
            stagger: 0.2 // Optional: makes them appear one by one
        });

        return () => mm.revert(); // Cleanup
    }, { scope: container });

    return (
        <div ref={container} className="lg:min-h-90 flex justify-center min-h-100">
            {/* Added relative/absolute setup so Y movement works cleanly */}
            <div className="python" style={{ position: 'absolute' }}><Python /></div>
            <div className="linux" style={{ position: 'absolute' }}><Linux /></div>
            <div className="blender" style={{ position: 'absolute' }}><Blender /></div>
        </div>
    );
};

export default SecondComponents;
