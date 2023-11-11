import CallToAction from "./components/CallToAction";
import SermonsSnippet from "./components/SermonsSnippet";
import Showcase from "./components/Showcase";
import Tithes from "./components/Tithes";

export default function Home() {
  return (
    <main className="min-h-screen">
      <CallToAction />
      <Showcase />
      <Tithes />
      <SermonsSnippet />
    </main>
  )
}
