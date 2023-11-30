"use client"

import manual from '../../public/Church_Manual.jpg'
import steps from '../../public/steps.jpg'
import encyclopedia from '../../public/encyclopedia.webp'
import lessons from '../../public/Lessons_App.webp'
import Image from 'next/image'
import ButtonInternal from './utils/ButtonInternal'
import ButtonTransparent from './utils/ButtonTransparent'


export default function ResourcesSnippet() {

    const resources = [
        { title: "Church Manual", img: manual, link: "https://www.adventist.org/resources/church-manual/" },
        { title: "Encyclopedia", img: encyclopedia, link: "https://encyclopedia.adventist.org/" },
        { title: "Steps to Christ", img: steps, link: "https://m.egwwritings.org/en/book/108/info" },
        { title: "Lessons", img: lessons, link: "https://play.google.com/store/apps/details?id=com.cryart.sabbathschool" },
    ]

    return (
        <div className="snippets-bg w-full">
            <div className='px-3 py-16 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4'>
                <h2 className="text-2xl font-semibold py-8 md:text-3xl">Adventist Resources</h2>
                <div className="flex flex-col-reverse lg:flex-row lg:space-x-5">
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 items-center w-full gap-4">
                            {(resources || []).map((resource, index) => (
                                <div key={index} className="flex flex-col space-y-2">

                                    <Image
                                        src={resource?.img}
                                        alt={resource?.title}
                                        className='w-[200px] h-[250px] italic'
                                    />

                                    <ButtonTransparent href={resource?.link} title={resource?.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 pb-8 lg:grid lg:justify-center lg:items-center">
                        <p className='lg:hidden'>
                            Discover a wide array of resources encompassing education, healthcare, and spiritual guidance. From publications spanning health to spirituality, online courses, and multimedia, these offerings aim to nurture holistic well-being and spiritual growth for a global community.
                        </p>
                        <p className='hidden lg:flex lg:flex-col lg:space-y-6 lg:leading-6'>
                            <span>
                                The Seventh-day Adventist Church offers a diverse array of resources encompassing spiritual nourishment, educational materials, community outreach initiatives, and more. Our website stands as a vibrant gateway to this wealth of offerings, serving as a comprehensive repository connecting individuals to these valuable resources. From insightful sermons and thought-provoking articles to study guides and uplifting music, our platform embodies an inclusive space where seekers can explore, discover, and deepen their spiritual journey.
                            </span>

                            <span>
                                Whether seeking guidance in biblical studies, engaging with youth programs, or discovering ways to contribute to social causes, our platform curates a myriad of materials and tools. From timeless teachings and multimedia content to practical tools for personal growth, our website acts as a catalyst, empowering visitors to delve into the multifaceted offerings provided by the Seventh-day Adventist Church. As a beacon of knowledge and inspiration, we aim to foster an enriching experience, nurturing minds and spirits alike through our carefully curated collection of resources.
                            </span>
                        </p>
                    </div>
                </div>

                <hr className='bg-yellow border border-yellow-400 mt-10' />

                <div className="pt-10">
                    <ButtonInternal className='bg-red-900' href='/resources' title='More Resources' />
                </div>

            </div>
        </div>
    )
}
