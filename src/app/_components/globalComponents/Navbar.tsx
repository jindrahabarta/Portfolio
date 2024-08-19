'use client'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AnimationInit from '@/app/_utils/AnimationInit'
import MobileMenu from '@/app/_utils/MobileMenu'
import Link from 'next/link'
import Plus from '@/app/_icons/Plus'

const Navbar = () => {
    const path = usePathname()
    const links = [
        { link: '/', text: 'Home' },
        { link: 'about', text: 'About' },
        { link: 'projects', text: 'Projects' },
        { link: '#footer', text: 'Contact' },
    ]

    const [isOpened, setIsOpened] = useState(false)

    const openMenu = () => {
        setIsOpened((prev) => !prev)
        MobileMenu(!isOpened)
    }

    useEffect(() => {
        //Inicializace lenisu
        const lenis = new Lenis()
        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        AnimationInit(path)
    }, [path])

    //LOADER
    // const router = useRouter()
    // const [isLoading, setIsLoading] = useState(false)
    // const linkMe = (to: string) => {
    //     setIsLoading(true)
    //     setTimeout(() => {
    //         router.push(to)
    //     }, 1000)
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 1500)
    // }
    return (
        <nav className="w-full fixed top-0 left-0 flex flex-col justify-end px-4 z-50">
            <div className="bg-midBlue2 h-0.5 mt-2 z-50"></div>
            <div className="flex justify-between overflow-hidden z-50">
                <div className="flex items-center gap-32">
                    {links.map(
                        (link: { link: string; text: string }, i: number) => (
                            <Link
                                key={i}
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
                    <a
                        href="./CV_JindrichHabarta.pdf"
                        download
                        className="darkBlueText hover:text-lightBlue duration-200 navLi opacity-0"
                    >
                        Download CV
                    </a>

                    <button
                        className="w-fit h-fit block md:hidden z-50 navLi opacity-0"
                        onClick={openMenu}
                    >
                        <Plus
                            className={`w-6 stroke-midBlue2 hover:stroke-lightBlue duration-200 align-middle ${
                                isOpened && '-rotate-45'
                            }`}
                        ></Plus>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div
                className={`px-4 py-32 block md:hidden absolute top-0 left-0 w-full h-screen backdrop-blur-md bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)]  z-40 duration-200 mobileMenu opacity-0 ${
                    !isOpened && 'pointer-events-none'
                }`}
            >
                <div className="w-full h-full flex flex-col justify-between">
                    {links.map(
                        (link: { link: string; text: string }, i: number) => (
                            <Link
                                onClick={openMenu}
                                key={i}
                                href={link.link}
                                className="block darkBlueText hover:text-lightBlue duration-200 mobileNavLi opacity-0"
                            >
                                {link.text}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
