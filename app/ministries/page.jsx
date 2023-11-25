import { ministriesList } from "./import"
import Image from "next/image"

export const metadata = {
  title: 'Oyugis East Sda Church | Ministries',
  description: 'Seventh Day Adventist church ministries as stipulated by the general conference.',
}

export default function Ministries() {
  return (
    <div className="w-full snippets-bg">
      <main className="px-3 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
        <div className="grid grid-cols gap-5 pb-8 lg:grid-cols-2">
          {(ministriesList || []).slice(0, 12).map((ministry) => (
            <div key={ministry?.id} className="flex flex-col space-y-3">
              <h2 className="text-xl font-semibold">{ministry?.name}</h2>
              <div className="flex space-x-2 p-1 border rounded-md border-primary">
                <div className="w-3/12">
                  <Image className="italic" loading="lazy" src={ministry?.img} alt={ministry?.name} />
                </div>
                <div className="grid items-center w-9/12">
                  <p className='px-2 lg:text-justify'>{ministry?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols pb-8">
          {(ministriesList || []).slice(12, 13).map((ministry) => (
            <div key={ministry?.id} className="flex flex-col space-y-3">
              <h2 className="text-xl font-semibold">{ministry?.name}</h2>
              <div className="flex space-x-2 p-1 border rounded-md border-primary">
                <div className="w-3/12">
                  <Image className="italic" loading="lazy" src={ministry?.img} alt={ministry?.name} />
                </div>
                <div className="grid items-center w-9/12">
                  <p className='px-2 lg:text-justify'>{ministry?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols gap-5 pb-8 lg:grid-cols-2">
          {(ministriesList || []).slice(13, 15).map((ministry) => (
            <div key={ministry?.id} className="flex flex-col space-y-3">
              <h2 className="text-xl font-semibold">{ministry?.name}</h2>
              <div className="flex space-x-2 p-1 border rounded-md border-primary">
                <div className="w-3/12">
                  <Image className="italic" loading="lazy" src={ministry?.img} alt={ministry?.name} />
                </div>
                <div className="grid items-center w-9/12">
                  <p className='px-2 lg:text-justify'>{ministry?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols pb-8">
          {(ministriesList || []).slice(15, 16).map((ministry) => (
            <div key={ministry?.id} className="flex flex-col space-y-3">
              <h2 className="text-xl font-semibold">{ministry?.name}</h2>
              <div className="flex space-x-2 p-1 border rounded-md border-primary">
                <div className="w-3/12">
                  <Image className="italic" loading="lazy" src={ministry?.img} alt={ministry?.name} />
                </div>
                <div className="grid items-center w-9/12">
                  <p className='px-2 lg:text-justify'>{ministry?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
