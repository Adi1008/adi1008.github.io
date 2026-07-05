import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from './data'

export const dynamic = 'force-static'

const BASE_URL = 'https://adi1008.github.io'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/research',
    '/publications',
    '/teaching',
    '/scioly',
    '/scioly/past-exams',
    '/scioly/solar-system',
    '/blog',
    ...BLOG_POSTS.map((post) => post.link),
  ]
  return pages.map((page) => ({
    url: `${BASE_URL}${page}`,
  }))
}
