import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)
export const gsapAnimation = (target, animationFromProps, animationToProps) => {
    gsap.fromTo(target, {
        ...animationFromProps
    }, {
        ...animationToProps,
        scrollTrigger: target
        // scrollTrigger: {
        //     trigger: target,
        //     toggleActions: 'restart reverse restart reverse',
        //     start: 'top 85%',
        //     // scrub: true,
        //     ...scrollProps,
        // }
    })
}