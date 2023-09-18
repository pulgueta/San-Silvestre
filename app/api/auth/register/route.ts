import { NextResponse, type NextRequest } from "next/server"

import { hash } from 'bcrypt'

import { db } from "@/database/db"

export const POST = async (req: NextRequest) => {
    const {email, password, confirmPassword} = await req.json()

    if (req.method !== 'POST') return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })

    if (!email) return NextResponse.json({ error: 'Email is missing' }, { status: 400 })
    if (!password) return NextResponse.json({ error: 'Password is missing' }, { status: 400 })
    if (!confirmPassword) return NextResponse.json({ error: 'Password confirmation is missing' }, { status: 400 })

    try {
        const userExists = await db.customer.findUnique({
            where: {
                email: email,
                id: 1,
            }
        })

        return userExists && NextResponse.json({ error: 'Email is taken already' }, { status: 400 })


    
    } catch (error) {
        return error instanceof Error && NextResponse.json({ error: error.message }, { status: 500 })
    }
}