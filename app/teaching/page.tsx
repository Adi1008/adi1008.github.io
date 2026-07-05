import type { Metadata } from 'next'
import { Stagger, Item } from '@/components/motion'
import { QuoteCarousel } from '@/components/quote-carousel'
import quotes from '@/public/files/quotes.json'

export const metadata: Metadata = {
  title: 'Teaching',
  description:
    'Teaching experience: TA for undergraduate thermodynamics and graduate statistical mechanics at Stanford.',
}

const linkClass =
  'underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:decoration-zinc-600 dark:hover:decoration-zinc-400'

export default function Teaching() {
  return (
    <main>
      <Stagger>
        <Item>
          <h1 className="mb-5 text-lg font-medium">Teaching</h1>
        </Item>
        <Item>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              I really enjoy teaching. It helps me understand the material
              better, and it forces me to be intentional about explaining
              concepts clearly and concisely. And above all, working with
              students and helping them grow feels meaningful and fulfilling
              in a way that few other jobs do.
            </p>
            <p>
              During my time at Stanford, I have been a TA for{' '}
              <a
                className={linkClass}
                href="https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&academicYear=&q=CHEMENG+110B&collapse="
              >
                CHEMENG 110B
              </a>{' '}
              (undergraduate thermodynamics) and{' '}
              <a
                className={linkClass}
                href="https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog=&academicYear=&q=CHEMENG+340&collapse="
              >
                CHEMENG 340
              </a>{' '}
              (graduate statistical mechanics). These were immensely fun
              experiences, and I&apos;m grateful to have been awarded the
              Chemical Engineering department&apos;s Outstanding TA Award and
              the university-wide{' '}
              <a
                className={linkClass}
                href="https://ctl.stanford.edu/centennial-teaching-assistant-awards"
              >
                Centennial TA Award
              </a>{' '}
              for my efforts.
            </p>
            <p>
              If you&apos;re curious, you can read students&apos; complete,
              unfiltered evaluations of my teaching for both{' '}
              <a
                className={linkClass}
                href="/files/course-evals/chemeng110b.pdf"
              >
                CHEMENG 110B
              </a>{' '}
              and{' '}
              <a
                className={linkClass}
                href="/files/course-evals/chemeng340.pdf"
              >
                CHEMENG 340
              </a>
              .
            </p>
          </div>
        </Item>
        <Item>
          <div className="mt-8">
            <QuoteCarousel quotes={quotes} />
          </div>
        </Item>
      </Stagger>
    </main>
  )
}
