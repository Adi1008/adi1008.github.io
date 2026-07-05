'use client'
import { motion } from 'motion/react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_ITEM = {
  duration: 0.3,
}

/** Staggers the entrance of its <Item> children, nim-style. */
export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  )
}

export function Item({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS_ITEM}
      transition={TRANSITION_ITEM}
    >
      {children}
    </motion.div>
  )
}
