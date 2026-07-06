'use client'
import { motion } from 'motion/react'

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
      className="prose prose-gray prose-h1:text-lg prose-h1:font-medium prose-h2:mt-10 prose-h2:scroll-m-20 prose-h2:text-base prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-strong:font-medium dark:prose-invert"
    >
      {children}
    </motion.main>
  )
}
