import React, { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import {Canvas} from "@react-three/fiber";
import OpenSign from "../components/OpenSign.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import RotatingBadge from "../components/RotatingBadge.jsx";


const About = () => {
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
                            <p className="grid-subtext">
                                Welcome to Another Boring Idea—where creativity defies convention.
                                We are not just a digital agency; we are a vibrant collective of digital artists,
                                web designers, and branding specialists
                                passionate about transforming the mundane into the extraordinary.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">

                        <Canvas>
                            <HeroCamera isMobile={isMobile} >

                            <HackerRoom
                                scale={0.4}
                                rotation={[0.1, -Math.PI, 0]}
                                position={[0, -30, 0.4]}/>
                            </HeroCamera>
                            <ambientLight
                                intensity={1}/>
                            <directionalLight
                                position={[10, 10, 10]}
                                intensity={0.4}
                            />
                            {!isMobile && (
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={true}
                                    enableRotate={true}
                                    enableDamping={true}
                                />
                            )}

                        </Canvas>


                        <div>
                            <p className="grid-headtext">Our Services</p>
                            <p className="grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                applications
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">We are flexible with time zone communications & locations</p>
                            <p className="grid-subtext">Open to remote work worldwide.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">

                        <Canvas >
                            <HeroCamera scale={4}>
                                <ambientLight intensity={0.6
                                    } color={ "yellow"}/>
                                <directionalLight
                                    position={[10, 10, 10]}
                                    castShadow
                                    intensity={1}

                                />
                                <mesh position={[0, 1, 0]} scale={[10, 10, 10]}>
                                    <sphereGeometry args={[2, 32, 32]}/>
                                    <meshStandardMaterial attach="material" color="red" emissive="#800080" emissiveIntensity={0.8}/>
                                </mesh>

                                <mesh scale={[8, 8, 8]}>
                                    <planeGeometry args={[10, 10]}/>
                                    <meshBasicMaterial attach="material" color="blue"/>
                                </mesh>
                            </HeroCamera>
                            {/*<OrbitControls enableZoom={false} enablePan={true} enableRotate={true} enableDamping={true}></OrbitControls>*/}
                        </Canvas>

                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code. Programming isn&apos;t just my
                                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
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

export default About;