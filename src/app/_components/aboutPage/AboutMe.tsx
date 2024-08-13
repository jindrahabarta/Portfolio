import React from 'react'
import Image from 'next/image'
import AboutMeImg from '../../../../public/images/aboutme.png'

const AboutMe = () => {
    return (
        <section className="flex md:flex-row flex-col h-screen justify-center items-center ">
            <div className="flex-3">
                <Image
                    src={AboutMeImg}
                    width={500}
                    height={500}
                    alt="About Me Image"
                ></Image>
            </div>

            <p className="flex-5 text-xl sm:text-2xl md:text-3xl font-medium">
                Hi, <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                officiis aut aliquid. Id temporibus esse nihil veritatis enim a,
                molestiae facilis, pariatur, officia quos odio atque earum
                adipisci laborum nobis.
            </p>
        </section>
    )
}

export default AboutMe
