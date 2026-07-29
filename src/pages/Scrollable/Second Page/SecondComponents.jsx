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

        gsap.from([".python", ".linux", ".blender"], {
            opacity: 0,
            duration: 0.8,
            delay: 1,
            stagger: 0.2
        });

        return () => mm.revert();
    }, { scope: container });

    return (
        <div ref={container} className="lg:min-h-90 justify-center min-h-100 hidden md:flex">
            <div className="python" style={{ position: 'absolute' }}><Python /></div>
            <div className="linux" style={{ position: 'absolute' }}><Linux /></div>
            <div className="blender" style={{ position: 'absolute' }}><Blender /></div>
        </div>
    );
};

export default SecondComponents;
