import type { Metadata } from 'next'
import { Passion_One, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './_components/globalComponents/Navbar'
import Footer from './_components/globalComponents/Footer'

const arbutus_slab = Passion_One({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-arbutus',
})
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700', '900'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'Portfolio - Jindřich Habarta',
    description: 'This website is made for presentation of my work.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            className=" scroll-smooth overflow-x-hidden bg-darkBlue"
        >
            <body
                className={`${poppins.variable} ${arbutus_slab.variable} flex justify-center`}
                id="body"
            >
                <div className="w-full max-w-[1920px]">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
