export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-6xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-slate-300">{description}</p>
    </div>
  )
}