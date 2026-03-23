import {useTranslation} from 'react-i18next'
import SectionTitle from './SectionTitle'

export default function Contact() {
  const {t} = useTranslation()
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-400/10 via-white/5 to-fuchsia-500/10 p-8 md:p-12">
        <SectionTitle
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.description")}
        />

        <div className="mt-8 flex flex-wrap gap-4 text-slate-200">
          <a
            className="rounded-xl bg-white px-5 py-3 font-medium text-slate-950"
            href="mailto:geral@tuaorg.com"
          >
            geral@tuaorg.com
          </a>

          <a
            className="rounded-xl border border-white/15 px-5 py-3 font-medium"
            href="https://github.com/"
          >
            {t("contact.org_github")}
          </a>
        </div>
      </div>
    </section>
  )
}