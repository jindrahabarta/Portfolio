import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const ScrollTriggerInit = (path) => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.registerPlugin(ScrollTrigger)

    let mm = gsap.matchMedia()

    if (path === '/') {
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
                scrub: 0.1,

                onEnter: () => {
                    gsap.to(span, { opacity: 1, duration: 0.2 })
                },
                onEnterBack: () => {
                    gsap.to(span, {
                        opacity: 1,
                        duration: 0.2,
                    })
                },
                onLeaveBack: () => {
                    gsap.to(span, {
                        opacity: 0.5,
                        duration: 0.2,
                    })
                },
                onLeave: () => {
                    gsap.to(span, {
                        opacity: 0.5,
                        duration: 0.2,
                    })
                },
            })
        })

        const projectsTl = gsap.timeline()

        mm.add('(min-width: 768px)', () => {
            ScrollTrigger.create(
                {
                    trigger: '#projectsContainer',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                    snap: {
                        snapTo: 0.2,
                        duration: 0.25,
                        delay: 0,
                        ease: 'power1.inOut',
                    },

                    onUpdate: (self) => {
                        const x = self.progress * -100
                        const y = self.progress * 100
                        gsap.to('#sliderBlock', {
                            translateX: x + '%',
                        })
                        gsap.to('.projectsText', {
                            translateX: y - 5 + '%',
                        })
                    },
                },
                projectsTl.to('.projectsText', {
                    opacity: 0.25,
                })
            )
        })
    }

    //FOOTER

    mm.add('(min-width: 640px)', () => {
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
    })
    mm.add('(max-width: 639px)', () => {
        gsap.to('#footer-top', {
            scrollTrigger: {
                trigger: '#footer',
                start: 'top bottom',
                end: 'bottom bottom',

                scrub: true,
            },
            width: 90 + '%',
            borderRadius: 40,
        })
    })
}

export default ScrollTriggerInit
