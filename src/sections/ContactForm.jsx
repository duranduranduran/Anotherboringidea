// ContactForm.jsx
// ContactForm.jsx
import React from 'react';

const ContactForm = () => {
    return (
        <section className="bg-white mt-20 py-12">
            <div className="container mx-auto p-4 md:p-6 lg:p-12 max-w-md">
                <h2 className="text-lg font-bold text-black mb-4">Get in Touch</h2>
                <form className="flex flex-col">
                    <input
                        type="text"
                        id="name"
                        className="py-2 pl-2 text-sm text-black bg-transparent border-b-black border-b-2 focus:outline-none focus:border-gray-500 w-full"
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        id="email"
                        className="py-2 pl-2 text-sm text-black bg-transparent border-b-black border-b-2 focus:outline-none focus:border-gray-500 w-full"
                        placeholder="Email"
                    />
                    <textarea
                        id="message"
                        className="h-32 py-2 pl-2 text-sm text-black bg-transparent border-b-black border-b-2 focus:outline-none focus:border-gray-500 w-full"
                        placeholder="Message"
                    />
                    <button
                        type="submit"
                        className="py-2 px-4 text-sm text-white bg-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-full mt-4"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
export default ContactForm;