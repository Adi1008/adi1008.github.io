import type { Metadata } from 'next'
import { Stagger, Item } from '@/components/motion'
import { LINK_CLASS } from '@/lib/utils'
import { PUBLICATIONS, SCHOLAR_URL } from '../data'

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Publications by Aditya Shah.',
}

function BoldedAuthors({ authors }: { authors: string }) {
  const parts = authors.split('Aditya Shah')
  return (
    <p className="text-sm text-zinc-500 dark:text-zinc-400">
      {parts[0]}
      <span className="font-medium text-zinc-800 dark:text-zinc-200">
        Aditya Shah
      </span>
      {parts[1]}
    </p>
  )
}

export default function Publications() {
  return (
    <main>
      <Stagger>
        <Item>
          <h1 className="mb-5 text-lg font-medium">Publications</h1>
        </Item>
        <Item>
          <p className="mb-7 text-zinc-600 dark:text-zinc-400">
            A complete, up-to-date list can also be found on my{' '}
            <a
              className={LINK_CLASS}
              href={SCHOLAR_URL}
            >
              Google Scholar profile
            </a>
            .
          </p>
        </Item>
        <div className="flex flex-col space-y-6">
          {PUBLICATIONS.map((pub) => (
            <Item key={pub.id}>
              <div className="space-y-1">
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.title}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
                <BoldedAuthors authors={pub.authors} />
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <em>{pub.venue}</em> ({pub.year}) ·{' '}
                  <a
                    className={LINK_CLASS}
                    href={pub.doi}
                  >
                    doi
                  </a>
                </p>
              </div>
            </Item>
          ))}
        </div>
      </Stagger>
    </main>
  )
}
