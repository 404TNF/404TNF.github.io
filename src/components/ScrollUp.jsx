import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollUp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 backdrop-blur-md transition-all duration-300
        ${visible 
          ? 'opacity-100 translate-y-0 bg-white/10 hover:bg-white/20 hover:scale-105 shadow-glow' 
          : 'opacity-0 translate-y-4 pointer-events-none'
        }
      `}
    >
      <ChevronUp size={22} className="text-white" />
    </button>
  )
}