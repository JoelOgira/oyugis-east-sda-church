"use client"

// import logo from "../assets/logos/logos.png";
import Link from 'next/link';
import { useState } from 'react';
// import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function Header() {

    const [ isOpen, setIsOpen ] = useState(true);
    const [ isHidden, setIsHidden ] = useState(true);
    const [ isAboutClosed, setIsAboutClosed ] = useState(true);
    const [ isMediaClosed, setIsMediaClosed ] = useState(true);


    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleHidden = () => {
        setIsHidden(!isHidden);
    }

    const handleAbout = () => {
        setIsAboutClosed(!isAboutClosed)
    }

    const handleMedia = () => {
        setIsMediaClosed(!isMediaClosed)
    }

    return (
        <nav className={`${isOpen ? '' : 'sticky'} bg-opacity-95 z-30 w-full top-0 shadow-md px-3 py-6 md:px-0 lg:sticky`}>
            <div className="flex items-center space-x-10 justify-between md:container md:w-5/6 md:mx-auto lg:w-3/4">
                <Link href="/" className="flex items-center space-x-2">
                    {/* <img src={logo} alt="Site Icon" className="w-[70px] xl:w-[100px]" /> */}
                    <div className="hidden xl:flex xl:flex-col xl:[&>p]:text-white xl:[&>p]:text-[0.70rem] xl:[&>p]:underline">
                        <p className="max-w-[8rem]">Seventh-day</p>
                        <p className="max-w-[8rem]">Adventist Church</p>
                        <p className="max-w-[8rem]">Oyugis East</p>
                    </div>
                </Link>

                <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:justify-center space-x-6 font-thin text-white">
                    <Link href="/" className="hover:text-lightBlue">Home</Link>

                    <div onMouseEnter={handleAbout} onMouseLeave={handleAbout} className="cursor-pointer">
                        <div className="hover:text-lightBlue flex items-center space-x-1">
                            <span>About Us</span>
                            <span>{isAboutClosed ? "+" : "-"}</span>
                        </div>
                        {isAboutClosed ? '' :
                            <div className="z-50">
                                <div className="bg-black absolute pr-9 pl-3 py-3 flex flex-col space-y-3 shadow-md hover:[&>a]:text-lightBlue">
                                    <Link onClick={handleAbout} href="/about" >Our Church</Link>
                                    <Link onClick={handleAbout} href="/about/beliefs" >Our Beliefs</Link>
                                </div>
                            </div>}
                    </div>

                    <Link href="/ministries" className="hover:text-lightBlue">Ministries</Link>
                    <Link href="/bulletins" className="hover:text-lightBlue">Bulletins</Link>
                    <Link href="/resources" className="hover:text-lightBlue">Resources</Link>

                    <div onMouseEnter={handleMedia} onMouseLeave={handleMedia} className="cursor-pointer">
                        <div className="hover:text-lightBlue flex items-center space-x-1">
                            <span>Media</span>
                            <span>{isMediaClosed ? "+" : "-"}</span>
                        </div>
                        {isMediaClosed ? '' :
                            <div className="z-50">
                                <div className="bg-black absolute pr-9 pl-3 py-3 flex flex-col space-y-3 shadow-md hover:[&>a]:text-lightBlue">
                                    <Link onClick={handleMedia} href="/media" >Our Music</Link>
                                    <Link onClick={handleMedia} href="/media/sermons" >Live Sermons</Link>
                                    <Link onClick={handleMedia} href="/media/gallery" >Photo Gallery</Link>
                                </div>
                            </div>}
                    </div>

                    <Link href="/contact" className="hover:text-lightBlue">Contact Us</Link>
                </div>

                <button
                    onClick={() => { handleOpen(); handleHidden() }}
                    className={`hamburger ${isOpen ? '' : 'open'} block lg:hidden focus:outline-none hover:text-[#ec4949]`}
                >
                    <div>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </div>
                </button>
            </div>

            <div className="lg:hidden">
                <div id="menu" className={`flex-col ${isHidden ? 'hidden' : 'flex'} absolute place-items-start self-end py-8 mt-3  font-thin bg-opacity-[0.98] text-white rounded bg-secondary sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                    <div className="mx-auto flex flex-col space-y-6">
                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/">Home</Link>

                        <div onClick={handleAbout} className="cursor-pointer">
                            <div className="hover:text-lightBlue flex items-center space-x-1">
                                <span>About Us</span>
                                <span>{isAboutClosed ? "+" : "-"}</span>
                            </div>
                            {isAboutClosed ? '' :
                                <div className="z-50">
                                    <div className="text-gray-200 relative pt-2 flex flex-col space-y-4 hover:[&>a]:text-lightBlue [&>a]:border-b [&>a]:pb-2 hover:[&>a]:border-lightBlue">
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/about" >Our Church</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/about/beliefs" >Our Beliefs</Link>
                                    </div>
                                </div>}
                        </div>

                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/ministries">Ministries</Link>
                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/bulletins">Bulletins</Link>
                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/resources">Resources</Link>

                        <div onClick={handleMedia} className="cursor-pointer">
                            <div className="hover:text-lightBlue flex items-center space-x-1">
                                <span>Media</span>
                                <span>{isMediaClosed ? "+" : "-"}</span>
                            </div>
                            {isMediaClosed ? '' :
                                <div className="z-50">
                                    <div className="relative pt-2 flex flex-col space-y-3 shadow-md hover:[&>a]:text-lightBlue [&>a]:border-b [&>a]:pb-2 hover:[&>a]:border-lightBlue">
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/media" >Our Music</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/media/sermons" >Live Sermons</Link>
                                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/media/gallery" >Photo Gallery</Link>
                                    </div>
                                </div>}
                        </div>

                        <Link onClick={() => { handleOpen(); handleHidden() }} href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
