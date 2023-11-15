/* eslint-disable react/no-unescaped-entities */

import MusicList from "./MusicList"

export const metadata = {
  title: 'Oyugis East Sda Church | Music',
  description: 'Explore our media as we bring you heavenly music wherever you are.',
}

export default function Music() {
  return (
    <main className="w-full bg-black">
      <MusicList />
    </main>
  )
}
