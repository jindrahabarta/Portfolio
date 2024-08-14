import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Tag from '@/app/_components/globalComponents/Tag'

const ProjectCard = ({
    name,
    img,
    tech,
}: {
    name: string
    img: StaticImageData
    tech: string
}) => {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl aspect-[4/3] bg-white bg-opacity-50 group/img hover:cursor-pointer ${tech} projectCard`}
        >
            <Image
                className="w-full h-full object-cover md:group-hover/img:scale-105 md:group-hover/img:blur-sm duration-200 ease-in"
                src={img}
                fill
                alt={name}
            ></Image>
            <Tag
                type="projectname"
                text={name}
                className="absolute bottom-4 left-4 md:opacity-0 md:group-hover/img:opacity-100 duration-200"
            ></Tag>
        </div>
    )
}

export default ProjectCard
