/* eslint-disable react/no-unescaped-entities */
import congregants from '../../public/congregants.jpg';
import Image from 'next/image';

export default function CallToAction() {
    return (
        <main className="w-full">
            <div className="bg-gradient">
                <h2 className='text-white font-bold text-xl py-16 pb-8 max-w-sm px-3 md:px-0 md:mx-auto md:text-center lg:text-3xl lg:max-w-2xl'>
                    Welcome to Seventh Day Adventist Church Oyugis East
                </h2>
                <div className="flex flex-col-reverse justify-center items-center px-3 pb-16 md:flex-row md:space-x-10 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4 text-white">
                    <div className="pt-6 md:w-1/2 md:pt-0">
                        <Image src={congregants} alt='Oyugis East Sda Church Congregation' className='italic rounded' />
                    </div>
                    <div className="flex flex-col space-y-4 md:w-1/2 [&>blockquote]:text-gray-300">
                        <h3 className='font-bold text-lg lg:text-2xl'>
                            Embrace our loving community
                        </h3>
                        <blockquote className="text-sm leading-6 md:text-base lg:max-w-4xl lg:leading-8">
                            In Oyugis East Seventh-day Adventist Church, we support each other in embracing the path that aligns with God's plan for us. Whether you're just starting or well along your journey, you're encouraged to uncover your calling and live it to the fullest at Oyugis East Seventh-day Adventist Church.
                        </blockquote>
                        <blockquote className="hidden lg:block lg:text-base lg:max-w-4xl lg:leading-8">
                            We believe in nurturing spiritual growth and understanding. Through prayer, study, and communal support, we aim to walk alongside each other as we discover and fulfill our unique purposes. We find strength in unity and encouragement in our individual journeys towards aligning our lives with God's divine will.
                        </blockquote>
                    </div>
                </div>
            </div>
            <div className="px-3 py-16 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                <div className="flex flex-col justify-center items-center text-center space-y-5">
                    <h2 className="flex flex-col space-y-3 text-base font-semibold pb-6 sm:text-2xl lg:text-3xl">
                        <span>For where two or three are gathered together in My name, I am there in the midst of them - Matthew 18:20 (NKJV)</span>
                        <span>Come, let us gather in fellowship each Sabbath to explore the teachings of the Scriptures and rejoice in His presence.</span>
                    </h2>
                    <hr className="border-2 border-tertiary w-1/2" />
                </div>
            </div>
        </main>
    )
}
