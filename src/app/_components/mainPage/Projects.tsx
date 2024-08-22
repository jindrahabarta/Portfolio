'use client'
import React from 'react'
import Card from './Card'
import Tag from '../globalComponents/Tag'

const cards = [
    {
        src: '/videos/minigames_cover.mp4',
        name: 'Minigames',
        tags: [{ color: 'yellow', text: 'javascript' }, { text: 'gaming' }],
        link: 'https://jh-games.netlify.app',
    },
    {
        src: '/videos/facebookv2_cover.mp4',
        name: 'Facebook v2.0',
        tags: [
            { color: 'violet', text: 'firebase' },
            { color: 'yellow', text: 'javascript' },
        ],
        link: 'https://jh-socialnetwork.netlify.app',
    },
    {
        src: '/videos/blog_cover.mp4',
        name: 'Blog',
        tags: [
            { color: 'yellow', text: 'javascript' },
            { text: 'firebase', color: 'violet' },
        ],
        link: 'https://jindrahabarta-blog.netlify.app',
    },
    {
        src: '/videos/gsap_cover2.mp4',
        name: 'Gsap',
        tags: [{ color: 'green', text: 'gsap' }],
        link: 'https://jh-gsap.netlify.app',
    },
    {
        src: '/videos/shopping_list_cover.mp4',
        name: 'Shopping List',
        tags: [{ color: 'violet', text: 'firebase' }, { text: 'shopping' }],
        link: 'https://jh-shopping.netlify.app',
    },
]

const Projects = () => {
    return (
        <section
            className={`${'md:h-[600vh]'} h-fit relative mt-28 px-4 md:px-0`}
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
                        className={`w-full md:w-[500%] md:h-screen flex flex-col gap-4 md:gap-0 md:flex-row`}
                        id="sliderBlock"
                    >
                        {cards.map((card) => (
                            <React.Fragment key={card.name}>
                                <Card
                                    name={card.name}
                                    src={card.src}
                                    link={card.link}
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
