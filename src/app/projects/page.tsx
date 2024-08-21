import React from 'react'
import ProjectsTable from '../_components/projectsPage/ProjectsTable'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects - Jindřich Habarta',
    description: 'This website is made for presentation of my work.',
}

const Projects = () => {
    return (
        <main className="p-4 mt-32 px-4">
            <ProjectsTable></ProjectsTable>
        </main>
    )
}

export default Projects
