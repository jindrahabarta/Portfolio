import Bio from './_components/mainPage/Bio'
import Hero from './_components/mainPage/Hero'
import Projects from './_components/mainPage/Projects'

export default function Home() {
    return (
        <main>
            <Hero></Hero>

            <Bio></Bio>

            <Projects></Projects>

            <section
                className=" h-screen flex flex-col justify-center items-center gap-4 bg-green-200 text-white"
                id="next"
            >
                <h1 className=" text-3xl">Contact me!</h1>

                <div>
                    <h1 className="text-white">Jindra</h1>
                    <p>Moravsky Karlov 103</p>
                    <p>Cervena Voda</p>
                </div>

                <p>producer@rumblestudios.tv</p>
                <div className="flex justify-between">
                    <p>ico</p>
                    <p>ico</p>
                    <p>ico</p>
                    <p>ico</p>
                </div>
            </section>
        </main>
    )
}
