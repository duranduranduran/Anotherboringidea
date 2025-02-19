import React from 'react';
import Button from "../components/Button.jsx";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Laptop from "../components/Laptop.jsx";
import CardStack from "../components/CardStack.jsx";

function About() {




    return (
        <div className="flex flex-col gap-5 c-space ">
            <div
                className="w-full h-full md:h-1/3  rounded-md hover:text-white hover:bg-black transition duration-300 p-4 group mb-3 md:mb-0">
                <h2 className="text-7xl text-center font-bold text-black mb-4 group-hover:text-white">A safe place for
                    your <spam className="waving-hand">Ideas</spam></h2>

            </div>
            <div className="flex flex-col gap-5 c-space md:flex-row">
                <div
                    className="w-full md:w-1/2 border-black border-4 rounded-md p-14 flex justify-center items-center md:p-10">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-4xl font-bold text-black mb-4">Who We Are</h2>
                        <p className="text-lg text-black mb-6">
                            Digital Product Design is a set of tools used to solve communicative and functional
                            challenges, from capturing attention to clearly conveying value.
                        </p>
                        <p className="text-lg text-black mb-6">
                            We believe in the power of creativity to make a difference. Whether it's a captivating
                            website,
                            a striking logo, or a comprehensive branding strategy,
                            we are committed to delivering exceptional
                            results that align with your vision.
                        </p>
                        <p className="text-lg text-black mb-6">
                            Let’s create something remarkable together.
                        </p>
                        <Button name={'Our Services '}/>
                    </div>
                </div>
                <div className="w-full md:flex-1 flex flex-col justify-between gap-3 md:flex-col">
                    <div className="h-full md:h-1/3 border-black border-4 hover:transform hover:scale-110  rounded-md hover:text-white hover:bg-black transition duration-300 p-4 group mb-3 md:mb-0">
                        <h2 className="text-4xl font-bold text-black mb-4 group-hover:text-white">Digital Artists</h2>
                        <p className="text-lg black-600 mb-6">
                            Our artists bring imagination to life with stunning visuals and creative content that
                            captivate and inspire.
                        </p>
                    </div>
                    <div
                        className="h-full md:h-1/3 border-black border-4 hover:transform hover:scale-110 rounded-md hover:text-white hover:bg-black transition duration-300 p-4 group mb-3 md:mb-0">
                        <h2 className="text-4xl font-bold text-black mb-4 group-hover:text-white">Web Designers</h2>
                        <p className="text-lg black-600 mb-6">
                            Our web designers craft user-friendly, aesthetically pleasing, and functional websites
                            tailored to your unique needs.
                        </p>


                    </div>
                    <div
                        className="h-full md:h-1/3 border-black border-4 hover:transform hover:scale-110 rounded-md hover:text-white hover:bg-black transition duration-300 p-4 group mb-3 md:mb-0">
                        <h2 className="text-4xl font-bold text-black mb-4 group-hover:text-white">Branding </h2>
                        <p className="text-lg black-600 mb-6">
                            Our branding experts shape your brand's identity, ensuring it stands out and resonates with
                            your target audience.
                        </p>


                    </div>
                </div>
            </div>

            {/*Section2*/}

            <div
                className=" h-full md:h-1/3 c-space  rounded-md hover:text-white hover:bg-black transition duration-300 p-4 group mb-3 md:mb-0">
                <h2 className="text-7xl c-space text-center c-space font-bold text-black mb-4 group-hover:text-white">
                     Work</h2>

            </div>


            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full c-space">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[-1,2,5]}/>

                        <Laptop scale={0.3}
                                position={[0,-0.5,0]}/>


                            <ambientLight intensity={3}
                            position={  [10, 10, 10]}/>
                            <directionalLight position={[10, 20, -10]} intensity={12}/>


                            <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} enableDamping={true}></OrbitControls>
                        </Canvas>

                        <div>

                            <p className="grid-headtext"></p>
                            <p className="grid-subtext ">
                                Welcome to Another Boring Idea—where creativity defies convention.
                                We are not just a digital agency; we are a vibrant collective of digital artists,
                                web designers, and branding specialists
                                passionate about transforming the mundane into the extraordinary.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container flex justify-center">
                        <div>
                            <p className="grid-headtext">Our Services</p>
                        </div>
                        <img src="./images/fontbrand.png" alt="Eva"
                             className=" object-contain w-full h-full "/>
                        <img src="./images/coloresmarca.png" alt="Eva"
                             className=" object-contain w-full h-full "/>

                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <p className="grid-headtext">Branding</p>

                        <div className="rounded-3xl w-full sm:h-[326px] h-[700px]  justify-center ">
                            <img src="./images/molos2.png" alt="Eva" className="w-full h-full rounded-3xl mb-10"/>
                            <img src="./images/molos3.png" alt="Eva" className="w-full h-full rounded-3xl mb-10"/>



                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">

                        <div>
                            <p className="grid-headtext">UI-UX</p>
                            <img src="./images/Boston.png" alt="Eva" className="w-full  rounded-3xl p-10"/>
                            <img src="./images/espinroofing.png" alt="Eva" className="w-full  rounded-3xl"/>


                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container flex justify-center">
                        <div>
                            <p className="grid-headtext">Our Services</p>
                        </div>
                        <img src="./images/qori1.jpg" alt="Eva" className="w-full h-full rounded-3xl"/>
                    </div>
                </div>

            </div>
            <CardStack className=" hover:scale-110 transition duration-300"/>

        </div>

    );
}

export default About;