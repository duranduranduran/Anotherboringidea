import React from 'react';

const HorizontalScroll = () => {
    return (
        <div className="w-full h-screen overflow-x-auto whitespace-nowrap scrollbar-custom bg-white">
            <div className="inline-block min-w-full h-1/2 bg-white p-4 m-2 rounded-lg">
                <div className="text-center">Section 1</div>
                <img src="assets/badge.png" alt="Image" className=" object-center h-1/3" />
            </div>
            <div className="inline-block min-w-full h-full bg-white p-4 m-2 rounded-lg">
                <div className="text-center">Section 2</div>
            </div>
            <div className="inline-block min-w-full h-full bg-white p-4 m-2 rounded-lg">
                <div className="text-center">Section 3</div>
            </div>
        </div>
    );
};

export default HorizontalScroll;