import type { Metadata } from 'next'
import { RESEARCH_TOPICS } from '../data'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Simulation and theory of battery electrolytes: ion transport, ion aggregation, and charge transfer.',
}

export default function Research() {
  return (
    <main>
      <h1 className="mb-6 text-lg font-medium">Research</h1>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          Batteries have profoundly reshaped society, from enabling
          rechargeable portable electronic devices to accelerating
          decarbonization efforts. Working with experimental collaborators in
          the{' '}
          <a
            className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:decoration-zinc-600"
            href="https://baogroup.stanford.edu/"
          >
            Bao
          </a>{' '}
          and{' '}
          <a
            className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:decoration-zinc-600"
            href="https://web.stanford.edu/group/cui_group/"
          >
            Cui
          </a>{' '}
          groups at Stanford, I use simulation and theory to study the
          molecular-level phenomena governing battery electrolytes, both in the
          bulk and near the electrodes.
        </p>
      </div>
      <div className="mt-10 flex flex-col space-y-4">
        {RESEARCH_TOPICS.map((topic) => (
          <div
            key={topic.id}
            className="rounded-2xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
          >
            <h2 className="font-normal text-zinc-900 dark:text-zinc-100">
              {topic.title}
            </h2>
          </div>
        ))}
      </div>
    </main>
  )
}
