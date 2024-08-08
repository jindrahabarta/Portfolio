import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const useScrollTrigger = () => {
    gsap.registerPlugin(ScrollTrigger)

    //HERO
    gsap.to('.heroText', {
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
        },
        opacity: 0,
    })
    gsap.fromTo(
        '.heroDisapear',
        { opacity: 1 },
        {
            scrollTrigger: {
                trigger: '#hero',
                start: '20% 20%',
                end: 'bottom 20%',
                scrub: 0.5,
            },
            opacity: 0,
        }
    )

    //BIO
    const bioSpans = document.querySelectorAll('.bio-span')

    bioSpans.forEach((span) => {
        ScrollTrigger.create({
            trigger: span,
            start: 'top 30%',
            end: 'bottom 30%',
            scrub: true,
            onEnter: () => {
                gsap.to(span, { opacity: 1 })
            },
            onEnterBack: () => {
                gsap.to(span, {
                    opacity: 1,
                })
            },
            onLeaveBack: () => {
                gsap.to(span, {
                    opacity: 0.4,
                })
            },
            onLeave: () => {
                gsap.to(span, {
                    opacity: 0.4,
                })
            },
        })
    })

    //Projects - sidescroll
    ScrollTrigger.create({
        trigger: '#projectsContainer',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,

        onUpdate: (self) => {
            const x = self.progress * -100
            gsap.to('#sliderBlock', {
                translateX: x + '%',
            })
        },
    })

    //FOOTER
    gsap.to('#footer-top', {
        scrollTrigger: {
            trigger: '#footer',
            start: 'top bottom',
            end: 'bottom bottom',

            scrub: true,
        },
        width: 80 + '%',
        borderRadius: 40,
    })

    // if (ScrollTrigger.isInViewport('.card', 0.5, true)) {
    //     gsap.to('.card', {
    //         opacity: 1,
    //     })
    // }
}

export default useScrollTrigger
