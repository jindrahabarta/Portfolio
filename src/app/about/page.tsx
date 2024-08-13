import React from 'react'
import AboutMe from '../_components/aboutPage/AboutMe'
import Firebase from './_icons/Firebase'

const page = () => {
    return (
        <main className=" px-4 sm:px-20 lg:px-32">
            <AboutMe></AboutMe>
            <h1 className="text-4xl font-bold">Skills:</h1>
            <section className="flex  justify-center">
                <div className=" grid grid-cols-5 grid-rows-2 gap-4 p-4 border-2 border-white border-opacity-10 rounded-xl bg-black bg-opacity-20">
                    <div className="relative flex flex-col items-center justify-center w-40 h-40  rounded-xl bg-black bg-opacity-30 backdrop-blur-lg border-2 border-white border-opacity-10 group hover:cursor-pointer">
                        <Firebase className="w-16 absolute top-8 left-12 blur-2xl opacity-0 group-hover:opacity-100 duration-200" />
                        <Firebase className="w-16" />
                        <h1 className="mt-4 font-bold">Firebase</h1>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-40 h-40  rounded-xl bg-black bg-opacity-30 backdrop-blur-lg border-2 border-white border-opacity-10 group hover:cursor-pointer">
                        <Firebase className="w-16 absolute top-8 left-12 blur-2xl opacity-0 group-hover:opacity-100 duration-200" />
                        <Firebase className="w-16" />
                        <h1 className="mt-4 font-bold">Firebase</h1>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-40 h-40  rounded-xl bg-black bg-opacity-30 backdrop-blur-lg border-2 border-white border-opacity-10 group hover:cursor-pointer">
                        <Firebase className="w-16 absolute top-8 left-12 blur-2xl opacity-0 group-hover:opacity-100 duration-200" />
                        <Firebase className="w-16" />
                        <h1 className="mt-4 font-bold">Firebase</h1>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-40 h-40  rounded-xl bg-black bg-opacity-30 backdrop-blur-lg border-2 border-white border-opacity-10 group hover:cursor-pointer">
                        <Firebase className="w-16 absolute top-8 left-12 blur-2xl opacity-0 group-hover:opacity-100 duration-200" />
                        <Firebase className="w-16" />
                        <h1 className="mt-4 font-bold">Firebase</h1>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-40 h-40  rounded-xl bg-black bg-opacity-30 backdrop-blur-lg border-2 border-white border-opacity-10 group hover:cursor-pointer">
                        <Firebase className="w-16 absolute top-8 left-12 blur-2xl opacity-0 group-hover:opacity-100 duration-200" />
                        <Firebase className="w-16" />
                        <h1 className="mt-4 font-bold">Firebase</h1>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-40 h-40  rounded-xl bg-black bg-opacity-30 backdrop-blur-lg border-2 border-white border-opacity-10 group hover:cursor-pointer">
                        <Firebase className="w-16 absolute top-8 left-12 blur-2xl opacity-0 group-hover:opacity-100 duration-200" />
                        <Firebase className="w-16" />
                        <h1 className="mt-4 font-bold">Firebase</h1>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
