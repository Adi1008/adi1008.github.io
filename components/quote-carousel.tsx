'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
} from 'lucide-react'

type Quote = {
  quote: string
}

const INTERVAL_MS = 8000

// Slide in from the direction of travel: pressing "next" (dir = 1) brings the
// new quote in from the right; "back" (dir = -1) brings it in from the left.
const VARIANTS = {
  enter: (dir: number) => ({ x: dir * 32, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -32, opacity: 0 }),
}

export function QuoteCarousel({ quotes }: { quotes: Quote[] }) {
  const [current, setCurrent] = useState({ index: 0, dir: 1 })
  const [paused, setPaused] = useState(false)

  const paginate = (dir: 1 | -1) =>
    setCurrent((c) => ({
      index: (c.index + dir + quotes.length) % quotes.length,
      dir,
    }))

  useEffect(() => {
    if (paused || quotes.length < 2) return
    const id = setInterval(() => paginate(1), INTERVAL_MS)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, quotes.length, current.index])

  if (quotes.length === 0) return null

  const buttonClass =
    'inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'

  return (
    <div className="rounded-2xl bg-zinc-50/40 p-5 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
      <div className="flex items-center justify-between">
        <p className="text-xs tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
          What students say
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous quote"
            className={buttonClass}
            onClick={() => paginate(-1)}
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={paused ? 'Resume autoplay' : 'Pause autoplay'}
            className={buttonClass}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? (
              <PlayIcon className="h-4 w-4" />
            ) : (
              <PauseIcon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            aria-label="Next quote"
            className={buttonClass}
            onClick={() => paginate(1)}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-4 overflow-hidden">
        <AnimatePresence mode="wait" custom={current.dir} initial={false}>
          <motion.blockquote
            key={current.index}
            custom={current.dir}
            variants={VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="text-zinc-600 dark:text-zinc-400"
          >
            &ldquo;{quotes[current.index].quote}&rdquo;
          </motion.blockquote>
        </AnimatePresence>
        <p className="mt-4 text-right text-xs text-zinc-400 dark:text-zinc-500">
          {current.index + 1} / {quotes.length}
        </p>
      </div>
    </div>
  )
}
