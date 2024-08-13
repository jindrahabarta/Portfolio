import React, { ReactNode } from 'react'
import Image from 'next/image'
import Tag from '../globalComponents/Tag'

const Card = ({ children, name }: { children?: ReactNode; name: string }) => {
    return (
        <div className="w-full md:w-screen md:h-screen flex items-center justify-center">
            <div className="bg-slate-500 rounded-3xl h-[30rem] md:h-[50%] w-full md:w-[50%] relative bg-opacity-30">
                <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-4">
                    {children}
                </div>

                <Tag
                    type="projectname"
                    className="absolute bottom-4 left-4"
                    text={name}
                ></Tag>
            </div>
        </div>
    )
}

export default Card
