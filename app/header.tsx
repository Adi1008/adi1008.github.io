'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Research', href: '/research' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Science Olympiad', href: '/scioly' },
  { label: 'Blog', href: '/blog' },
]

const SCIOLY_MENU = [
  { label: 'Overview', href: '/scioly' },
  { label: 'Past Exams', href: '/scioly/past-exams' },
  { label: 'Solar System Resources', href: '/scioly/solar-system' },
]

export function Header() {
  const pathname = usePathname()
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const sciolyOpen = hoveredId === 'Science Olympiad'

  return (
    <header className="mb-10">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Aditya Shah
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Ph.D. Candidate, Chemical Engineering
        </TextEffect>
      </div>
      <nav className="mt-4 -mx-2.5 flex flex-wrap items-center">
        <AnimatedBackground
          enableHover
          className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
          onValueChange={(id) => setHoveredId(id)}
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname?.startsWith(link.href + '/')
            const itemClass = `rounded-lg px-2.5 py-1 text-sm transition-colors duration-200 ${
              isActive
                ? 'font-medium text-zinc-950 dark:text-zinc-50'
                : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
            }`

            if (link.label === 'Science Olympiad') {
              return (
                <div key={link.href} data-id={link.label} className={itemClass}>
                  <Link href={link.href} className="flex items-center gap-1">
                    {link.label}
                    <ChevronDownIcon
                      className={`h-3 w-3 transition-transform duration-200 ${
                        sciolyOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>
                  <AnimatePresence>
                    {sciolyOpen && (
                      <div className="absolute left-0 top-full z-20 pt-1.5">
                        <motion.div
                          initial={{ opacity: 0, y: -4, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -4, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="flex min-w-48 flex-col rounded-xl bg-white p-1 shadow-lg ring-1 ring-zinc-200/70 dark:bg-zinc-900 dark:shadow-zinc-950/50 dark:ring-zinc-800"
                        >
                          {SCIOLY_MENU.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-lg px-2.5 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                data-id={link.label}
                className={itemClass}
              >
                {link.label}
              </Link>
            )
          })}
        </AnimatedBackground>
      </nav>
    </header>
  )
}
