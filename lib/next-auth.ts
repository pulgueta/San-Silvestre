import type { ISODateString, NextAuthOptions, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { compare } from 'bcrypt'

import { db } from '@/database/db'

export type CustomSession = {
    user?: CustomUser
    expires: ISODateString
}

export type CustomUser = {
    id?: number
    firstName?: string
    lastName?: string
    email?: string
    password?: string
    imageUrl?: string | null
    role?: string
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const user = await db.user.findUnique({
                    where: { email: credentials?.email },
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        password: true,
                        email: true,
                        role: true,
                    }
                })

                if (!user || !user.password) {
                    throw new Error('No user was found')
                }

                const passwordMatch = await compare(credentials?.password as string, user.password)

                if (!passwordMatch) {
                    throw new Error('Invalid credentials')
                }

                return {
                    ...user,
                    id: user.id.toString()
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user
            }

            return token
        },
        async session({ session, token }: { session: any, token: JWT, user: User }) {
            session.user = token.user as CustomUser

            return session
        },
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    pages: {
        signIn: '/login',
        signOut: '/logout',
        newUser: '/register'
    },
} satisfies NextAuthOptions