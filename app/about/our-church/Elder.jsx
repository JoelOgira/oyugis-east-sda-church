/* eslint-disable react/prop-types */
import { IoPhonePortraitOutline } from 'react-icons/io5'
import Image from 'next/image'

const Elder = ({ src, title, name, number }) => {
    return (
        <div className="flex flex-col border rounded-md border-tertiary shadow-md bg-white">
            <div className="flex justify-center items-center border-b-4 border-b-tertiary">
                <Image 
                    loading="lazy" 
                    src={src} 
                    alt={name} 
                    className='h-[300px] italic' 
                    placeholder='blur'
                />
            </div>
            <div className="flex flex-col px-3">
                <div className="flex flex-col space-y-2 justify-start py-4 items-start text-justify md:justify-start md:mt-0 md:items-start md:text-start">
                    <h2 className='font-bold text-DarkBlue text-xl lg:text-2xl lg:leading-8'>
                        {title}
                    </h2>

                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-3 [&>p]:flex [&>p]:space-x-2 [&>p]:items-center [&>p>span]:text-sm [&>p>span]lg:text-lg">
                            <p className="text-lg text-secondary">{name}</p>
                            <p>
                                <span><IoPhonePortraitOutline className="text-gray-500" /></span>
                                <span>{number}</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Elder;