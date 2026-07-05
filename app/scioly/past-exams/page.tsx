import type { Metadata } from 'next'
import { ExamBrowser } from '@/components/exam-browser'
import exams from '@/public/files/exams.json'

export const metadata: Metadata = {
  title: 'Past Exams',
  description:
    'Science Olympiad exams written by Aditya Shah, filterable by season, tournament, and event.',
}

export default function PastExams() {
  return (
    <main>
      <h1 className="mb-6 text-lg font-medium">Past Exams</h1>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          This page contains Science Olympiad exams I have written (or helped
          write) in the past. Filter your search by season, tournament, and/or
          event.
        </p>
        <p>
          Events that I am actively writing tests for this season are marked
          with a <span className="text-amber-500">★</span> and are at the top
          of the page. Tests with a <span className="text-rose-500">♥</span>{' '}
          are ones that I think are particularly well-written or have lots of
          sentimental value to me.
        </p>
      </div>
      <div className="mt-8">
        <ExamBrowser exams={exams} />
      </div>
      <p className="mt-10 text-xs text-zinc-400 italic dark:text-zinc-500">
        If you notice any errors or have any questions, please{' '}
        <a className="underline" href="mailto:adityashah108@gmail.com">
          let me know
        </a>
        .
      </p>
    </main>
  )
}
