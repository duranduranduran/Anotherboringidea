import React from 'react'
import Navbar from "../sections/Navbar.jsx";
import Credits from "../sections/Credits.jsx";
import Bunny from "../components/Bunny.jsx";
import Footer from "../sections/Footer.jsx";

const About_Us = () => {
    return (
        <main className=" max-w-7xl mx-auto">
            <Navbar/>
            <Credits/>
            <Footer/>

        </main>
    )
}
export default About_Us
