'use client'
import Lenis from 'lenis'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useAnimation from '@/app/_utils/useAnimation'
import Link from 'next/link'
import Plus from '@/app/_icons/Plus'

const Navbar = () => {
    const links = [
        { link: '/', text: 'Home' },
        { link: 'about', text: 'About' },
        { link: 'projects', text: 'Projects' },
    ]

    const [isOpened, setIsOpened] = useState(false)

    useEffect(() => {
        //Inicializace lenisu
        const lenis = new Lenis()
        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        useAnimation()
    }, [])

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const linkMe = (to: string) => {
        setIsLoading(true)
        setTimeout(() => {
            router.push(to)
        }, 1000)
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }
    return (
        // <nav
        //     className={`fixed top-0 right-0 rounded-bl-full bg-darkPink duration-200 z-50 ${
        //         isOpened ? 'w-96 h-96' : 'w-0 h-0'
        //     }  `}
        // >
        //     <button
        //         className="absolute top-4 right-4"
        //         onClick={(prev) => {
        //             setIsOpened((prev) => !prev), console.log(isOpened)
        //         }}
        //     >
        //         <Hamburger />
        //     </button>
        // </nav>
        <nav className="w-full fixed top-2 flex flex-col justify-end px-4">
            <div className="bg-midBlue2 h-0.5"></div>
            <div className="flex justify-between overflow-hidden">
                <div className="flex gap-32">
                    {links.map(
                        (link: { link: string; text: string }, i: number) => (
                            <Link
                                href={link.link}
                                className="hidden md:block darkBlueText hover:text-lightBlue duration-200 navLi opacity-0"
                            >
                                {link.text}
                            </Link>
                        )
                    )}
                    <Link
                        href={'/'}
                        className="md:hidden block darkBlueText hover:text-lightBlue duration-200 navLi opacity-0"
                    >
                        Jindra Habarta
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="darkBlueText hover:text-lightBlue duration-200 navLi opacity-0"
                    >
                        Download CV
                    </Link>
                    <button
                        className="w-fit h-fit block md:hidden"
                        onClick={(prev) => {
                            setIsOpened((prev) => !prev)
                        }}
                    >
                        <Plus
                            className={`w-6 stroke-midBlue2 hover:stroke-lightBlue duration-200 align-middle ${
                                isOpened && '-rotate-45'
                            }`}
                        ></Plus>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
