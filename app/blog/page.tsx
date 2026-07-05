import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '../data'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Posts on statistical mechanics, astronomy, and more.',
}

export default function Blog() {
  return (
    <main>
      <h1 className="mb-6 text-lg font-medium">Blog</h1>
      <div className="flex flex-col space-y-6">
        {BLOG_POSTS.map((post) => (
          <Link key={post.uid} href={post.link} className="group block">
            <h2 className="font-normal text-zinc-900 group-hover:underline group-hover:decoration-zinc-300 group-hover:underline-offset-4 dark:text-zinc-100 dark:group-hover:decoration-zinc-600">
              {post.title}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              {post.description}
            </p>
            <p className="mt-0.5 text-xs text-zinc-400 dark:text-zinc-500">
              {post.date}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
