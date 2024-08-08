import React, { ReactNode } from 'react'
import Image from 'next/image'
import Tag from '../globalComponents/Tag'
import Arrow from '@/app/_icons/Arrow'

const Card = ({ children, name }: { children?: ReactNode; name: string }) => {
    return (
        <div className="w-screen h-screen flex items-center justify-center ">
            <div className="">
                <div className="bg-slate-500 rounded-3xl h-[40vw] w-[60vw] relative bg-opacity-30">
                    <div className="absolute top-4 right-4 flex gap-4">
                        {children}
                    </div>

                    <Tag
                        type="projectname"
                        className="absolute bottom-4 left-4"
                        text={name}
                    ></Tag>
                </div>
                <div className="w-[60vw] flex justify-between mt-4">
                    <a
                        href="#projects2"
                        className="px-4 py-1 rounded-3xl hover:cursor-pointer duration-200 bg-gray-500 bg-opacity-55 hover:bg-gray-700"
                    >
                        <Arrow className="w-8"></Arrow>
                    </a>
                    <a
                        href="#projects3"
                        className="px-4 py-1 rounded-3xl hover:cursor-pointer duration-200 bg-gray-500 bg-opacity-55 hover:bg-gray-700"
                    >
                        <Arrow className="w-8 rotate-180"></Arrow>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
