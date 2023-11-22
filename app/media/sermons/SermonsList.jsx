"use client"

import dynamic from "next/dynamic"
const DynamicReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false })

import { sermonsList } from "../import"
import Button from "@/app/components/utils/Button"

export default function SermonsList() {
    return (
        <>
            <div className="px-3 py-6 pb-12 [&>p]:text-white md:px-0 md:container md:mx-auto md:w-5/6 md:[&>p]:leading-8 md:[&>p]:text-xl lg:w-3/4">
                <h2 className="text-3xl font-semibold py-4  text-white" >
                    Sermons
                </h2>
            </div>

            <div className="px-5 pb-10 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                <div className="grid grid-cols gap-4 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
                    {((sermonsList || [])).map((sermon, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                                <DynamicReactPlayer
                                    controls
                                    url={sermon.src}
                                    width="100%"
                                    height="100%"
                                    style={{ position: "absolute" }}
                                />
                            </div>
                            <p className="text-sm text-white pt-1 max-w-xs font-semibold font-sans">
                                {sermon?.topic}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="pt-10">
                    <Button href={'https://www.youtube.com/@oyugiseastsdachurchchoir5643/streams'} title={'View All Sermons'} />
                </div>
            </div>
        </>
    )
}
