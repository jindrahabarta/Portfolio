import React from 'react'
import Tag from './Tag'
import Arrow from '@/app/_icons/Arrow'

const Footer = () => {
    return (
        <footer
            className="h-screen flex flex-col items-center justify-between bg-darkBlue"
            id="footer"
        >
            <div
                className="bg-darkPink h-[70vh] p-10 pb-0 w-full flex flex-col items-center justify-between break-all"
                id="footer-top"
            >
                <a
                    href="tel:775180052"
                    className={`px-10 py-2 w-fit rounded-3xl hover:cursor-pointer duration-200 group
                    bg-darkBlue hover:bg-darkBlue`}
                >
                    <p className="text-darkPink duration-200 font-bold">
                        Contact me
                    </p>
                </a>

                <a
                    href="mailto:jindriskuv@email.cz"
                    className=" text-darkBlue hover:text-lightBlue duration-300 text-5xl break-words font-bold"
                >
                    jindriskuv@email.cz
                </a>
                <div className="flex gap-10">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/jindrahabarta"
                        className="flex items-end justify-start h-10 w-14  gap-0 hover:cursor-pointer hover:gap-1 duration-200 select-none group"
                    >
                        <p className="text-xl text-darkBlue group-hover:text-lightBlue duration-200">
                            IG
                        </p>
                        <Arrow
                            stroke="#1000FF"
                            className=" rotate-[135deg] w-5 group-hover:stroke-lightBlue duration-200 mb-1 group-hover:mb-2"
                        ></Arrow>
                    </a>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=100004816807190"
                        className="flex items-end h-10 w-14  gap-0  hover:cursor-pointer hover:gap-1 duration-200 select-none group"
                    >
                        <p className="text-xl text-darkBlue group-hover:text-lightBlue duration-200">
                            FB
                        </p>
                        <Arrow
                            stroke="#1000FF"
                            className=" rotate-[135deg] w-5 group-hover:stroke-lightBlue duration-200 mb-1 group-hover:mb-2"
                        ></Arrow>
                    </a>
                </div>
            </div>

            <div className="w-full h-[20vh] bg-darkPink flex items-end justify-center text-xs p-2">
                <p className=" text-darkBlue">© 2024 JINDRICH HABARTA</p>
            </div>
        </footer>
    )
}

export default Footer
