'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  MoleculeSketch,
  BatterySketch,
  LithiumIonSketch,
  SaturnSketch,
  OrbitSketch,
  FlaskSketch,
} from '@/components/sketches'
import {
  PUBLICATIONS,
  RESEARCH_TOPICS,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  SCHOLAR_URL,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const SKETCH_CLASS =
  'pointer-events-none absolute hidden text-zinc-300 xl:block dark:text-zinc-700'

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
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

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        className="relative"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <MoleculeSketch
          className={`${SKETCH_CLASS} -left-56 top-2 w-40 -rotate-6`}
        />
        <div className="flex flex-col-reverse items-start gap-6 sm:flex-row">
          <div className="flex-1 space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a fourth-year Ph.D. candidate advised by{' '}
              <a
                className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:decoration-zinc-600"
                href="https://web.stanford.edu/~jianq/"
              >
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
              <a
                className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:decoration-zinc-600"
                href="/files/AdityaShah_CV.pdf"
              >
                CV
              </a>
              .
            </p>
            <p>
              I am grateful to be generously supported by the{' '}
              <a
                className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:decoration-zinc-600"
                href="https://nsfgrfp.org/"
              >
                NSF GRFP
              </a>
              ,{' '}
              <a
                className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:decoration-zinc-600"
                href="https://vpge.stanford.edu/fellowships-funding/sgf"
              >
                Stanford Graduate Fellowship
              </a>
              , and{' '}
              <a
                className="underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:decoration-zinc-600"
                href="https://solo.stanford.edu/opportunities/chevron-fellowship-energy-2025"
              >
                Chevron Fellowship in Energy
              </a>
              .
            </p>
          </div>
          <img
            src="/images/aditya_profile.jpeg"
            alt="Aditya Shah"
            className="h-28 w-28 rounded-2xl object-cover ring-1 ring-zinc-200/50 sm:h-32 sm:w-32 dark:ring-zinc-800/50"
          />
        </div>
      </motion.section>

      <motion.section
        className="relative"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <BatterySketch
          className={`${SKETCH_CLASS} -right-48 -top-4 w-24 rotate-6`}
        />
        <h3 className="mb-5 text-lg font-medium">Research</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          I use simulation and theory to study the molecular-level phenomena
          governing battery electrolytes, working alongside wonderful
          collaborators in the{' '}
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
          groups at Stanford.
        </p>
        <ul className="space-y-2">
          {RESEARCH_TOPICS.map((topic) => (
            <li
              key={topic.id}
              className="flex items-baseline gap-3 text-zinc-700 dark:text-zinc-300"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-zinc-300 dark:bg-zinc-600"
                aria-hidden="true"
              />
              {topic.title}
            </li>
          ))}
        </ul>
        <Link
          href="/research"
          className="mt-5 inline-block text-sm text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-50"
        >
          More about my research →
        </Link>
      </motion.section>

      <motion.section
        className="relative"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <LithiumIonSketch
          className={`${SKETCH_CLASS} -left-52 top-8 w-32 rotate-3`}
        />
        <h3 className="mb-5 text-lg font-medium">Publications</h3>
        <div className="flex flex-col space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="space-y-1">
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
                <em>{pub.venue}</em> ({pub.year})
              </p>
            </div>
          ))}
        </div>
        <a
          href={SCHOLAR_URL}
          className="mt-5 inline-block text-sm text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-50"
        >
          A complete, up-to-date list is on my Google Scholar profile →
        </a>
      </motion.section>

      <motion.section
        className="relative"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <SaturnSketch
          className={`${SKETCH_CLASS} -right-52 top-6 w-32 -rotate-3`}
        />
        <h3 className="mb-5 text-lg font-medium">Teaching &amp; Outreach</h3>
        <div className="flex flex-col space-y-2">
          {[
            {
              title: 'Teaching',
              description:
                'TA for undergraduate thermodynamics and graduate statistical mechanics · Centennial TA Award',
              link: '/teaching',
              id: 'teach',
            },
            {
              title: 'Science Olympiad',
              description:
                'National Event Supervisor for the middle school space science events',
              link: '/scioly',
              id: 'scioly',
            },
          ].map((item) => (
            <Link
              key={item.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              href={item.link}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <h4 className="font-normal dark:text-zinc-100">{item.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="relative"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <OrbitSketch
          className={`${SKETCH_CLASS} -left-56 top-10 w-40 rotate-2`}
        />
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        className="relative"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <FlaskSketch
          className={`${SKETCH_CLASS} -right-44 -top-2 w-20 rotate-6`}
        />
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
