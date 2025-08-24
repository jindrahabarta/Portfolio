'use client'
import React, { useState } from 'react'
import './style.css'
import MenuButton from './MenuButton'
import ProjectCard from './ProjectCard'
import { Projects as Data } from '@/app/data/Projects'

const Projects = () => {
    const [selectedBtn, setSelectedBtn] = useState('all')

    const find = (
        tech: string,
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
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
        <section className='mt-24 md:mt-32'>
            <div className='flex flex-wrap gap-4'>
                <MenuButton
                    isSelected={selectedBtn}
                    id='all'
                    handleClick={(e) => find('all', e)}
                >
                    All
                </MenuButton>
                <MenuButton
                    isSelected={selectedBtn}
                    id='wp'
                    handleClick={(e) => find('wp', e)}
                >
                    Wordpress
                </MenuButton>
                <MenuButton
                    isSelected={selectedBtn}
                    id='next'
                    handleClick={(e) => find('next', e)}
                >
                    Next.js
                </MenuButton>
                <MenuButton
                    isSelected={selectedBtn}
                    id='react'
                    handleClick={(e) => find('react', e)}
                >
                    React
                </MenuButton>
            </div>

            <div className='mt-4 flex flex-wrap align-top gap-4 w-full'>
                {Data &&
                    Data.map((project: any, i: number) => (
                        <ProjectCard
                            key={i}
                            name={project.name}
                            img={project.src}
                            tech={project.tech}
                            link={project.link}
                        />
                    ))}
            </div>
        </section>
    )
}

export default Projects
