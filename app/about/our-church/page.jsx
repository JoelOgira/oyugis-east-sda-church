/* eslint-disable react/no-unescaped-entities */
import OurLeadership from "./OurLeadership"

export const metadata = {
    title: 'Oyugis East Sda Church | Our Church',
    description: 'Explore the welcoming community of Oyugis East Seventh-day Adventist Church. Discover our beliefs, activities, and events. Join us in worship and fellowship.',
}

export default function OurChurch() {
    return (
        <main>
            <div className="py-12 px-3 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4 h-full">
                <div className="flex justify-center items-center h-full text-center">
                    <div className="flex items-center flex-col space-y-3">
                        <h2 className="font-semibold text-lg uppercase text-tertiary">Mission Statement</h2>
                        <p className="text-justify text-sm max-w-3xl leading-6 md:text-base">
                            Our Mission as Oyugis East Sda Church is - "Make Disciples of all people, communicating the everlasting gospel in the context of the three angel's messages of Revelation 14:6-12, leading them to accept Jesus as personal saviour and unite with His remnant Church, discipling them to serve Him as Lord, and prepare tem for His soon coming."
                        </p>
                    </div>
                </div>
            </div>

            <div className="pb-16 px-5 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4 h-full">
                <div className="flex justify-center items-center h-full text-center">
                    <div className="flex items-center flex-col space-y-3">
                        <h2 className="font-semibold text-lg uppercase text-tertiary">Vision</h2>
                        <p className="text-justify text-sm max-w-3xl leading-6 md:text-base">
                        Our vision as Oyugis East Sda Church is - "In harmony with the great prophecies of the Scriptures, we see as the climax of God's plan, the restoration of all His creation to full Harmony with His perfect will."
                        </p>
                    </div>
                </div>
            </div>

            <OurLeadership />

        </main >
    )
}
