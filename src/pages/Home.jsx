import React from 'react'
import Navbar from "../sections/Navbar.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Marquee from "../sections/Marquee.jsx";
import Footer from "../sections/Footer.jsx";

const Home = () => {
    return (
        <main className=" max-w-7xl mx-auto">


            <Navbar />
            <Hero />
            <About />
            <Marquee />
            <Footer/>
        </main>
    )
}
export default Home
