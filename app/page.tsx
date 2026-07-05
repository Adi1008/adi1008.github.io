import Link from 'next/link'
import { Stagger, Item } from '@/components/motion'

const linkClass =
  'underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:decoration-zinc-600 dark:hover:decoration-zinc-400'

export default function Home() {
  return (
    <main>
      <Stagger className="space-y-4">
        <Item>
          <h3 className="mb-1 text-lg font-medium">About me</h3>
        </Item>
        <Item>
          <p className="text-zinc-600 dark:text-zinc-400">
            I&apos;m a fourth-year Ph.D. candidate advised by{' '}
            <a className={linkClass} href="https://web.stanford.edu/~jianq/">
              Prof. Jian Qin
            </a>{' '}
            in the Chemical Engineering department at{' '}
            <span
              className="font-medium text-[#8C1515] dark:text-[#f38b93]"
              title="Go Card!"
            >
              Stanford University
            </span>
            . I completed my undergraduate education at{' '}
            <span
              className="font-medium text-[#bf5700] dark:text-[#ff8200]"
              title="Hook 'Em!"
            >
              UT Austin
            </span>
            , where I earned a B.S. in Chemical Engineering and completed the
            Elements of Computing Certificate. For more information, please
            see my{' '}
            <a className={linkClass} href="/files/AdityaShah_CV.pdf">
              CV
            </a>
            .
          </p>
        </Item>
        <Item>
          <p className="text-zinc-600 dark:text-zinc-400">
            My{' '}
            <Link className={linkClass} href="/research">
              research
            </Link>{' '}
            uses simulation and theory to explore ion transport, ion
            aggregation, and charge transfer alongside wonderful collaborators
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
            groups at Stanford. I am grateful to be generously supported by
            the{' '}
            <a className={linkClass} href="https://nsfgrfp.org/">
              NSF GRFP
            </a>
            ,{' '}
            <a
              className={linkClass}
              href="https://vpge.stanford.edu/fellowships-funding/sgf"
            >
              Stanford Graduate Fellowship
            </a>
            , and{' '}
            <a
              className={linkClass}
              href="https://solo.stanford.edu/opportunities/chevron-fellowship-energy-2025"
            >
              Chevron Fellowship in Energy
            </a>
            .
          </p>
        </Item>
        <Item>
          <p className="text-zinc-600 dark:text-zinc-400">
            I also serve as a National Event Supervisor for the middle school
            space science events in{' '}
            <Link className={linkClass} href="/scioly">
              Science Olympiad
            </Link>
            , where I help develop rules,{' '}
            <Link className={linkClass} href="/scioly/solar-system">
              pedagogical resources
            </Link>
            , and{' '}
            <Link className={linkClass} href="/scioly/past-exams">
              exams
            </Link>
            .
          </p>
        </Item>
      </Stagger>
    </main>
  )
}
