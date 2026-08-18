import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Timeline from './components/sections/Timeline'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden bg-[#090D16]">
      <Navbar />

      <main className="w-full flex flex-col items-center justify-center">
        <Hero />

        {/* Subtle centered divider */}
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Projects />

        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Skills />

        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Timeline />

        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  )
}
