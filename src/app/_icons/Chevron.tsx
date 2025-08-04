import * as React from "react"

const ChevronIcon = ({ className, size, color }: { className?: string, size: number, color: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={className && className}
        width={size}
    >
        <path
            className={color}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m6 15 6-6 6 6"
        />
    </svg>
)
export default ChevronIcon
