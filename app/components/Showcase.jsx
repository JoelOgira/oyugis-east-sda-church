import Button from "./utils/Button"
import gcBuilding from "../../public/gc.webp"
import Image from "next/image"

export default function Showcase() {
  return (
    <div className="w-full showcase-bg">
      <div className="bg-gradient">
        <div className="px-3 py-16 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4" >
          <div className="flex flex-col-reverse md:flex-row md:space-x-10 md:space-y-0">
            <div className="flex flex-col space-y-6 justify-center mt-8 items-center text-center [&>p]:text-justify sm:[&>p]:text-center md:[&>p]:text-start md:justify-start md:mt-0 md:items-start md:text-start md:w-1/2 lg:grid lg:items-center">
              <p className='font-semibold text-lg text-gray-200 max-w-lg md:max-w-sm lg:leading-8'>
                Seventh Day Adventist (SDA) Oyugis East Church is part of a world wide community of Seventh Day Adventist Christians
              </p>
              <p className='text-gray-200 text-sm md:text-base lg:max-w-lg lg:leading-8'>
                Our mission as Seventh – day Adventists is “To bring the people of God into a meaningful Church fellowship, witnessing to every neighbourhood, preaching the Good News, serving mankind and developing disciples for Jesus to prepare for Christ’s second coming”.
              </p>
              <Button href={'https://gc.adventist.org/'} title={'General Conference'} />
            </div>

            <div className="md:w-1/2">
              <Image 
                src={gcBuilding} alt="sda general conference building" 
                className='h-full italic rounded-md' 
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
