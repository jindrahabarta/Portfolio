'use client'
import React from 'react'
import Card from './Card'
import Tag from '../globalComponents/Tag'

const Projects = () => {
    return (
        <section
            className="h-fit md:h-[400vh] relative mt-28 px-4 md:px-0 "
            id="projectsContainer"
        >
            <div className="relative md:sticky top-0 left-0">
                <div className="overflow-x-hidden">
                    <div
                        className="w-full md:w-[300%] md:h-screen flex flex-col gap-4 md:gap-0 md:flex-row"
                        id="sliderBlock"
                    >
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
        </section>
    )
}

export default Projects
