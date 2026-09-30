import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Education } from "./components/Education"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { Work } from "./components/Work"

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <About />
          <Work />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
