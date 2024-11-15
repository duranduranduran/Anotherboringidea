import React from 'react'

const RotatingBadge = () => {
    return (
        <div className=" rotating-badge  relative w-48 h-48 rounded-full bg-purple-500 flex justify-center items-center animate-spin">
            <div className="text-lg font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex flex-wrap justify-center text-center w-40">
                    <span className="text-lg font-bold text-white transform rotate-45 origin-center">Your Message </span>
                    <span className="text-lg font-bold text-white transform rotate-45 origin-center">Here</span>
                </div>
            </div>
        </div>
    );

}
export default RotatingBadge