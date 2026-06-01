const metrics = [
  { label: 'Instant scoring', value: 'Live' },
  { label: 'Mistake records', value: 'Auto-captured' },
  { label: 'Revision modes', value: 'By topic, subject, exam' },
  { label: 'AI learning loop', value: 'RAG-backed' },
];

const weakAreas = [
  'Organic Chemistry: SN1 vs SN2',
  'Physics: electric field direction',
  'Math: conditional probability',
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8 text-slate-50 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-orange-300/80">ExamNexx</p>
            <h1 className="text-xl font-semibold">Learning from mistakes</h1>
          </div>
          <div className="rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm text-orange-200">
            Next.js + FastAPI + PostgreSQL
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[var(--panel)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <p className="mb-4 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-sm text-orange-200">
              Personalized revision intelligence
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Turn every incorrect answer into a permanent learning asset.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              ExamNexx captures mistakes automatically, organizes them by topic and subject,
              and feeds them into a revision knowledge base and AI tutor that understands each
              student&apos;s weak areas.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{metric.value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-orange-400/20 bg-gradient-to-b from-orange-400/15 to-white/5 p-6 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-200">Weak areas</p>
            <div className="mt-4 space-y-3">
              {weakAreas.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-slate-300">
              Mistakes are stored with exam, question, answer, topic, difficulty, and timestamp so
              students can retry only what they missed and mark concepts as revised.
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {[
            ['Revision Knowledge Base', 'Filter by exam, topic, subject, difficulty, or date.'],
            ['Mistake Tracking', 'Persist incorrect answers and analyze recurring patterns.'],
            ['AI Revision Assistant', 'RAG retrieval uses personal history, not generic explanations.'],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
