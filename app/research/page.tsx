import type { Metadata } from 'next'
import { Stagger, Item } from '@/components/motion'
import { RESEARCH_TOPICS } from '../data'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Simulation and theory of battery electrolytes: ion transport, ion aggregation, and charge transfer.',
}

const linkClass =
  'underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:decoration-zinc-600 dark:hover:decoration-zinc-400'

export default function Research() {
  return (
    <main>
      <Stagger>
        <Item>
          <h1 className="mb-5 text-lg font-medium">Research</h1>
        </Item>
        <Item>
          <p className="text-zinc-600 dark:text-zinc-400">
            Batteries have profoundly reshaped society, from enabling
            rechargeable portable electronic devices to accelerating
            decarbonization efforts. Working with experimental collaborators
            in the{' '}
            <a className={linkClass} href="https://baogroup.stanford.edu/">
              Bao
            </a>{' '}
            and{' '}
            <a
              className={linkClass}
              href="https://web.stanford.edu/group/cui_group/"
            >
              Cui
            </a>{' '}
            groups at Stanford, I use simulation and theory to study the
            molecular-level phenomena governing battery electrolytes, both in
            the bulk and near the electrodes.
          </p>
        </Item>
        <Item>
          <div className="mt-8 divide-y divide-zinc-100 rounded-2xl bg-zinc-50/40 ring-1 ring-zinc-200/50 ring-inset dark:divide-zinc-800/60 dark:bg-zinc-950/40 dark:ring-zinc-800/50">
            {RESEARCH_TOPICS.map((topic) => (
              <div key={topic.id} className="px-4 py-3">
                <h2 className="font-normal text-zinc-900 dark:text-zinc-100">
                  {topic.title}
                </h2>
              </div>
            ))}
          </div>
        </Item>
      </Stagger>
    </main>
  )
}
