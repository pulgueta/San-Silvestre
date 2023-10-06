'use client'

import { FC } from 'react'

import { SessionProvider } from 'next-auth/react'

import { Layout } from '@/types'

export const AuthProvider: FC<Layout> = ({ children }) => <SessionProvider>{children}</SessionProvider>