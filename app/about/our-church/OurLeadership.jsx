import { IoPhonePortraitOutline } from 'react-icons/io5'
import { TfiEmail } from 'react-icons/tfi'
import Elder from "./Elder"
import { churchElders } from '../import'
import pastor from '../../../public/pastor.png'
import Image from 'next/image';

export default function OurLeadership() {

    return (
        <div className="w-full bg-gray-50">
            <div className="px-3 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                <h1 className='font-bold text-primary text-2xl lg:leading-8 underline lg:text-3xl'>
                    Church Leadership
                </h1>
                <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 pt-16">
                    <div className="flex justify-center items-center md:w-1/2">
                        <Image src={pastor} alt="sda general conference building" className='h-[300px] w-[300px] md:h-[350px] md:w-[350px]' />
                    </div>

                    <div className="flex flex-col space-y-4 justify-start mt-8 items-start text-justify md:justify-start md:mt-0 md:items-start md:text-start md:w-1/2">
                        <h2 className='font-bold text-xl lg:leading-8 lg:text-3xl'>
                            District & Church Pastor
                        </h2>
                        <p className='text-sm leading-6 md:text-base lg:max-w-lg'>
                            Then I saw another angel flying in the midst of heaven, having the everlasting gospel to preach to those who dwell on the earth—to every nation, tribe, tongue, and people— 7 saying with a loud voice, “Fear God and give glory to Him, for the hour of His judgment has come; and worship Him who made heaven and earth, the sea and springs of water.”
                        </p>
                        <p>
                            Rev 14:6 <span className="font-semibold">(NKJV)</span>
                        </p>
                        <hr className="border border-darkBlue w-full" />
                        <div className="flex flex-col space-y-4 [&>p]:flex [&>p]:space-x-2 [&>p]:items-center [&>p]:font-semibold">
                            <div className="pb-6 [&>p]:font-semibold">
                                <p className="text-md py-1">PASTOR WYKCLIFFE OSIDA</p>
                                <p className="text-gray-500">District & Church Pastor</p>
                            </div>
                            <p><span><IoPhonePortraitOutline className="text-lg text-gray-500" /></span> <span>+254713446764</span></p>
                            <p><span><TfiEmail className="text-xl text-gray-500" /></span> <span>osida.evangelist@gmail.com</span></p>
                        </div>
                    </div>
                </div>

                <div className="py-16 md:py-24">
                    <hr className="border border-darkBlue " />
                </div>

                <div className="flex flex-col space-y-8 pb-8">
                    <div className="flex flex-col space-y-6">
                        <h2 className='font-bold text-2xl lg:leading-8 underline lg:text-3xl'>
                            Church Officers
                        </h2>
                        <p className="leading-6 text-sm md:text-base lg:max-w-[64rem]">
                            In the Seventh-day Adventist(SDA) Church, church elders plays a significant role in the leadership and pastoral care of the congregation.
                            They are first and foremost spiritual leaders who are ordained to provide spiritual guidance to the members of the church.
                            They also provide advice and assistance to the church pastor in the running of the church.
                        </p>
                    </div>

                    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {(churchElders || []).map((elder, index) => (
                            <Elder key={index} src={elder.src} title={elder.title} name={elder.name} number={elder.number} email={elder.email} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}
