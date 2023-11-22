"use client"
/* eslint-disable react/no-unescaped-entities */

import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import { GiPartyPopper } from 'react-icons/gi'
import Button from './utils/ButtonInternal'

export default function EmblaCarousel() {

    const autoplayOptions = {
        delay: 6000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }

    const [ emblaRef ] = useEmblaCarousel({ loop: true }, [ AutoPlay(autoplayOptions) ])

    return (
        <main className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                <div className="flex-shrink-0 flex-grow-0 w-full min-w-0">
                    <div className="slider-1 flex w-full items-center justify-center">
                        <div className="bg-black py-3 w-full h-full bg-opacity-[.70] lg:py-10">
                            <div className="px-3 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                                <div className="flex justify-center items-center md:justify-start md:items-start">
                                    <div className="bg-white flex flex-col justify-center space-y-4 items-center p-4 py-8 md:w-80 rounded lg:w-[30rem] lg:text-start lg:justify-start lg:items-start lg:px-10">
                                        <span className='flex items-center space-x-2 text-3xl'>
                                            <GiPartyPopper className='text-yellow-300' />
                                            <GiPartyPopper className='text-pink-600' />
                                            <GiPartyPopper className='text-purple-600' />
                                        </span>
                                        <h1 className="text-xs font-bold text-tertiary lg:text-sm">
                                            OYUGIS EAST SDA CHURCH
                                        </h1>
                                        <h2 className='text-gray-600 font-semibold text-2xl lg:max-w-xs lg:text-3xl lg:leading-10'>
                                            Celebrating 10 years of Ministry
                                        </h2>
                                        <p className='text-sm leading-6 text-gray-900 text-justify md:text-base lg:text-base'>
                                            We are thrilled to announce a momentous occasion in our faith journey – the Oyugis East SDA Church is celebrating its tenth anniversary! A decade of unwavering devotion, steadfast community, and spiritual growth has brought us to this remarkable milestone.
                                        </p>
                                        <Button href={'/about'} title={'Learn More'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
