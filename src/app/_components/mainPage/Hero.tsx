'use client'
import React from 'react'

const Hero = () => {
    return (
        <section
            className="h-[100svh] sm:h-screen flex flex-col justify-end px-4"
            id="hero"
        >
            <div className="bg-midBlue2 h-0.5 opacity-0 navLine heroDisapear"></div>
            <div className="md:flex gap-24 lg:gap-44 mb-20 heroDisapear">
                <div className="heroInfo opacity-0">
                    <p className="darkBlueText">
                        Wannabe Junior
                        <br />
                        Frontend developer
                    </p>
                </div>
                <div className="bg-midBlue2 h-0.5 mt-10 md:hidden block md:mt-0 navLine opacity-0"></div>
                <div className="flex justify-between md:gap-24 lg:gap-44">
                    <div className="heroInfo opacity-0">
                        <p className="darkBlueText">mail</p>
                        <a
                            href="mailto:jindriskuv@email.cz"
                            className="lightBlueText"
                        >
                            jidriskuv@email.cz
                        </a>
                    </div>
                    <div className="heroInfo opacity-0">
                        <p className="darkBlueText">50.040035, 16.742748</p>
                        <p className="darkBlueText">Cervena Voda</p>
                    </div>
                </div>
            </div>

            <h1 className="font-bold text-center text-darkPink leading-none  text-[22vw] indent-[-2.8%] heroText opacity-0">
                Portfolio
            </h1>
        </section>
    )
}

export default Hero
