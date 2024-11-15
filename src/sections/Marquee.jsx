import React from 'react';

const Marquee = () => {
    return (
        <div className="overflow-hidden">
            <div className="bg-white py-5 mx-auto">
                <div className="marquee">
                    <span className="text-black font-bold text-xl">
                        {Array(10).fill('Open For Business 24/7 🌍 ').join(' ')}
                    </span>
                    <span className="text-black font-bold text-xl">
                        {Array(10).fill('Open For Business 24/7 🌍  ').join(' ')}
                    </span>

                    <span className="text-black font-bold text-xl">
                        {Array(10).fill('Open For Business 24/7 🌍   ').join(' ')}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Marquee;