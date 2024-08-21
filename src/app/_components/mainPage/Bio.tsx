import React from 'react'
import Tag from '../globalComponents/Tag'
import Link from 'next/link'

const Bio = () => {
    const bio = [
        'Na',
        'střední',
        'škole',
        'jsem',
        'objevil',
        'kouzlo',
        'psaní',
        'webových',
        'stránek.',
        'Od',
        'té',
        'doby',
        'mě',
        'naplňuje',
        'vytvářet',
        'pomocí',
        'HTML',
        'a',
        'CSS',
        'kódu.',
        'Když',
        'jsem',
        'objevil',
        'React',
        '(Next.js),',
        'pochopil',
        'jsem,',
        'že',
        'to',
        'je',
        'ta',
        'správná',
        'cesta',
        'k',
        'vytváření',
        'moderních',
        'a',
        'vyzuálně',
        'atraktivních',
        'aplikací.',
        'Proto',
        'bych',
        'se',
        'chtěl',
        'právě',
        'v',
        'tomto',
        'oboru',
        'rozvíjet',
        'dále.',
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
                            text="Více o mně"
                            className="mt-10"
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Bio
