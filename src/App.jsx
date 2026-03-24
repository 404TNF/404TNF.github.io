import { useEffect } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/footer'
import i18n from './i18n'
import useStore from './store'

export default function App() {
  const language = useStore((state) => state.language)

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language)
    }
  }, [language])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}