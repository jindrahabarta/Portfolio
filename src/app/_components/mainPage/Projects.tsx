'use client'
import React, { useRef, useState } from 'react'
import Tag from '../globalComponents/Tag'
import Link from 'next/link'
import gsap from 'gsap'
import Image from 'next/image'
import { Projects as Data } from '@/app/data/Projects'

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState<null | number>(null)
    const listRef = useRef<HTMLUListElement>(null)
    const modalRef = useRef<HTMLDivElement>(null)
    const [projectCount, setProjectCount] = useState(8)

    const mouseOver = (i: number) => {
        setHoveredProject(i)

        gsap.fromTo(
            '.projectModal',
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 0.9,
                scale: 1,
                duration: 0.5,
            }
        )
    }

    const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!listRef.current || !modalRef.current) return

        const boundingBox = listRef.current.getBoundingClientRect()
        const currentLi = e.currentTarget.getBoundingClientRect()

        gsap.set('.projectModal', {
            x: e.clientX,
            y:
                currentLi.y -
                boundingBox.top -
                modalRef.current.clientHeight / 2 +
                currentLi.height / 2,
        })
    }

    return (
        <section className={`h-fit relative mt-28 px-4`}>
            <h1 className='text-midBlue2 text-3xl md:text-4xl font-bold text-center'>
                Project list
            </h1>

            <div className='grid grid-cols-6 md:grid-cols-12 mt-8'>
                <h2 className='darkBlueText'>Index</h2>
                <h2 className='darkBlueText'>Project</h2>
            </div>

            <div className='h-0.5 w-full bg-midBlue2'></div>

            <ul ref={listRef} className='w-full relative'>
                <div
                    ref={modalRef}
                    className={`${
                        hoveredProject !== null ? 'block' : 'hidden'
                    } projectModal absolute aspect-video h-40 w-auto opcity-100 rounded-2xl overflow-hidden `}
                >
                    {hoveredProject !== null && (
                        <Image
                            src={Data[hoveredProject].src}
                            alt={Data[hoveredProject].name}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover'
                        ></Image>
                    )}
                </div>

                {Data.slice(0, projectCount).map((project, i) => {
                    return (
                        <li
                            key={i}
                            id={i.toString()}
                            className='w-full cursor-pointer'
                        >
                            <Link
                                href={project.link}
                                target='_blank'
                                className='w-full flex items-center justify-between relative'
                            >
                                <div
                                    onMouseEnter={() => mouseOver(i)}
                                    onMouseMove={(e) => mouseMove(e)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    className={`${
                                        hoveredProject !== null &&
                                        hoveredProject !== i
                                            ? 'opacity-50'
                                            : 'opacity-100'
                                    } grid grid-cols-2 md:grid-cols-4 w-1/3 duration-200 py-2`}
                                >
                                    <p
                                        className={`${
                                            hoveredProject === i &&
                                            'text-midBlue2'
                                        } duration-200 text-midBlue2 `}
                                    >
                                        {i < 9 ? `0${i + 1}` : i + 1}
                                    </p>

                                    <div
                                        className={`${
                                            hoveredProject === i &&
                                            'text-midBlue2'
                                        } font-bold text-midBlue2 text-nowrap duration-200 w-full`}
                                    >
                                        {project.name}
                                    </div>
                                </div>

                                <div className='hidden md:flex gap-3'>
                                    {project.tags.map((tag, i) => (
                                        <Tag
                                            key={i}
                                            type={'tag'}
                                            text={tag.text}
                                            color={tag.color}
                                        ></Tag>
                                    ))}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>

            {projectCount < Data.length - 1 && (
                <div className='flex justify-center mt-4'>
                    <button
                        onClick={() => setProjectCount((prev) => prev + 5)}
                        className='border-2 border-midBlue2 rounded-full py-2 px-6 text-sm md:text-base font-bold text-midBlue2 hover:bg-midBlue2 hover:text-white duration-200  hover:shadow-md hover:shadow-midBlue2'
                    >
                        Více projektů
                    </button>
                </div>
            )}
        </section>
    )
}

export default Projects
