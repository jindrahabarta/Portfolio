import React from 'react'
import Image from 'next/image'
import AboutMeImg from '../../../../public/images/aboutme.png'

const aboutSentece = 'jsem absolventem IT oboru Střední průmyslové školy v Šumperku. Na tomto oboru mě nejvíce zaujala tvorba webů a aplikací nebo činnosti okolo multimédií.Proto bych se chtěl v této aktivitě zdokonalovat i nadále.'

const AboutMe = () => {
    return (
        <section className="flex md:flex-row flex-col h-screen justify-center items-center px-4 md:px-20 ">
            <div className="flex-3 aboutMe opacity-0">
                <Image
                    src={AboutMeImg}
                    width={800}
                    height={500}
                    alt="About Me Image"
                    priority={true}
                    className='select-none'
                ></Image>
            </div>

            <p id='aboutHeroText' className="flex-3 text-xl sm:text-2xl md:text-3xl font-medium aboutMe opacity-0">

                <span className='aboutHeroSpan block opacity-50'>Ahoj,</span>

                {aboutSentece.split('').map((w: string, i: number) => <span className='aboutHeroSpan opacity-50' key={i}>{w}</span>)}

            </p>
        </section >
    )
}

export default AboutMe
