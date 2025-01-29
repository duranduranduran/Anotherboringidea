import React from 'react';
import RotatingBadge from "../components/RotatingBadge.jsx";

const ContactForm = () => {
    return (
        <section className="bg-white mt-20 py-12 md:py-24 lg:py-32">
            <div className="container mx-auto p-8 md:p-12 lg:p-16 xl:p-20 max-w-5xl md:max-w-6xl lg:max-w-7xl">
                <h2 className="text-7xl font-bold text-black mb-4">Get in Touch with Us</h2>

                <h1 className="text-3xl  mt-10 text-center font-bold text-black mb-4 break-all">hello@anotherboringidea.com</h1>
                <div className="flex flex-wrap justify-center gap-6">
                <a className="relative" href="#">
                        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                        <span
                            className="fold-bold relative inline-block h-full w-full rounded border-2 border-black
                            bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:text-white hover:bg-black">
                            Whatsapp
                        </span>
                    </a>
                    <a href="#" className="relative">
                        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                        <span
                            className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-white hover:text-black">Instagram</span>
                    </a>
                    <a href="#" className="relative">
                        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                        <span
                            className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-white hover:text-black">Linkedin</span>
                    </a>
                </div>

                <h2 className="text-4xl font-bold mt-10 text-black mb-10">Or use our form</h2>

                <form className="flex flex-col">
                    <input
                        type="text"
                        id="name"
                        className="py-2 pl-2 text-sm text-black bg-transparent border-b-black border-b-2 focus:outline-none focus:border-gray-500 w-full mb-6 md:mb-8 lg:mb-10"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        id="email"
                        className="py-2 pl-2 text-sm text-black bg-transparent border-b-black border-b-2 focus:outline-none focus:border-gray-500 w-full mb-6 md:mb-8 lg:mb-10"
                        placeholder="Email"
                    />
                    <textarea
                        id="message"
                        className="h-64 py-2 pl-2 text-sm text-black bg-transparent border-b-black border-b-2 focus:outline-none focus:border-gray-500 w-full mb-6 md:mb-8 lg:mb-10"
                        placeholder="Message"
                    />
                    <a className="relative mx-auto mt-4 text-sm" href="#">
                        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                        <span
                            className="fold-bold relative inline-block h-full w-full rounded border-2 border-black
        bg-white px-2 py-1 text-base font-bold text-black transition duration-100 hover:text-white hover:bg-black">
        Send Message
    </span>
                    </a>
                </form>
            </div>
            <RotatingBadge/>
        </section>
    );
};
export default ContactForm;