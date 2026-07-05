import type { Metadata } from 'next'
import Link from 'next/link'
import { Stagger, Item } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Solar System',
  description:
    'Resources for the Science Olympiad Solar System event: webinars, past exams, websites, and textbooks.',
}

const linkClass =
  'underline decoration-zinc-300 underline-offset-2 transition-colors hover:decoration-zinc-500 dark:decoration-zinc-600 dark:hover:decoration-zinc-400'

export default function SolarSystem() {
  return (
    <main>
      <Stagger className="text-zinc-600 dark:text-zinc-400">
        <Item>
          <h1 className="mb-5 text-lg font-medium text-black dark:text-white">
            Solar System
          </h1>
        </Item>
        <Item>
          <p>
            Solar System is a Division B event focused on habitability within
            and beyond the Solar System. This event is meant to be highly
            interdisciplinary, drawing on concepts from astronomy, planetary
            science, geology, chemistry, and biology, among others.
          </p>
        </Item>
        <Item>
          <h2 className="mt-7 mb-3 font-medium text-zinc-900 dark:text-zinc-100">
            Official Webinar
          </h2>
          <p>
            The A-Team typically produces a webinar to help students get a
            feel for the content and question styles that will be emphasized
            in their events, particularly at the national level. The Solar
            System webinar for the 2022-2023 competition season can be found
            below.
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube-nocookie.com/embed/gfZ46Ae5hkU"
              title="Solar System webinar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm">
            <em>
              Special thanks to Keith Miller and Gordon Squires at{' '}
              <a className={linkClass} href="https://www.ipac.caltech.edu/">
                IPAC
              </a>{' '}
              for their help in producing this video.
            </em>
          </p>
        </Item>
        <Item>
          <h2 className="mt-7 mb-3 font-medium text-zinc-900 dark:text-zinc-100">
            Past exams
          </h2>
          <p>
            In my experience, working through well-written exams is one of the
            most effective ways to practice in Science Olympiad. Exams that I
            have written (or helped write) can be found{' '}
            <Link className={linkClass} href="/scioly/past-exams">
              here
            </Link>
            . Additional exams can be found on the SciOly.org{' '}
            <a
              className={linkClass}
              href="https://scioly.org/wiki/index.php?title=Solar_System"
            >
              Wiki
            </a>{' '}
            and{' '}
            <a
              className={linkClass}
              href="https://scioly.org/wiki/index.php/2023_Test_Exchange"
            >
              Test Exchange
            </a>
            .
          </p>
        </Item>
        <Item>
          <h2 className="mt-7 mb-3 font-medium text-zinc-900 dark:text-zinc-100">
            Websites
          </h2>
          <p>
            Websites serve as a great resource, whether you are a beginner or
            looking to deepen your understanding of a particular topic. The
            following websites are a good place to start.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <a className={linkClass} href="https://www.wikipedia.org/">
                Wikipedia
              </a>
            </li>
            <li>
              <a className={linkClass} href="https://solarsystem.nasa.gov/">
                NASA Solar System Exploration
              </a>
            </li>
            <li>
              <a className={linkClass} href="https://astrobiology.nasa.gov/">
                NASA Astrobiology
              </a>
            </li>
            <li>
              <a
                className={linkClass}
                href="https://photojournal.jpl.nasa.gov/"
              >
                JPL Photojournal
              </a>
            </li>
          </ul>
        </Item>
        <Item>
          <h2 className="mt-7 mb-3 font-medium text-zinc-900 dark:text-zinc-100">
            Textbooks
          </h2>
          <p>
            Once you have a good grasp of the basics, you can start to delve
            into more advanced topics. In particular,{' '}
            <em>A Student&rsquo;s Guide to the Mathematics of Astronomy</em>{' '}
            has some of the best material I have ever seen for solidifying
            your intuition for the underlying math and physics in this event.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <em>Planetary Habitability</em> by Stephen R. Kane (2021)
            </li>
            <li>
              <em>Fundamental Planetary Science</em> by Jack J. Lissauer
              (2019)
            </li>
            <li>
              <em>Astrobiology: An Introduction</em> by Alan Longstaff (2015)
            </li>
            <li>
              <em>A Student&rsquo;s Guide to the Mathematics of Astronomy</em>{' '}
              by Daniel Fleisch and Julia Kregenow (2013)
            </li>
          </ul>
        </Item>
      </Stagger>
    </main>
  )
}
