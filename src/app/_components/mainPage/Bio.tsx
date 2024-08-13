import React from 'react'
import Tag from '../globalComponents/Tag'
import Link from 'next/link'

const Bio = () => {
    const bio = [
        'Lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet,',
        'consectetur',
        'adipisicing',
        'elit.',
        'Voluptatum',
        'quidem',
        'maiores',
        'minima',
        'officiis',
        'distinctio',
        'cumque!',
        'Omnis',
        'quia',
        'aut',
        'in',
        'ut',
        'dolore!',
        'Nihil',
        'odit',
        'laborum',
        'maxime',
        'iste',
        'nesciunt',
        'id',
        'molestias',
        'magnam.',
        'Lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet,',
        'consectetur',
        'adipisicing',
        'elit.',
        'Voluptatum',
        'quidem',
        'maiores',
        'minima',
        'officiis',
        'distinctio',
        'cumque!',
        'Omnis',
        'quia',
        'aut',
        'in',
        'ut',
        'dolore!',
        'Nihil',
        'odit',
        'laborum',
        'maxime',
        'iste',
        'nesciunt',
        'id',
        'molestias',
        'magnam.',
        'Lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet,',
        'consectetur',
        'adipisicing',
        'elit.',
        'Voluptatum',
        'quidem',
        'maiores',
        'minima',
        'officiis',
        'distinctio',
        'cumque!',
        'Omnis',
        'quia',
        'aut',
        'in',
        'ut',
        'dolore!',
        'Nihil',
        'odit',
        'laborum',
        'maxime',
        'iste',
        'nesciunt',
        'id',
        'molestias',
        'magnam.',
    ]

    return (
        <section className="px-4" id="bio">
            <div className="bg-midBlue2 h-0.5"></div>
            <div className="md:flex md:gap-44 lg:gap-96">
                <p className="darkBlueText ">Bio</p>
                <div>
                    <p className="flex-grow text-xl sm:text-3xl md:text-5xl font-medium">
                        {bio.map((word: string, i: number) => (
                            <span className="bio-span opacity-50" key={i}>
                                {word}{' '}
                            </span>
                        ))}
                    </p>
                    <Link href="about">
                        <Tag
                            type="projectname"
                            text="About me"
                            className="mt-10"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Bio
