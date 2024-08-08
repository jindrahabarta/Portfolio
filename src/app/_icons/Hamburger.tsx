import React from 'react'

const Hamburger = () => {
    return (
        <div className="w-16 h-16 border-white rounded-full border-2 flex flex-col items-center justify-center gap-2 hover:gap-3 hover:cursor-pointer duration-200">
            <div className="rounded-full w-1 h-1 bg-white"></div>
            <div className="rounded-full w-1 h-1  bg-white"></div>
            <div className="rounded-full w-1 h-1 bg-white"></div>
        </div>
    )
}

export default Hamburger
