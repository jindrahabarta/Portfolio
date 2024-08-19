import React, { ReactNode } from 'react'
import Tag from '../globalComponents/Tag'
import Link from 'next/link'

const Card = ({
    children,
    name,
    src,
    link,
}: {
    children?: ReactNode
    name: string
    src: string
    link: string
}) => {
    return (
        <div className="w-full md:w-screen md:h-screen flex items-center justify-center">
            <div className="group/card rounded-3xl aspect-[16/9]  md:h-fit w-full md:w-[50%] relative bg-opacity-30 overflow-hidden">
                {/* <Image
                    className="w-full h-full object-cover "
                    src={src}
                    fill
                    alt={name}
                ></Image> */}

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    preload="auto"
                >
                    <source src={src} type="video/mp4" />
                </video>

                <div className=" pointer-events-none absolute top-0 left-0 bg-slate-700 bg-opacity-0 w-full h-full sm:group-hover/card:bg-opacity-30 duration-200"></div>

                <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-4">
                    {children}
                </div>

                <Link target="_blank" rel="noopener noreferrer" href={link}>
                    <Tag
                        type="projectname"
                        className="absolute bottom-4 left-4 sm:opacity-80 sm:group-hover/card:opacity-100"
                        text={name}
                    ></Tag>
                </Link>
            </div>
        </div>
    )
}

export default Card
