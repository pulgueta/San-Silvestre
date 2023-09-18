import { FC } from 'react'

import type { Metadata } from 'next'

import { Layout } from '@/interfaces'

export const metadata: Metadata = {
    title: 'Authentication',
    description: 'Login or Register to your account.',
}

const AuthLayout: FC<Layout> = ({ children }) => children

export default AuthLayout