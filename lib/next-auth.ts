import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { db } from "@/database/db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const user = await db.user.findFirst({
                    where: { email: credentials?.email }
                })

                if (!user || !user.password) {
                    throw new Error('No user was found')
                }

                const passwordMatch = await compare(credentials?.password as string, user.password)

                if (!passwordMatch) {
                    throw new Error('Invalid credentials')
                }

                return user as any
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, session }) {
            if (user) {
                return {
                    ...token,
                }
            }
            return token
        },
        async session({ session, user, token }) {
            console.log('sessionCallback', { token, user, session })
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