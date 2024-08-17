'use client'
import React from 'react'
import Card from './Card'
import Tag from '../globalComponents/Tag'
import { ReactFitty } from 'react-fitty'

const cards = [
    {
        src: '/videos/minigames_cover.mp4',
        name: 'Minigames',
        tags: [{ color: 'yellow', text: 'javascript' }, { text: 'gaming' }],
        link: '/projects',
    },
    {
        src: '/videos/facebookv2_cover.mp4',
        name: 'Facebook v2.0',
        tags: [
            { color: 'violet', text: 'firebase' },
            { color: 'yellow', text: 'javascript' },
        ],
        link: '/projects',
    },
    {
        src: '/videos/blog_cover.mp4',
        name: 'Blog',
        tags: [
            { color: 'yellow', text: 'javascript' },
            { text: 'firebase', color: 'violet' },
        ],
        link: '/projects',
    },
    {
        src: '/videos/gsap_cover2.mp4',
        name: 'Gsap',
        tags: [{ color: 'green', text: 'gsap' }, { text: 'dev' }],
        link: '/projects',
    },
]

const Projects = () => {
    return (
        <section
            className={`${'md:h-[500vh]'} h-fit  relative mt-28 px-4 md:px-0`}
            id="projectsContainer"
        >
            <div className="relative md:sticky top-0 left-0">
                <div className="absolute top-0 right-0 h-screen w-fit gap-4 flex items-center opacity-0 projectsText">
                    <a
                        href="/projects"
                        className="font-bold text-[25vw] text-center text-nowrap text-white hover:text-midBlue2 duration-200"
                    >
                        All Projects
                    </a>
                    <div className="font-bold text-[25vw] text-center text-white ">
                        Projects
                    </div>
                    <div className="font-bold text-[25vw] text-center text-white ">
                        Projects
                    </div>
                    <div className="font-bold text-[25vw] text-center text-white ">
                        Projects
                    </div>
                    <div className="font-bold text-[25vw] text-center text-white ">
                        Projects
                    </div>
                </div>

                <div className="overflow-x-hidden">
                    <div
                        className={`w-full md:w-fit md:h-screen flex flex-col gap-4 md:gap-0 md:flex-row`}
                        id="sliderBlock"
                    >
                        {cards.map((card) => (
                            <React.Fragment key={card.name}>
                                <Card
                                    name={card.name}
                                    src={card.src}
                                    link={'xd'}
                                >
                                    {card.tags.map((tag, i) => (
                                        <React.Fragment key={i}>
                                            <Tag
                                                color={tag.color}
                                                type="tag"
                                                text={tag.text}
                                                className="sm:opacity-80 sm:group-hover/card:opacity-100"
                                            />
                                        </React.Fragment>
                                    ))}
                                </Card>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
