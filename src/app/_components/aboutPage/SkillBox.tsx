import React from 'react'

interface props {
    cols?: number
    rows?: number
    children: React.ReactNode
    square?: boolean
    className?: string
}

const SkillBox = ({ cols, rows, children, square, className }: props) => {
    return (
        <div
            className={`p-4 bg-lightBlue rounded-xl ${
                cols ? 'col-span-' + cols : ' col-span-1'
            }  ${rows ? 'row-span-' + rows : 'row-span-1'} ${
                square && 'lg:aspect-square'
            } ${className}`}
        >
            {children}
        </div>
    )
}

export default SkillBox
