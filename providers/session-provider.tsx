'use client'

import { FC } from 'react'

import { SessionProvider } from 'next-auth/react'

import { Layout } from '@/interfaces'

export const AuthProvider: FC<Layout> = ({ children }) => <SessionProvider>{children}</SessionProvider>