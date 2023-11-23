"use client"

/* eslint-disable react/no-unescaped-entities */
import { MdChevronLeft } from "react-icons/md"
import { MdChevronRight } from "react-icons/md"
import { ministriesList } from "../ministries/import"
import Image from 'next/image'
import Button from "./utils/ButtonInternal"

export default function MinistriesSnippet() {

    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 300;
    }

    const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 300;
    }

    return (
        <main className="bg-gradient">
            <div className="px-3 py-4 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                <h2 className="text-2xl text-white font-semibold py-8 md:text-3xl">Adventist Ministries</h2>
                <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
                    <div className="lg:w-1/2">
                        <p className="text-sm text-white leading-7 text-justify md:text-base lg:max-w-lg lg:text-left">
                            Seventh-Day-Adventist church offer a rich tapestry of ministries covering education, health, outreach, music, and more. These diverse initiatives cater to spiritual growth, community engagement, and service, providing avenues for members to contribute their talents and passions toward spreading hope, compassion, and the teachings of Christ.
                        </p>
                    </div>

                    <div className="lg:w-1/2 bg-white rounded-lg">
                        <div className="relative flex items-center">
                            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                            <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth'>
                                {(ministriesList || []).map((ministry) => (
                                    <div key={ministry?.id} className="inline-block p-2 px-4 hover:scale-105 ease-in-out duration-300">
                                        <Image
                                            loading='lazy'
                                            src={ministry?.img}
                                            alt={ministry?.name}
                                            className='w-[120px]'
                                        />
                                        <p className="text-center">{ministry?.shortName}</p>
                                    </div>
                                ))}
                            </div>
                            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center my-10">
                    <Button href={'/ministries'} title={'Learn More'} />
                </div>

            </div>
        </main>
    )
}
