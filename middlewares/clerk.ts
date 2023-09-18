import { authMiddleware } from '@clerk/nextjs'

export const clerk = () => authMiddleware({
    publicRoutes: ['/', '/pricing', '/stores', '/contact', '/about'],
    debug: process.env.NODE_ENV === 'development',
})