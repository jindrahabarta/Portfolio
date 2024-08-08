'use client'
import React from 'react'
import Card from './Card'
import Tag from '../globalComponents/Tag'

const Projects = () => {
    return (
        <section className="h-[400vh] relative mt-28 " id="projectsContainer">
            <div className="sticky top-0 left-0">
                <div className="overflow-x-hidden">
                    <div className=" w-fit h-screen flex" id="sliderBlock">
                        <Card name="project1">
                            <Tag color="yellow" type="tag" text="dev" />
                            <Tag color="green" type="tag" text="xd" />
                            <Tag type="tag" text="run" />
                        </Card>

                        <Card name="project2"></Card>

                        <Card name="project3"></Card>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen bg-red-500" id="projects2"></div>
            <div className="w-full h-screen bg-blue-400" id="projects3"></div>
            <div className="w-full h-screen bg-green" id="projects4"></div>
        </section>
    )
}

export default Projects
