"use client"

// SermonsSnippet.jsx
import dynamic from 'next/dynamic';
import { sermonsList } from '../media/import';
import ButtonInternal from './utils/ButtonInternal';

// Dynamically import ReactPlayer to avoid server-side rendering issues
const DynamicReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false });

export default function SermonsSnippet() {
  return (
    <div className="bg-black">
      <div className="px-3 py-16 container mx-auto">
        <h2 className="text-3xl font-semibold pb-10 text-white">Virtual Sermons</h2>
        <div className="grid grid-cols gap-y-12 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sermonsList.slice(0, 4).map((sermon, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {/* Use the dynamically imported ReactPlayer component */}
                <DynamicReactPlayer
                  controls
                  url={sermon.src}
                  width="100%"
                  height="100%"
                  style={{ position: 'absolute' }}
                />
              </div>
              <p className="text-sm text-white mt-2 max-w-xs font-semibold font-sans">
                {sermon?.topic}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-start pt-10">
          <ButtonInternal href={'/media/sermons'} title={'More Sermons'} />
        </div>
      </div>
    </div>
  );
}
