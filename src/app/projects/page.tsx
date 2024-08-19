'use client'
import React, { useState } from 'react'
import MenuButton from '../_components/projectsPage/MenuButton'
import blog from '@/../public/images/project/blog.jpg'
import facebookv2 from '@/../public/images/project/facebookv2.jpg'
import gsap from '@/../public/images/project/gsap.jpg'
import helenpottery from '@/../public/images/project/helenpottery.jpg'
import minigames from '@/../public/images/project/minigames.jpg'
import ProjectCard from '../_components/projectsPage/ProjectCard'
import './style.css'
import { StaticImageData } from 'next/image'

const projects: {
    name: string
    img: StaticImageData
    tech: string
    link: string
}[] = [
    {
        name: 'Minigames',
        img: minigames,
        tech: 'next',
        link: 'https://jh-games.netlify.app',
    },

    {
        name: 'Helenpottery',
        img: helenpottery,
        tech: 'wp',
        link: 'https://www.helenpottery.cz/',
    },
    {
        name: 'Blog',
        img: blog,
        tech: 'next',
        link: 'blog',
    },
    {
        name: 'Facebook v2.0',
        img: facebookv2,
        tech: 'next',
        link: 'https://jh-socialnetwork.netlify.app',
    },
    {
        name: 'GSAP',
        img: gsap,
        tech: 'next',
        link: 'https://jh-gsap.netlify.app',
    },
]

const Projects = () => {
    const [selectedBtn, setSelectedBtn] = useState('all')

    const find = (tech: string, e: any) => {
        const cards = document.getElementsByClassName('projectCard')

        setSelectedBtn(tech)

        for (let i = 0; i < cards.length; i++) {
            if (tech === 'all') {
                cards[i].classList.remove('cardShow')
                cards[i].classList.remove('cardHide')
                cards[i].classList.add('cardShow')
            } else {
                if (cards[i].classList.contains(tech)) {
                    cards[i].classList.add('cardShow')
                    cards[i].classList.remove('cardHide')
                } else {
                    cards[i].classList.add('cardHide')
                    cards[i].classList.remove('cardShow')
                }
            }
        }
    }

    return (
        <main className="p-4 mt-32 px-4">
            <section className="flex gap-4">
                <MenuButton
                    isSelected={selectedBtn}
                    id="all"
                    handleClick={(e: any) => find('all', e)}
                >
                    All
                </MenuButton>
                <MenuButton
                    isSelected={selectedBtn}
                    id="wp"
                    handleClick={(e: any) => find('wp', e)}
                >
                    Wordpress
                </MenuButton>
                <MenuButton
                    isSelected={selectedBtn}
                    id="next"
                    handleClick={(e: any) => find('next', e)}
                >
                    Next.js
                </MenuButton>
            </section>

            {/* mt-4 grid gap-4 grid-cols-1 md:grid-cols-3 */}
            <section className="mt-4 flex flex-wrap align-top gap-4 w-full">
                {projects &&
                    projects.map((project: any, i: number) => (
                        <React.Fragment key={i}>
                            <ProjectCard
                                name={project.name}
                                img={project.img}
                                tech={project.tech}
                                link={project.link}
                            />
                        </React.Fragment>
                    ))}
            </section>
        </main>
    )
}

export default Projects
