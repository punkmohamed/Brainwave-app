import { useLocation } from "react-router-dom";
import { brainwave } from "../assets"
import { navigation } from "../constants/index.js"
import Button from './Button';
import MenuSvg from './../assets/svg/MenuSvg';
import { HambugerMenu } from "./design/Header.jsx";
import { useState } from "react";
import { enablePageScroll, disablePageScroll } from 'scroll-lock'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {

    const [openNavigation, setOpenNavigation] = useState(false);
    const pathname = useLocation()
    const toogleNav = () => {
        if (openNavigation) {
            setOpenNavigation(false)
            enablePageScroll()
        } else {
            setOpenNavigation(true)
            disablePageScroll()
        }
    }
    const handleClick = () => {
        if (!openNavigation) return
        enablePageScroll()
        setOpenNavigation(false)
    }

    // useGSAP(() => {
    //     gsap.fromTo('#nav', {
    //         y: -96,
    //         opacity: 0,
    //     }, {
    //         y: 0,
    //         opacity: 1,
    //         duration: 1,
    //         ease: 'sine.out'
    //     })
    // }, [])
    return (
        <div id="nav" className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90'}`} >
            <div className="flex items-center px-5 lg:px-7.5 xL:px-10 max-lg:py-4">
                <a href="#hero">
                    <img src={brainwave} className="block w-[12rem] xl:mr-8" alt="brainwave" width={180} height={40} />
                </a>
                <nav className={` ${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                                key={item.id}>{item.title}</a>
                        ))}
                    </div>
                    <HambugerMenu />
                </nav>
                <a href="#signup" className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
                    New account</a>
                <Button className="hidden lg:flex" href="#login">
                    Sign in
                </Button>
                <Button className='ml-auto lg:hidden' px="px-3" onClick={toogleNav} >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div >
    )
}

export default Header