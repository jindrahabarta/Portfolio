'use client'
import React, { useState } from 'react'

const ChecklistItem = ({
    text,
    checked,
}: {
    text: string
    checked?: number
}) => {
    const [isChecked, setIsChecked] = useState(checked ? checked : 0)

    const click = () => {
        isChecked >= 2 ? setIsChecked(0) : setIsChecked((prev) => prev + 1)
    }

    return (
        <li
            className="group duration-200 hover:cursor-pointer flex gap-2 select-none"
            onClick={click}
        >
            {isChecked === 0 ? (
                <p>✨</p>
            ) : isChecked === 1 ? (
                <p>✅</p>
            ) : (
                <p>❌</p>
            )}
            <p
                className={`${
                    isChecked === 0
                        ? 'text-midBlue'
                        : isChecked === 1
                        ? 'text-darkBlue'
                        : ' text-midBlue2 line-through'
                } duration-200 font-bold`}
            >
                {text && text}
            </p>
        </li>
    )
}

export default ChecklistItem
