// src/sections/Showcase.jsx
import React from 'react';

const Showcase = () => {
    const showcases = [
        {
            title: 'Project 1',
            video: 'https://www.youtube.com/embed/VIDEO_ID_1',
            credits: [
                { name: 'Director', text: 'John Doe' },
                { name: 'Producer', text: 'Jane Doe' },
                { name: 'Cinematographer', text: 'Bob Smith' },
            ],
        },
        {
            title: 'Project 2',
            video: 'https://www.youtube.com/embed/VIDEO_ID_2',
            credits: [
                { name: 'Director', text: 'Jane Doe' },
                { name: 'Producer', text: 'John Doe' },
                { name: 'Cinematographer', text: 'Alice Johnson' },
            ],
        },
        {
            title: 'Project 3',
            video: 'https://www.youtube.com/embed/VIDEO_ID_3',
            credits: [
                { name: 'Director', text: 'Bob Smith' },
                { name: 'Producer', text: 'Alice Johnson' },
                { name: 'Cinematographer', text: 'John Doe' },
            ],
        },
        {
            title: 'Project 4',
            video: 'https://www.youtube.com/embed/VIDEO_ID_4',
            credits: [
                { name: 'Director', text: 'Alice Johnson' },
                { name: 'Producer', text: 'Bob Smith' },
                { name: 'Cinematographer', text: 'Jane Doe' },
            ],
        },
    ];

    return (
        <section className="max-w-screen-md mx-auto p-4 md:p-6 lg:p-8 text-white mt-20">
            <h2 className="text-3xl font-bold mb-4">Showcase</h2>
            {showcases.map((showcase, index) => (
                <div key={index} className="mb-12">
                    <div className="bg-black-200 rounded-lg shadow-md p-4">
                        <h3 className="text-3xl font-bold mb-2">{showcase.title}</h3>
                        <iframe
                            className="w-full h-96 md:h-128 lg:h-160"
                            src={showcase.video}
                            frameBorder="0"
                            allowFullScreen
                        />
                        <div className="mt-4">
                            <h4 className="text-2xl font-bold mb-2">Credits</h4>
                            <ul>
                                {showcase.credits.map((credit, index) => (
                                    <li key={index} className="text-lg mb-1">
                                        <span className="font-bold">{credit.name}</span>: {credit.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Showcase;