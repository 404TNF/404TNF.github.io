import { useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/footer'
import Header from './components/Header'

import Home from './pages/Home'
import ProjectsPage from './components/ProjectsPage'
import ProjectDetail from './pages/ProjectsDetails'

import ScrollUp from './components/ScrollUp'

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
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        <ScrollUp />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  )
}