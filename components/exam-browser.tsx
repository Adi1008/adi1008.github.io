'use client'
import { useMemo, useState } from 'react'

type ExamLink = {
  label: string
  url: string
}

type Exam = {
  tournament: string
  season: string
  event: string
  links: ExamLink[]
  favorite?: boolean
  notes?: string
}

// Event(s) that should appear first (will depend on the year)
const PRIORITY_EVENTS = ['Solar System']

function sortByFrequency(values: string[]): string[] {
  const freq = values.reduce<Record<string, number>>((acc, v) => {
    acc[v] = (acc[v] || 0) + 1
    return acc
  }, {})
  return [...new Set(values)].sort((a, b) => freq[b] - freq[a])
}

function FilterGroup({
  label,
  options,
  selected,
  onToggle,
  onClear,
}: {
  label: string
  options: string[]
  selected: Set<string>
  onToggle: (value: string) => void
  onClear: () => void
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <p className="text-xs tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
          {label}
        </p>
        {selected.size > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-zinc-400 underline underline-offset-2 hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            clear
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => {
          const isActive = selected.has(option)
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              className={
                isActive
                  ? 'rounded-full bg-zinc-900 px-2.5 py-0.5 text-sm text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900'
                  : 'rounded-full bg-zinc-100 px-2.5 py-0.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
              }
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function ExamBrowser({ exams }: { exams: Exam[] }) {
  const [seasons, setSeasons] = useState<Set<string>>(new Set())
  const [tournaments, setTournaments] = useState<Set<string>>(new Set())
  const [events, setEvents] = useState<Set<string>>(new Set())

  const seasonOptions = useMemo(
    () => [...new Set(exams.map((e) => e.season))].sort().reverse(),
    [exams],
  )
  const tournamentOptions = useMemo(
    () => sortByFrequency(exams.map((e) => e.tournament)),
    [exams],
  )
  const eventOptions = useMemo(
    () => sortByFrequency(exams.map((e) => e.event)),
    [exams],
  )

  const toggle =
    (setter: React.Dispatch<React.SetStateAction<Set<string>>>) =>
    (value: string) => {
      setter((prev) => {
        const next = new Set(prev)
        if (next.has(value)) {
          next.delete(value)
        } else {
          next.add(value)
        }
        return next
      })
    }

  const filtered = exams.filter(
    (exam) =>
      (seasons.size === 0 || seasons.has(exam.season)) &&
      (tournaments.size === 0 || tournaments.has(exam.tournament)) &&
      (events.size === 0 || events.has(exam.event)),
  )

  const byEvent = filtered.reduce<Record<string, Exam[]>>((groups, exam) => {
    ;(groups[exam.event] ||= []).push(exam)
    return groups
  }, {})

  const sortedGroups = Object.entries(byEvent).sort(([a], [b]) => {
    const ia = PRIORITY_EVENTS.indexOf(a)
    const ib = PRIORITY_EVENTS.indexOf(b)
    if (ia >= 0 && ib >= 0) return ia - ib
    if (ia >= 0) return -1
    if (ib >= 0) return 1
    return a.localeCompare(b)
  })

  return (
    <div>
      <div className="space-y-4 rounded-2xl bg-zinc-50/40 p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
        <FilterGroup
          label="Season"
          options={seasonOptions}
          selected={seasons}
          onToggle={toggle(setSeasons)}
          onClear={() => setSeasons(new Set())}
        />
        <FilterGroup
          label="Tournament"
          options={tournamentOptions}
          selected={tournaments}
          onToggle={toggle(setTournaments)}
          onClear={() => setTournaments(new Set())}
        />
        <FilterGroup
          label="Event"
          options={eventOptions}
          selected={events}
          onToggle={toggle(setEvents)}
          onClear={() => setEvents(new Set())}
        />
      </div>

      {sortedGroups.length === 0 && (
        <p className="mt-8 text-zinc-500 dark:text-zinc-400">
          No exams match the selected filters.
        </p>
      )}

      {sortedGroups.map(([event, eventExams]) => {
        const sorted = [...eventExams].sort((a, b) => {
          const seasonDiff = b.season.localeCompare(a.season)
          return seasonDiff !== 0
            ? seasonDiff
            : a.tournament.localeCompare(b.tournament)
        })
        return (
          <section key={event} className="mt-10">
            <h2 className="mb-4 font-medium text-zinc-900 dark:text-zinc-100">
              {event}
              {PRIORITY_EVENTS.includes(event) && (
                <span
                  className="ml-1 text-amber-500"
                  title="Actively writing tests for this event this season"
                >
                  ★
                </span>
              )}
            </h2>
            <div className="flex flex-col space-y-4">
              {sorted.map((exam) => (
                <div key={`${exam.tournament}-${exam.season}-${exam.event}`}>
                  <h3 className="text-sm font-normal text-zinc-800 dark:text-zinc-200">
                    {exam.tournament} {exam.season}
                    {exam.favorite && (
                      <span
                        className="ml-1 text-rose-500"
                        title="A favorite of mine"
                      >
                        ♥
                      </span>
                    )}
                  </h3>
                  {exam.notes && (
                    <p className="mt-0.5 text-xs text-zinc-400 italic dark:text-zinc-500">
                      {exam.notes}
                    </p>
                  )}
                  <div className="mt-1 flex flex-wrap gap-x-3 text-sm">
                    {exam.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        className="text-zinc-500 underline decoration-zinc-300 underline-offset-2 hover:text-zinc-950 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-zinc-50"
                      >
                        [{link.label}]
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
