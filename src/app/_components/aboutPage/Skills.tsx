import React from 'react'
import SkillBox from './SkillBox'
import Link from 'next/link'
import Firebase from '@/app/about/_icons/Firebase'
import HTML from '@/app/about/_icons/HTML'
import CSS from '@/app/about/_icons/CSS'
import ReactIco from '@/app/about/_icons/ReactIco'
import JS from '@/app/about/_icons/JS'
import Next from '@/app/about/_icons/Next'
import Tailwind from '@/app/about/_icons/Tailwind'
import Illustrator from '@/app/about/_icons/Illustrator'
import Photoshop from '@/app/about/_icons/Photoshop'
import AE from '@/app/about/_icons/AE'
import Checklist from './Checklist'

const Skills = () => {
    const icons: { href: string; ico: React.ReactElement }[] = [
        {
            href: '',
            ico: <HTML></HTML>,
        },
        {
            href: '',
            ico: <CSS></CSS>,
        },
        {
            href: '',
            ico: <JS></JS>,
        },
        {
            href: '',
            ico: <ReactIco></ReactIco>,
        },
        {
            href: '',
            ico: <Next></Next>,
        },
        {
            href: '',
            ico: <Tailwind></Tailwind>,
        },
        {
            href: '',
            ico: <Firebase></Firebase>,
        },

        {
            href: '',
            ico: <Illustrator></Illustrator>,
        },
        {
            href: '',
            ico: <Photoshop></Photoshop>,
        },
        {
            href: '',
            ico: <AE></AE>,
        },
    ]

    return (
        <section className="mt-10 flex flex-col md:grid md:grid-cols-5 md:grid-rows-5 gap-4 px-4 lg:px-20 ">
            {/* <div className="bg-red-300 col-span-2 row-span-2"></div> */}

            <SkillBox cols={2} rows={2} square>
                <h2 className="text-darkBlue text-xl font-bold underline">
                    Dovednosti:
                </h2>

                <div className="grid grid-cols-6  gap-3 mt-2">
                    {icons.map((ico, i) => (
                        <Link
                            href={ico.href}
                            key={i}
                            className="w-full h-full rounded-lg bg-[#9cbfff] p-1 hover:cursor-pointer duration-200 bg-opacity-0 hover:bg-opacity-100"
                        >
                            {ico.ico}
                        </Link>
                    ))}
                </div>
            </SkillBox>

            {/* <div className="col-span-3 row-span-3 bg-red-200"></div> */}

            <SkillBox cols={3} rows={3} className="flex flex-col gap-2">
                <h2 className="text-darkBlue text-xl  font-bold underline">
                    O mně:
                </h2>

                <h3 className="text-darkBlue font-bold mt-2">Vzdělání</h3>

                <h4 className="text-darkBlue text-sm">2019 - 2024</h4>
                <p className="text-darkBlue">
                    <a
                        href="https://www.vsps-su.cz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-darkBlue font-bold"
                    >
                        VOŠ a SPŠ Šumperk
                    </a>
                    - obor Informační Technologie
                </p>

                <h4 className="text-darkBlue text-sm">2009 - 2018</h4>
                <p className="text-darkBlue">
                    <a
                        href="https://www.cvvoda.cz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-darkBlue font-bold"
                    >
                        ZŠ Červená Voda
                    </a>
                </p>

                <h3 className="text-darkBlue font-bold mt-2">Zkušenosti</h3>

                <ul>
                    <li>
                        <p className="text-darkBlue">
                            <span className="text-darkBlue font-bold">
                                HTML a CSS
                            </span>{' '}
                            - 5 let
                        </p>
                    </li>
                    <li>
                        <p className="text-darkBlue">
                            <span className="text-darkBlue font-bold">
                                Next.js
                            </span>{' '}
                            - 5 měsíců
                        </p>
                    </li>
                </ul>

                <h3 className="text-darkBlue font-bold mt-2">Volný čas</h3>

                <p className="text-darkBlue">
                    Jsem sportovně založený člověk s pozitivním nastavením
                    mysli. Pokud mě práce baví a dává mi smysl, nemám problém u
                    ní trávit hodiny volného času. Jako můj hlavní koníček
                    považuji výrobu designových koberečků na zakázku. Volný čas
                    rád trávím jakoukoli sportovní aktivitou nebo s přáteli.
                </p>
            </SkillBox>

            <SkillBox cols={2} rows={2} square>
                <h2 className="text-darkBlue text-xl font-bold underline">
                    Softskills:
                </h2>

                <ul className="mt-2">
                    <li>
                        <p className="text-darkBlue">- Angličtina (B2)</p>
                    </li>
                    <li>
                        <p className="text-darkBlue">- Kreativita</p>
                    </li>
                    <li>
                        <p className="text-darkBlue">- Zodpovědnost</p>
                    </li>
                    <li>
                        <p className="text-darkBlue">- Pracovní nasazení</p>
                    </li>
                    <li>
                        <p className="text-darkBlue">
                            - Správa sociálních sítí
                        </p>
                    </li>
                </ul>
            </SkillBox>

            <SkillBox cols={1} rows={1} className="md:col-span-1 lg:col-span-1">
                <h2 className="text-darkBlue text-xl duration-200 font-bold underline">
                    Sociální sítě:
                </h2>
                <div className="mt-2 h-full flex flex-col gap-2">
                    <a
                        className="text-midBlue2 hover:text-midBlue text-lg lg:text-xl duration-200 font-bold"
                        href="https://www.instagram.com/jindrahabarta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a
                        className="text-midBlue2 hover:text-midBlue text-lg lg:text-xl duration-200 font-bold"
                        href="https://www.facebook.com/profile.php?id=100004816807190"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                    <a
                        className="text-midBlue2 hover:text-midBlue text-lg lg:text-xl duration-200 font-bold"
                        href="https://github.com/jindrahabarta?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </div>
            </SkillBox>

            <SkillBox cols={2} rows={2}>
                <h2 className="text-darkBlue text-xl font-bold underline ">
                    Checklist
                </h2>
                <Checklist></Checklist>
            </SkillBox>

            <SkillBox cols={2} rows={1} className="hidden lg:block">
                <h2 className="text-darkBlue text-xl duration-200 font-bold underline">
                    Kontakt:
                </h2>
                <div className="mt-2 h-full flex flex-col gap-2">
                    <a
                        className="text-midBlue2 hover:text-midBlue text-xl duration-200 font-bold"
                        href="mailto:jindriskuv@email.cz"
                    >
                        Email
                    </a>
                    <a
                        className="text-midBlue2 hover:text-midBlue text-xl duration-200 font-bold"
                        href="tel:775180052"
                    >
                        Telefon
                    </a>
                    <a
                        className="text-midBlue2 hover:text-midBlue text-xl duration-200 font-bold"
                        href="tel:775180052"
                    >
                        CV
                    </a>
                </div>
            </SkillBox>

            <SkillBox cols={2} rows={1} className="lg:col-span-1">
                <h2 className="text-darkBlue text-xl font-bold underline ">
                    Hobby
                </h2>

                <p className="mt-2 text-lg text-darkBlue">
                    Cestování,{' '}
                    <a
                        className="text-red-500 hover:text-midBlue2 duration-200 "
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/drippy_rugs"
                    >
                        drippy_rugs
                    </a>
                    , běhání, tvorba webů, střih videí, kytara
                </p>
            </SkillBox>
        </section>
    )
}

export default Skills
