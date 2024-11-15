import React from 'react'

const RotatingBadge = () => {
    return (
        <div className="rotating-badge relative w-48 h-48 rounded-full bg-purple-500 flex justify-center items-center animate-spin">
            <div className="relative w-full h-full">
                <img src="assets/badge.png" alt="Badge" className="w-full h-full object-cover rounded-full" />

            </div>
        </div>
    );
}

export default RotatingBadge
