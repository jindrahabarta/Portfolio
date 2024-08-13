import React from 'react'

interface props {
    cols?: number
    rows?: number
    children: React.ReactNode
    square?: boolean
}

const SkillBox = ({ cols, rows, children, square }: props) => {
    return (
        <div
            className={`p-4 bg-lightBlue rounded-xl col-span-${
                cols ? cols : 1
            } row-span-${rows ? rows : 1} ${square && 'lg:aspect-square'}`}
        >
            {children}
        </div>
    )
}

export default SkillBox
