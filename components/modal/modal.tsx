'use client'

import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'

import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef<HTMLDivElement>(null)
    const wrapper = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const onDismiss = useCallback(() => {
        router.back()
    }, [router])

    const onClick: MouseEventHandler = useCallback((e) => {
        if (e.target === overlay.current || e.target === wrapper.current) {
            if (onDismiss) onDismiss()
        }
    }, [onDismiss, overlay, wrapper])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onDismiss()
    }, [onDismiss])

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)

        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])

    return (
        <div ref={overlay} className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 animate-in fade-in zoom-out" onClick={onClick}>
            <div ref={wrapper} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26rem] lg:w-[30rem] p-6">
                {children}
            </div>
        </div>
    )
}