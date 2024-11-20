import React, { useState } from 'react';

import {Canvas} from "@react-three/fiber";
import OpenSign from "../components/OpenSign.jsx";

import {useMediaQuery} from "react-responsive";
import RotatingBadge from "../components/RotatingBadge.jsx";


const Gallery = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleCopy = () => {
        navigator.clipboard.writeText(' hello@anotherboringidea.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 10000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <Canvas>
                            <OpenSign
                                scale={0.005}/>
                            <ambientLight intensity={0.8}/>
                            <directionalLight position={[10, 10, 10]} intensity={0.2}/>
                        </Canvas>

                        <div>
                            <p className="grid-headtext"></p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container hover:transform hover:scale-110 trasition duration-500">
                        <img src="./images/door.jpg" alt="Eva" className="w-full h-full object-cover rounded-3xl"/>

                        <div>
                            {/*<p className="grid-headtext">Our Services</p>*/}
                            {/*<p className="grid-subtext">*/}
                            {/*    I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable*/}
                            {/*    applications*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container hover:transform hover:scale-110 trasition duration-500">
                        <img src="./images/silo.jpg" alt="Eva" className="w-full h-full object-cover rounded-3xl"/>

                        <div>
                            {/*<p className="grid-headtext">Our Services</p>*/}
                            {/*<p className="grid-subtext">*/}
                            {/*    I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable*/}
                            {/*    applications*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container hover:transform hover:scale-110 trasition duration-500">
                        <img src="./images/dome.jpg" alt="Eva" className="w-full h-full object-contain rounded-3xl"/>

                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">

                        <img src="./images/carnival.jpg" alt="Eva" className="w-full h-full object-cover rounded-3xl"/>

                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container hover:transform hover:scale-110 trasition duration-500">
                        <img src="./images/lightbulb.jpg" alt="Eva" className="w-full h-full object-contain rounded-3xl"/>

                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <div className="flex justify-center items-center">
                            <RotatingBadge/>
                        </div>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-1.5xl md:text-xl font-medium text-gray_gradient text-black">hello@anotherboringidea.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;