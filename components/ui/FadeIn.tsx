'use client'

import { motion, useInView, UseInViewOptions } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface FadeInProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: 'up' | 'down' | 'left' | 'right'
    fullWidth?: boolean
    viewport?: UseInViewOptions
}

export default function FadeIn({
    children,
    className,
    delay = 0,
    direction = 'up',
    fullWidth = false,
    viewport = { once: true, margin: "-100px" }
}: FadeInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, viewport)

    const directionOffset = {
        up: 100,
        down: -100,
        left: 100,
        right: -100,
    }

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' || direction === 'down' ? directionOffset[direction] : 0,
            x: direction === 'left' || direction === 'right' ? directionOffset[direction] : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1] as any,
                delay: delay,
            }
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn(fullWidth ? "w-full" : "", className)}
        >
            {children}
        </motion.div>
    )
}
