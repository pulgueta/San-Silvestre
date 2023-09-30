import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { db } from '@/database/db';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials: any) {
                const { firstName, lastName, email, password } = credentials;

                const user = await db.customer.findUnique(email)

                try {
                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
        signOut: '/logout',
        newUser: '/register'
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };