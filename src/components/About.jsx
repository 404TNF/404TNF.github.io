import SectionTitle from './SectionTitle'
import { useTranslation } from 'react-i18next'

export default function About() {
  const {t} = useTranslation()
  const aboutItems = t('about.items', {returnObjects: true, defaultValue: []})
  const safeAboutItems = Array.isArray(aboutItems) ? aboutItems : []

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        description={t("about.description")}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {safeAboutItems.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-slate-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}