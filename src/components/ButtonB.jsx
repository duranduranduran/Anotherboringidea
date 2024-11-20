import React from 'react'

const ButtonB = () => {
    return (
        <a href="#" className="relative">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
            <span
                className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-white hover:text-black">elevated button filled</span>
        </a>
    )
}
export default ButtonB
