/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { BiSolidRightArrowAlt } from 'react-icons/bi'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { IoShareSocialOutline } from 'react-icons/io5'

export default function Footer() {
    const thisYear = new Date().getFullYear();
    return (
        <main className="footer-bg top-full sticky text-white">
            <div className="bg-secondary bg-opacity-[.95] lg:bg-opacity-9
            0">
                <div className="flex flex-col space-y-12 py-14 px-3 mx-auto md:flex-row md:space-y-0 md:space-x-8 md:justify-between  md:container lg:px-0 lg:w-3/4 lg:py-20">
                    <div className="flex flex-col space-y-4 md:w-1/3">
                        <h3 className="text-xl font-bold underline">Our Mission</h3>
                        <p className="md:max-w-xs text-sm leading-7 lg:text-justify">
                            Our mission as Oyugis East Sda Church “To Make Disciples of all people, communicating the everlasting gospel in the context of the three angel's messages of Revelation 14:6-12, leading them to accept Jesus as personal saviour and unite with His remnant Church, discipling them to serve Him as Lord, and prepare tem for His soon coming.”
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4 md:w-1/3">
                        <h3 className="text-xl font-bold underline">Quick Links</h3>
                        <div className="flex flex-row space-x-4 [&>ul>li]:text-sm">
                            <ul className="flex flex-col space-y-4 w-1/2">
                                <li><Link href="/" className="flex items-center hover:text-gray-400"><BiSolidRightArrowAlt className="mr-2" /> Home </Link></li>
                                <li><Link href="/ministries" className="flex items-center hover:text-gray-400"><BiSolidRightArrowAlt className="mr-2" /> Ministries</Link></li>
                                <li><Link href="/about/our-beliefs" className="flex items-center hover:text-gray-400"><BiSolidRightArrowAlt className="mr-2" /> Beliefs</Link></li>
                                <li><Link href="/resources" className="flex items-center hover:text-gray-400"><BiSolidRightArrowAlt className="mr-2" /> Resources</Link></li>
                            </ul>

                            <ul className="flex flex-col space-y-4 w-1/2">
                                <li><Link href="/about/our-church" className="flex items-center hover:text-gray-400"><BiSolidRightArrowAlt className="mr-2" /> Our Church</Link></li>
                                <li><Link href="/media/music" className="flex items-center hover:text-gray-400"><BiSolidRightArrowAlt className="mr-2" /> Music</Link></li>
                                <li><Link href="/media/sermons" className="flex items-center hover:text-gray-400"><BiSolidRightArrowAlt className="mr-2" /> Sermons</Link></li>
                                <li><Link href="/contact" className="flex items-center hover:text-gray-400"><BiSolidRightArrowAlt className="mr-2" /> Contact Us </Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 md:w-1/3">
                        <h3 className="text-xl font-bold underline">Contact Details</h3>
                        <div className="flex flex-col space-y-5 [&>p]:flex [&>p]:items-center [&>p]:text-sm">
                            <p><FaLocationDot className="mr-2 text-xl text-gray-400" /> Oyugis Town, off Kisii-Kisumu highway</p>
                            <p><FaPhone className="mr-2 text-xl text-gray-400" />Phone: +254713446764</p>
                            <p><span><MdMail className="mr-2 text-xl text-gray-400" /></span> Email: info@oecsda.org </p>
                            <p className="space-x-5">
                                <span className="text-xl text-gray-400"><IoShareSocialOutline /></span>
                                <a href="https://www.youtube.com/@oyugiseastsdachurchchoir5643" target="_blank" rel="noreferrer" aria-label="Oyugis East Sda Church Youtube Channel"><AiFillYoutube className="text-xl text-youtubeRed" /></a>
                                <a href="https://web.facebook.com/oyugiseast.sdachurch/?_rdc=1&_rdr" target="_blank" rel="noreferrer" aria-label="Oyugis East Sda Facebook Page"><AiFillFacebook className="text-xl text-facebookBlue" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient py-8 text-white">
                <div className="flex justify-center items-center text-xs px-5 mx-auto container md:text-base lg:px-0 lg:w-3/4">
                    <p className="text-center">Seventh-Day Adventist Church Oyugis East &copy; {thisYear}</p>
                </div>
            </div>
        </main>
    )
}
