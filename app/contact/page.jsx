import { LiaPhoneVolumeSolid } from "react-icons/lia"
import { VscLocation } from "react-icons/vsc"
import { TfiEmail } from "react-icons/tfi"
import { IoMdClock } from "react-icons/io"
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai"

import ContactForm from "./ContactForm"

export const metadata = {
    title: 'Oyugis East SDA Church | Contact',
    description: 'Contact us for any queries you may have about our church and we will get back to you as soon as possible.'
}

export default function Contact() {
    return (
        <main className="md:container md:mx-auto md:w-5/6 lg:w-3/4 pb-10">
            <div className="flex flex-col space-y-10">
                <div className="flex flex-col w-full lg:flex-row lg:space-y-0 lg:space-x-20">
                    <div className="w-full grid content-center text-start justify-start px-5 lg:px-0 lg:w-2/6 lg:justify-start lg:items-start lg:text-left">

                        <h1 className="pb-8 text-tertiary text-lg pt-8 underline lg:text-xl">Contact Us</h1>

                        <div className="w-full flex flex-row space-x-5 border-b pb-4 text-left">
                            <VscLocation className="text-3xl text-primary" />
                            <div>
                                <h2 className="font-semibold  pb-1 text-base text-primary">Address</h2>
                                <p className="max-w-sm text-sm">P.O Box 384-4020 Homabay</p>
                                <p className="max-w-sm text-sm">Oyugis Town, off Kisii-Kisumu highway</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-row space-x-5 border-b py-2 text-left">
                            <LiaPhoneVolumeSolid className="text-2xl mt-1 text-primary" />
                            <div>
                                <h2 className="font-semibold  pb-1 text-base text-primary">Call Us</h2>
                                <p className="max-w-sm text-sm">Tel: +254713446764</p>
                                <p className="max-w-sm text-sm">Tel: +254721275232</p>
                                <p className="max-w-sm text-sm">Alt: +254712876683</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-row space-x-5 border-b py-2 text-left">
                            <TfiEmail className="text-2xl text-primary" />
                            <div>
                                <h2 className="font-semibold  pb-1 text-base text-primary">Email Address</h2>
                                <p className="max-w-sm text-sm">oyugiseast2019@gmail.com</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-row space-x-5 border-b py-2 text-left">
                            <IoMdClock className="text-2xl text-primary" />
                            <div>
                                <h2 className="font-semibold  pb-1 text-base text-primary">Open Hours</h2>
                                <p className="max-w-sm text-sm pb-1"> <span className="font-semibold">Wednesday: Midweek-Devotion</span> <br /> 6:00 pm - 7:00 pm</p>
                                <p className="max-w-sm text-sm pb-1"> <span className="font-semibold">Friday: Vespers</span> <br /> 6:00 pm - 7:00 pm</p>
                                <p className="max-w-sm text-sm"> <span className="font-semibold">Saturday: Sabbath Service</span> <br />8:00 am - Sundown</p>
                            </div>
                        </div>

                        <div className="w-full flex items-center py-8 space-x-8 ">
                            <p>CONNECT WITH US:</p>
                            <div className="flex space-x-5 [&>a]:text-3xl">
                                <a href="https://www.youtube.com/@oyugiseastsdachurchchoir5643" target="_blank" rel="noreferrer" aria-label="Oyugis East Sda Church Youtube Channel">
                                    <AiFillYoutube className="text-youtubeRed hover:text-primary" />
                                </a>

                                <a href="https://web.facebook.com/oyugiseast.sdachurch/?_rdc=1&_rdr" target="_blank" rel="noreferrer" aria-label="Oyugis East Sda Facebook Page">
                                    <AiFillFacebook className="text-facebookBlue hover:text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-5 lg:w-4/6 lg:px-0">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    )
}
