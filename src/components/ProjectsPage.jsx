import { useTranslation } from 'react-i18next'
import projects from '../data/projects'
import ProjectCard from '../pages/ProjectCard'

export default function ProjectsPage() {
  const { t } = useTranslation()

  // 🔥 ordenar projetos
  const sortedProjects = [...projects].sort((a, b) => {
    const aVal = a?.progress?.value ?? 0
    const bVal = b?.progress?.value ?? 0

    // 1. Featured primeiro
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1

    // 2. Completed (100%) primeiro
    if (aVal === 100 && bVal !== 100) return -1
    if (bVal === 100 && aVal !== 100) return 1

    // 3. Ordenação por progresso (DESC)
    return bVal - aVal
  })

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
          Portfolio
        </p>

        <h1 className="text-4xl font-bold text-white">
          {t('projectsPage.title')}
        </h1>

        <p className="mt-4 text-slate-300">
          {t('projectsPage.description')}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}