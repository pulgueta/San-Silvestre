import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { Customer } from "@prisma/client";

import { db } from "@/database/db";
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials: Customer, _req) {
                const user = await db.customer.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                try {
                    if (!user) {
                        return new NextResponse('User does not exist', { status: 400 })
                    }

                    const passwordsMatch = await compare(credentials.password, user.password);

                    if (!passwordsMatch) {
                        return new NextResponse('Credentials are not valid', { status: 401 });
                    }

                    return user;
                } catch (error) {
                    return new NextResponse('Something went wrong', { status: 500 });
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