import About from "./About"
import Timeline from "./Timeline/Timeline.js"
import CurrentlyListening from "./CurrentlyListening"

export default function Main() {
  return (
    <main className="bg-white pb-20 mt-screen" id="about">
      <div className="container flex">
        <About />
        <Timeline />
      </div>
      <CurrentlyListening />
    </main>
  )
}
