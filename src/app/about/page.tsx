import React from 'react'
import AboutMe from '../_components/aboutPage/AboutMe'

import Skills from '../_components/aboutPage/Skills'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Me - Jindřich Habarta',
    description: 'This website is made for presentation of my work.',
}

const About = () => {
    return (
        <main>
            <AboutMe></AboutMe>

            <Skills></Skills>
        </main>
    )
}

export default About
