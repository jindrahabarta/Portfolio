'use client'
import React, { useState } from 'react'
import MenuButton from '../_components/projectsPage/MenuButton'
import JapanBg from '@/../public/images/japanesebg.jpg'
import Japan2 from '@/../public/images/japan2.jpeg'
import ProjectCard from '../_components/projectsPage/ProjectCard'
import './style.css'
import { StaticImageData } from 'next/image'

const projects: {
    name: string
    img: StaticImageData
    tech: string
}[] = [
    {
        name: 'Project1',
        img: Japan2,
        tech: 'wp next',
    },
    {
        name: 'Project2',
        img: JapanBg,
        tech: 'next',
    },
    {
        name: 'Project2',
        img: JapanBg,
        tech: 'next',
    },
]

const page = () => {
    const [selectedBtn, setSelectedBtn] = useState('all')

    // const btns: any = []

    // projects.forEach((project: any) => {
    //     if (!btns.includes(project.tech)) {
    //         projects.push(project)
    //     }
    // })

    // const btns = projects
    //     .map((item) => item)
    //     .filter((value, index, current) => current.indexOf(value) === index)

    const find = (tech: string, e: any) => {
        const cards = document.getElementsByClassName('projectCard')

        setSelectedBtn(tech)

        for (let i = 0; i < cards.length; i++) {
            if (tech === 'all') {
                cards[i].classList.remove('cardShow')
                cards[i].classList.remove('cardHide')
            } else {
                cards[i].classList.remove('cardShow')
                cards[i].classList.remove('cardHide')
                if (cards[i].classList.contains(tech)) {
                    cards[i].classList.add('cardShow')
                } else {
                    cards[i].classList.add('cardHide')
                }
            }
        }
    }

    return (
        <main className="p-4 mt-32 px-4">
            <section className="flex gap-4">
                {/* {btns.map((btn: any, i: number) => (
                    <React.Fragment key={btn.tech}>
                        <MenuButton
                            isSelected={selectedBtn}
                            id={btn.tech}
                            handleClick={(e: any) => find(btn.tech, e)}
                        >
                            {btn.btn}
                        </MenuButton>
                    </React.Fragment>
                ))} */}
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

            <section className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-3">
                {projects &&
                    projects.map((project: any, i: number) => (
                        <React.Fragment key={i}>
                            <ProjectCard
                                name={project.name}
                                img={project.img}
                                tech={project.tech}
                            />
                        </React.Fragment>
                    ))}
            </section>
        </main>
    )
}

export default page
