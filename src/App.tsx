import { Background } from "./components/Background"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Testimonials } from "./components/Testimonials"
import { Work } from "./components/Work"

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Skills />
          <Work />
          <Projects />
          <Testimonials />
          <Background />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
