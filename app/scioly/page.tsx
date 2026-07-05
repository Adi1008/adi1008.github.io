import type { Metadata } from 'next'
import Link from 'next/link'
import { Stagger, Item } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Science Olympiad',
  description:
    'National Event Supervisor for the middle school space science events in Science Olympiad.',
}

const linkClass =
  'underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:decoration-zinc-600 dark:hover:decoration-zinc-400'

export default function Scioly() {
  return (
    <main>
      <Stagger>
        <Item>
          <h1 className="mb-5 text-lg font-medium">Science Olympiad</h1>
        </Item>
        <Item>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              <a className={linkClass} href="https://www.soinc.org/">
                Science Olympiad
              </a>{' '}
              is the nation&apos;s largest team-based science competition.
              Teams of students compete in events ranging from anatomy and
              astronomy to engineering challenges. I competed in Science
              Olympiad for six years at{' '}
              <a
                className={linkClass}
                href="https://scioly.org/wiki/index.php/Beckendorff_Junior_High_School"
              >
                Beckendorff Junior High
              </a>{' '}
              and{' '}
              <a
                className={linkClass}
                href="https://scioly.org/wiki/index.php/Seven_Lakes_High_School"
              >
                Seven Lakes High School
              </a>{' '}
              and it absolutely changed my life for the better.
            </p>
            <p>
              Just days after graduating from high school, I joined the
              &ldquo;A-Team&rdquo;, a group of Science Olympiad alumni led by{' '}
              <a
                className={linkClass}
                href="https://www.linkedin.com/in/donna-lee-young-35b3ba78/"
              >
                Donna Young
              </a>{' '}
              and{' '}
              <a
                className={linkClass}
                href="https://www.physics.ox.ac.uk/our-people/komacek"
              >
                Tad Komacek
              </a>{' '}
              that runs the astronomy-related events in Science Olympiad. In
              the past, we have been generously supported by{' '}
              <a
                className={linkClass}
                href="https://www.universe-of-learning.org/"
              >
                NASA&apos;s Universe of Learning
              </a>{' '}
              STEM outreach program.
            </p>
            <p>
              Along with{' '}
              <a
                className={linkClass}
                href="https://www.linkedin.com/in/connor-todd-548467171/"
              >
                Connor Todd
              </a>
              , I serve as the National Event Supervisor for Solar System and
              Reach for the Stars, which rotate every two years. We make the
              rules, create educational resources, and run these events at the
              National Tournament every May. For the 2025-2026 competition
              season, the event is{' '}
              <strong className="font-medium">Solar System</strong>.
            </p>
            <p>
              We are always looking for new members. If you are interested in
              joining the A-Team, feel free to reach out to{' '}
              <a className={linkClass} href="mailto:adityashah108@gmail.com">
                me
              </a>
              ,{' '}
              <a className={linkClass} href="mailto:cwtodd@umich.edu">
                Connor
              </a>
              ,{' '}
              <a className={linkClass} href="mailto:dlyoung.nso@gmail.com">
                Donna
              </a>
              ,{' '}
              <a className={linkClass} href="mailto:tkomacek@umd.edu">
                Tad
              </a>
              , or any other member of the A-Team you may know. We&apos;d love
              to have you!
            </p>
          </div>
        </Item>
        <Item>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: 'Past Exams',
                href: '/scioly/past-exams',
                image: '/images/mitastro2019.jpg',
                alt: 'Past Exams',
              },
              {
                title: 'Solar System Resources',
                href: '/scioly/solar-system',
                image: '/images/enceladus.jpg',
                alt: 'Solar System Resources',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group overflow-hidden rounded-2xl bg-zinc-50/40 ring-1 ring-zinc-200/50 ring-inset transition-shadow duration-300 hover:shadow-lg hover:shadow-zinc-200/50 dark:bg-zinc-950/40 dark:ring-zinc-800/50 dark:hover:shadow-zinc-900/50"
              >
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="p-3.5 font-medium text-zinc-900 dark:text-zinc-100">
                  {card.title}{' '}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </Item>
      </Stagger>
    </main>
  )
}
