import gsap from 'gsap'
import ScrollTriggerInit from './ScrollTriggerInit'

const AnimationInit = (path) => {
    const firstLoad = gsap.timeline()
    firstLoad.set('.navLi', {
        autoAlpha: 1,
        stagger: 0.1,
    })

    if (path === '/') {
        document.getElementsByTagName('body')[0].classList.add('offScroll')
        document.getElementsByTagName('html')[0].classList.add('offScroll')
        //navBar
        firstLoad
            .set('.navLi', {
                autoAlpha: 1,
            })
            .set('.navLine', {
                stagger: 0.2,
                autoAlpha: 1,
            })
            .to('.heroText', {
                opacity: 1,
            })
            .fromTo(
                '.navLi',
                {
                    y: -50,
                },
                {
                    y: 0,
                    stagger: 0.1,
                    ease: 'power1.in',
                }
            )
            .fromTo(
                '.navLine',
                {
                    width: 0,
                },
                { width: 100 + '%', delay: 0.3 }
            )
            .to('.heroInfo', {
                opacity: 1,
                stagger: 0.1,
                onComplete: function () {
                    ScrollTriggerInit(path)
                    document
                        .getElementsByTagName('body')[0]
                        .classList.remove('offScroll')
                    document
                        .getElementsByTagName('html')[0]
                        .classList.remove('offScroll')
                },
            })
    } else if (path === '/about') {
        gsap.fromTo(
            '.aboutMe',
            {
                y: 20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                delay: 0.3,
                onComplete: () => {
                    ScrollTriggerInit(path)
                },
            }
        )
    } else {
        ScrollTriggerInit(path)
    }
}

export default AnimationInit
