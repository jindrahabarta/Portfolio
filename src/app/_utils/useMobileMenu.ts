import gsap from 'gsap'

const useMobileMenu = (isOpened: boolean) => {
    const menuTl = gsap.timeline()

    menuTl
        .fromTo(
            '.mobileMenu',
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.2,
            },
            '+=0.2'
        )
        .fromTo(
            '.mobileNavLi',
            {
                opacity: 0,
                x: -15,
            },
            {
                opacity: 1,
                x: 0,
                stagger: 0.1,
                duration: 0.2,
            }
        )

    if (!isOpened) {
        menuTl.play()
    } else {
        menuTl.reverse()
    }
}

export default useMobileMenu
