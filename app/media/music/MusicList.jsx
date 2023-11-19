/* eslint-disable react/no-unescaped-entities */
"use client"

import dynamic from "next/dynamic"
const DynamicReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false })

import { musicList } from "../import"


export default function MusicList() {
    return (
        <>
            <div className="px-3 py-6 pb-12 [&>p]:text-white md:px-0 md:container md:mx-auto md:w-5/6 md:[&>p]:leading-8 md:[&>p]:text-lg lg:w-3/4">
                <h2 className="text-3xl font-semibold py-4  text-white" >
                    Music
                </h2>
                <p className="flex flex-col space-y-2">
                    <span className="font-semibold text-white">Psalm 150:3-5 (NIV)</span>
                    <span className="text-gray-200 text-sm md:max-w-4xl">"Praise Him with the sound of the trumpet; Praise Him with the lute and harp! Praise Him with the timbrel and dance; Praise Him with stringed instruments and flutes! Praise Him with loud cymbals; Praise Him with clashing cymbals"</span>
                </p>
            </div>
            <div className="px-5 pb-10 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                <div className="grid grid-cols gap-4 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
                    {((musicList || [])).map((music, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                                <DynamicReactPlayer
                                    controls
                                    url={music.src}
                                    width="100%"
                                    height="100%" // Set a fixed height for the player
                                    style={{ position: "absolute" }}
                                />
                            </div>
                            <p className="text-sm text-white mt-2 max-w-xs font-semibold font-sans">
                                {music?.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
