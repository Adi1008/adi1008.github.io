'use client'
import { TextEffect } from '@/components/ui/text-effect'
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
    <header className="mb-8">
      <div className="flex items-center justify-between">
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
      </div>
      <nav className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        {NAV_LINKS.map((link) => {
          const isActive =
            link.href === '/'
              ? pathname === '/'
              : pathname?.startsWith(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? 'text-zinc-950 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-50 dark:decoration-zinc-600'
                  : 'text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
              }
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
