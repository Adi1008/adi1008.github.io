'use client'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Stagger, Item } from '@/components/motion'
import { BLOG_POSTS } from '../data'

export default function Blog() {
  return (
    <main>
      <Stagger>
        <Item>
          <h1 className="mb-4 text-lg font-medium">Blog</h1>
        </Item>
        <Item>
          <div className="flex flex-col space-y-0">
            <AnimatedBackground
              enableHover
              className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.uid}
                  className="-mx-3 rounded-xl px-3 py-3"
                  href={post.link}
                  data-id={post.uid}
                >
                  <div className="flex flex-col space-y-1">
                    <h2 className="font-normal dark:text-zinc-100">
                      {post.title}
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {post.description}
                    </p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500">
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </AnimatedBackground>
          </div>
        </Item>
      </Stagger>
    </main>
  )
}
