export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-white">404 Duo Not Found</p>
          <p className="mt-2 max-w-md text-slate-400">
            Building modern digital experiences with clean design, strong performance and practical solutions.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-left md:items-end">
          <div className="flex flex-wrap gap-4 text-slate-300">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <p className="text-slate-500">© {year} 404 Duo Not Found. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
