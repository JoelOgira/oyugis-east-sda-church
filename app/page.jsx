import CallToAction from "./components/CallToAction"
import EmblaCarousel from "./components/EmblaCarousel"
import MinistriesSnippet from "./components/MinistriesSnippet"
import ResourcesSnippet from "./components/ResourcesSnippet"
import SermonsSnippet from "./components/SermonsSnippet"
import Showcase from "./components/Showcase"
import Tithes from "./components/Tithes"

export const metadata = {
  title: 'Oyugis East Sda Church',
  description: 'Explore the welcoming community of Oyugis East Seventh-day Adventist Church. Discover our beliefs, activities, and events. Join us in worship and fellowship.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <EmblaCarousel />
      <CallToAction />
      <Showcase />
      <Tithes />
      <SermonsSnippet />
      <MinistriesSnippet />
      <ResourcesSnippet />
    </main>
  )
}
