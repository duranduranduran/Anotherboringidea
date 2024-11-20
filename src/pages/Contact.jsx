import React from 'react'
import Navbar from "../sections/Navbar.jsx";
import ContactForm from "../sections/ContactForm.jsx";
import Footer from "../sections/Footer.jsx";
import RotatingBadge from "../components/RotatingBadge.jsx";
const Contact = () => {
    return (
        <main className=" max-w-7xl mx-auto">
            <Navbar/>
            <ContactForm  />

            <Footer/>

        </main>)
}
export default Contact
