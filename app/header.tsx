'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedBackground } from '@/components/ui/animated-background'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Science Olympiad', href: '/scioly' },
  { label: 'Blog', href: '/blog' },
]

export function Header() {
  const pathname = usePathname()

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
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname?.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                data-id={link.label}
                className={`rounded-lg px-2.5 py-1 text-sm transition-colors duration-200 ${
                  isActive
                    ? 'font-medium text-zinc-950 dark:text-zinc-50'
                    : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
                }`}
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
