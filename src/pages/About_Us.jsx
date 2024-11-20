import React from 'react'
import Navbar from "../sections/Navbar.jsx";
import Credits from "../sections/Credits.jsx";
import Footer from "../sections/Footer.jsx";
import Services from "../sections/Services.jsx";
import HorizontalScroll from "../sections/HorizontalScroll.jsx";

const About_Us = () => {
    return (
        <main className=" max-w-7xl mx-auto">
            <Navbar/>
            <Credits/>
            <Services/>

            <Footer/>

        </main>
    )
}
export default About_Us
