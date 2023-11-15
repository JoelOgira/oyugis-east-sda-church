/* eslint-disable react/no-unescaped-entities */

import SermonsList from "./SermonsList"

export const metadata = {
  title: 'Oyugis East Sda Church | Sermons',
  description: 'You can follow us online through our live streams where we bring you powerful sermons at the feet of Jesus.',
}

export default function Music() {
  return (
    <main className="w-full bg-black">
      <SermonsList />
    </main>
  )
}
