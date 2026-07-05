import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Posts on statistical mechanics, astronomy, and more.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
