import Link from 'next/link'
import { Stagger, Item } from '@/components/motion'
import { LINK_CLASS } from '@/lib/utils'

export default function Home() {
  return (
    <main>
      <Stagger>
        <Item>
          <div className="flex flex-col-reverse items-start gap-6 sm:flex-row">
            <div className="flex-1 space-y-4 text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m a fourth-year Ph.D. candidate advised by{' '}
                <a
                  className={LINK_CLASS}
                  href="https://web.stanford.edu/~jianq/"
                >
                  Prof. Jian Qin
                </a>{' '}
                in the Chemical Engineering department at{' '}
                <span
                  className="font-medium text-[#8C1515]"
                  title="Go Card!"
                >
                  Stanford University
                </span>
                . I completed my undergraduate education at{' '}
                <span
                  className="font-medium text-[#bf5700]"
                  title="Hook 'Em!"
                >
                  UT Austin
                </span>
                , where I earned a B.S. in Chemical Engineering and completed
                the Elements of Computing Certificate. For more information,
                please see my{' '}
                <a className={LINK_CLASS} href="/files/AdityaShah_CV.pdf">
                  CV
                </a>
                .
              </p>
              <p>
                My{' '}
                <Link className={LINK_CLASS} href="/research">
                  research
                </Link>{' '}
                uses simulation and theory to explore ion transport, ion
                aggregation, and charge transfer alongside wonderful
                collaborators in the{' '}
                <a className={LINK_CLASS} href="https://baogroup.stanford.edu/">
                  Bao
                </a>{' '}
                and{' '}
                <a
                  className={LINK_CLASS}
                  href="https://web.stanford.edu/group/cui_group/"
                >
                  Cui
                </a>{' '}
                groups at Stanford. I am grateful to be generously supported
                by the{' '}
                <a className={LINK_CLASS} href="https://nsfgrfp.org/">
                  NSF GRFP
                </a>
                ,{' '}
                <a
                  className={LINK_CLASS}
                  href="https://vpge.stanford.edu/fellowships-funding/sgf"
                >
                  Stanford Graduate Fellowship
                </a>
                , and{' '}
                <a
                  className={LINK_CLASS}
                  href="https://solo.stanford.edu/opportunities/chevron-fellowship-energy-2025"
                >
                  Chevron Fellowship in Energy
                </a>
                .
              </p>
              <p>
                I also serve as a National Event Supervisor for the middle
                school space science events in{' '}
                <Link className={LINK_CLASS} href="/scioly">
                  Science Olympiad
                </Link>
                , where I help develop rules,{' '}
                <Link className={LINK_CLASS} href="/scioly/solar-system">
                  pedagogical resources
                </Link>
                , and{' '}
                <Link className={LINK_CLASS} href="/scioly/past-exams">
                  exams
                </Link>
                .
              </p>
            </div>
            <img
              src="/images/aditya_profile.jpeg"
              alt="Aditya Shah"
              className="h-28 w-28 rounded-2xl object-cover ring-1 ring-zinc-200/60 sm:h-32 sm:w-32 dark:ring-zinc-800/60"
            />
          </div>
        </Item>
      </Stagger>
    </main>
  )
}
