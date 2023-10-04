import { NextRequest, NextResponse } from "next/server"

import { compare } from "bcrypt"

import { db } from "@/database/db"

export const POST = async (req: NextRequest) => {
    if (req.method !== 'POST') return NextResponse.json('Method not allowed', { status: 405 })

    const body = await req.json()
    const { email, password } = body

    if (!email) return new NextResponse('Email is missing', { status: 400 })
    if (!password) return new NextResponse('Password is missing', { status: 400 })

    const user = await db.customer.findFirst({
        where: {
            email
        }
    })

    if (user && (await compare(password, user.password))) {
        return NextResponse.json(user, { status: 200 })
    } else {
        return NextResponse.json('Invalid credentials', { status: 401 })
    }
}