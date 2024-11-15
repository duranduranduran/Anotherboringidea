import React, { useState } from 'react';
import Navbar from "../sections/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Marquee from "../sections/Marquee.jsx";
import Footer from "../sections/Footer.jsx";

function Home() {


    return (
        <div >
            <Navbar />
            <Hero />

            <About />
            <Marquee />
            <Footer/>
        </div>
    );
}

export default Home;