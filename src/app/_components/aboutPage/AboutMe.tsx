import React from 'react'
import Image from 'next/image'
import AboutMeImg from '../../../../public/images/aboutme.png'

const AboutMe = () => {
    return (
        <section className="flex md:flex-row flex-col h-screen justify-center items-center px-4 md:px-20 ">
            <div className="flex-3">
                <Image
                    src={AboutMeImg}
                    width={500}
                    height={500}
                    alt="About Me Image"
                ></Image>
            </div>

            <p className="flex-5 text-xl sm:text-2xl md:text-3xl font-medium">
                Ahoj, <br />
                jsem absolventem IT oboru Střední průmyslové školy v Šumperku.
                Na tomto oboru mě nejvíce zaujala tvorba webů a aplikací nebo
                činnosti okolo multimédií. Proto bych se chtěl v této aktivitě
                zdokonalovat i nadále.
            </p>
        </section>
    )
}

export default AboutMe
