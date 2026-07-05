import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Shared style for inline text links. Edit here to restyle links site-wide.
export const LINK_CLASS =
  'font-medium text-zinc-800 underline decoration-zinc-400 underline-offset-2 transition-colors hover:text-zinc-950 hover:decoration-zinc-700 dark:text-zinc-200 dark:decoration-zinc-500 dark:hover:text-zinc-50 dark:hover:decoration-zinc-300'
