import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import {  PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import OpenSign from "../components/OpenSign.jsx";
import VideoGallery from "./VideoGallery.jsx";



const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 480 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    const heroTagRef = useRef(null);

    useEffect(() => {
        const text = heroTagRef.current;
        const letters = text.textContent.split('');
        text.innerHTML = '';




        const animate = () => {
            letters.forEach((letter, index) => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.style.opacity = 0;
                span.style.transform = 'translateY(50px)';
                text.appendChild(span);
                setTimeout(() => {
                    span.style.opacity = 1;
                    span.style.transform = 'translateY(0)';
                }, index * 50);
            });
            setTimeout(() => {
                text.innerHTML = '';
                animate();
            }, letters.length * 50 + 2000); // wait for all the letters to animate and add delay
        };
        animate();
    }, []);

    return (
        <section className="min-h-screen w-full flex flex-col relative overflow-x-hidden" id="home">
            <div className=" mx-auto flex md:flex-row flex-col flex-1 justify-center items-center gap-10">
                <div className={` w-full h-screen  ${isMobile ? ' max-h-80' : ''} `}>
                    <Canvas
                        className={`w-full h-full object-cover ${isMobile ? 'max-h-screen' : ''} ${isMobile ? 'overflow-hidden' : ''}`}>
                        <Suspense fallback={<CanvasLoader/>}>
                            <PerspectiveCamera makeDefault={false} position={[0, 0, 20]}/>
                            <HeroCamera isMobile={isMobile}>

                                <OpenSign scale={0.04}
                                          position={sizes.deskPosition}
                                          rotation={[0.1, -Math.PI / 2, 0]}/>


                            </HeroCamera>


                            <group>


                            </group>
                            <ambientLight intensity={0.8}/>
                            <directionalLight position={[10, 10, 10]} intensity={0.2}/>
                            {/*<OrbitControls enableZoom={false} enablePan={true} enableRotate={true} enableDamping={true}/>*/}
                        </Suspense>
                    </Canvas>
                </div>
                <div className={`p-4 w-full h-full flex flex-col text-right ${isMobile ? 'mr-2' : 'mr-6'}`}>


                    <h1 ref={heroTagRef}
                        className={`text-7xl ${isMobile ? 'text-5xl' : ''}  font-Unbounded text-gray_gradient`}>
                        Elevate your brand's digital presence 👁
                    </h1>
                    <h1 className={`text-4xl ${isMobile ? 'text-xl' : ''} mt-14 font-Unbounded text-gray_gradient`}>
                        Your partner in innovative marketing, standout branding, and seamless e-commerce solutions.
                    </h1>
                    <div className="left-0 right-0 w-full  z-10 flex justify-center mt-10">
                        <Button name="Contact Us :)" containerClass="w-fit md:w-96 mr-8"/>

                    </div>

                </div>
            </div>

        </section>
    );

};

export default Hero;