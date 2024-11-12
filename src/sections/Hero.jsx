import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Bunny from "../components/Bunny.jsx";
import Neon from "../../Neon.jsx";
import OpenSign from "../components/OpenSign.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import Button from "../components/Button.jsx";

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
            }, letters.length * 50 + 1000); // wait for all letters to animate and add a 1s delay
        };
        animate();
    }, []);

    return (
        <section className="min-h-screen w-full flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="  sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Branding And Web Development
                </p>
                <p ref={heroTagRef} className="hero_tag text-gray_gradient">Building Websites And Digital Experiences</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas >
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault={true} position={[0, 0, 20]}/>
                        <HeroCamera>
                            {/*<Bunny position={sizes.deskPosition}*/}
                            {/*       scale={5}*/}

                            {/*       rotation={[0, 0, 0]}*/}
                            {/*/>*/}
                            <Neon scale={0.8}
                                  position={sizes.deskPosition}
                                  rotation={[0, Math.PI /2, 0]}/>
                            {/*<HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />*/}


                        </HeroCamera>
                        <group >
                            {/*<OpenSign scale={0.008}*/}
                            {/*          position={sizes.targetPosition}*/}
                            {/*          rotation={[0, Math.PI /3, 0]}/>*/}

                        </group>
                        <ambientLight intensity={0.8}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.2}/>
                        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} enableDamping={true}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#contact" className="w-fit">
                    <Button name="Contactanos" isBeam containerClass="sm:w-fit w-full sm:min-w-96">
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default Hero;