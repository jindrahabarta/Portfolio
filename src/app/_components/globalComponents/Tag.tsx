import React from 'react'

const Tag = ({
    type,
    color,
    text,
    className,
}: {
    type: string
    color?: string
    text: string
    className?: string
}) => {
    if (type === 'tag') {
        return (
            <div
                className={`${className} w-fit px-4 py-1 rounded-3xl hover:cursor-pointer duration-200
                 ${!color && 'bg-gray-500 hover:bg-gray-400 '}
                ${color === 'yellow' && 'bg-yellow hover:bg-[#fced0f]'}
                 ${color === 'green' && 'bg-green hover:bg-[#2ae871]'}
                  ${color === 'violet' && 'bg-violet-500 hover:bg-[#9b72f7]'}
                   ${color === 'blue' && 'bg-darkBlue hover:bg-midBlue'}
              `}
            >
                <p className="text-white text-sm">{text}</p>
            </div>
        )
    } else if (type === 'projectname') {
        return (
            <div
                className={`${className} w-fit px-10 py-2 rounded-3xl hover:cursor-pointer duration-200 group
bg-darkPink hover:bg-midBlue
`}
            >
                <p className="text-darkBlue group-hover:text-lightBlue duration-200 font-bold">
                    {text}
                </p>
            </div>
        )
    }
}

export default Tag
