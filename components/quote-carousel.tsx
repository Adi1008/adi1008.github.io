'use client'
import { useEffect, useRef, useState } from 'react'
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

export function QuoteCarousel({ quotes }: { quotes: Quote[] }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused || quotes.length < 2) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length)
    }, INTERVAL_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, quotes.length, index])

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
            onClick={() =>
              setIndex((i) => (i - 1 + quotes.length) % quotes.length)
            }
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
            onClick={() => setIndex((i) => (i + 1) % quotes.length)}
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-zinc-600 italic dark:text-zinc-400"
          >
            &ldquo;{quotes[index].quote}&rdquo;
          </motion.blockquote>
        </AnimatePresence>
        <p className="mt-4 text-right text-xs text-zinc-400 dark:text-zinc-500">
          {index + 1} / {quotes.length}
        </p>
      </div>
    </div>
  )
}
