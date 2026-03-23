import { useState } from 'react'

import { useTranslation } from 'react-i18next'
import useStore from '../store'

export default function Header() {
  const [open, setOpen] = useState(false)
  const language = useStore((state) => state.language)
  const setLanguage = useStore((state) => state.setLanguage)

  const {t} = useTranslation()

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          {t("org_name")}
        </a>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">{t("header.about")}</a>
          <a href="#services" className="hover:text-white">{t("header.services")}</a>
          <a href="#projects" className="hover:text-white">{t("header.projects")}</a>
          <a href="#team" className="hover:text-white">{t("header.team")}</a>
          <a href="#contact" className="hover:text-white">{t("header.contact")}</a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => changeLanguage('pt')}
            className={`rounded-md border px-2 py-1 text-xs ${language === 'pt' ? 'border-white text-white' : 'border-white/20 text-slate-300 hover:text-white'}`}
            aria-label="Mudar para Portugues"
          >
            PT
          </button>
          <button
            type="button"
            onClick={() => changeLanguage('en')}
            className={`rounded-md border px-2 py-1 text-xs ${language === 'en' ? 'border-white text-white' : 'border-white/20 text-slate-300 hover:text-white'}`}
            aria-label="Change language to English"
          >
            EN
          </button>
        </div>

        <button
          className="rounded-lg border border-white/10 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t("header.close_menu") : t("header.open_menu")}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-300">
            <a href="#about" onClick={() => setOpen(false)}>{t("header.about")}</a>
            <a href="#services" onClick={() => setOpen(false)}>{t("header.services")}</a>
            <a href="#projects" onClick={() => setOpen(false)}>{t("header.projects")}</a>
            <a href="#team" onClick={() => setOpen(false)}>{t("header.team")}</a>
            <a href="#contact" onClick={() => setOpen(false)}>{t("header.contact")}</a>
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => changeLanguage('pt')}
                className={`rounded-md border px-2 py-1 text-xs ${language === 'pt' ? 'border-white text-white' : 'border-white/20 text-slate-300 hover:text-white'}`}
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => changeLanguage('en')}
                className={`rounded-md border px-2 py-1 text-xs ${language === 'en' ? 'border-white text-white' : 'border-white/20 text-slate-300 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}