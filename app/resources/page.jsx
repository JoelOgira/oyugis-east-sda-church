import { booksList } from './import'
import { PiBookOpenTextBold } from 'react-icons/pi'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { FcAudioFile } from 'react-icons/fc'
import Image from 'next/image'

export const metadata = {
    title: 'Oyugis East Sda Church | Resources',
    description: 'This resources page provides you with an assortment of materials that will be valuable for your spiritual growth.',
  }

export default function Resources() {
    return (
        <main className="px-3 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
            <div className="grid grid-cols w-full gap-5 xl:grid-cols-2">
                {(booksList || []).map((book, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="flex space-x-3">
                            <Image loading='lazy' src={book?.src} alt={book?.title} className='h-[150px] pt-[0.80rem]' />
                            <div className="flex flex-col space-y-1">
                                <h4 className='font-semibold pt-2 text-secondary'>{book?.title}</h4>
                                <p className='text-sm text-justify pb-3'>{book?.description.substring(0, 250)}... <a href={book?.read} className='underline' target='_blank' rel="noreferrer">read more</a></p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 items-center gap-1 w-full [&>div]:bg-gradient-to-r from-primary to-darkBlue">
                            <div className='p-3 text-white hover:scale-95 cursor-pointer duration-300 ease-in-out'>
                                <a href={book?.read} className="flex space-x-3 justify-center items-center" target='_blank' rel="noreferrer">
                                    <span>Read:</span> <span><PiBookOpenTextBold className='text-gray-200 text-xl' /></span>
                                </a>
                            </div>

                            <div className='p-3 text-white hover:scale-95 cursor-pointer duration-300 ease-in-out'>
                                <a href={book?.pdf} className="flex space-x-3 justify-center items-center" target='_blank' rel="noreferrer">
                                    <span>PDF:</span> <span><AiOutlineFilePdf className='text-red-500 text-xl' /></span>
                                </a>
                            </div>

                            <div className='p-3 text-white hover:scale-95 cursor-pointer duration-300 ease-in-out'>
                                <a href={book?.mp3} className="flex space-x-3 justify-center items-center" target='_blank' rel="noreferrer">
                                    <span>Listen:</span> <span><FcAudioFile className='text-xl' /></span>
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
