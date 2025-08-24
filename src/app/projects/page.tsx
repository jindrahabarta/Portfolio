import React from 'react'
import ProjectsTable from '../_components/projectsPage/ProjectsTable'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects - Jindřich Habarta',
    description: 'This website is made for presentation of my work.',
}

const Projects = () => {
    return (
        <main className='p-4 mt-32 px-4'>
            <h1 className='font-bold text-center text-midBlue leading-none indent-[-2%] heroText'>
                Projects
            </h1>
            <ProjectsTable></ProjectsTable>
        </main>
    )
}

export default Projects
