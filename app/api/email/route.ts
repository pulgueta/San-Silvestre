import { type NextRequest, NextResponse } from "next/server"

import { Resend } from 'resend'

import { EmailTemplate } from "@/components/email/email-template"

const resend = new Resend(process.env.RESEND_API_KEY as string)

export const POST = async (req: NextRequest) => {
    const { name, message } = await req.json()

    if (req.method !== 'POST') return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })

    if (!name) return NextResponse.json({ error: 'Name is missing' }, { status: 400 })
    if (!message) return NextResponse.json({ error: 'Message is missing' }, { status: 400 })

    if (!name && !message) return NextResponse.json({ error: 'Name and message are required' }, { status: 500 })

    try {
        const data = await resend.emails.send({
            from: 'San Silvestre <onboarding@resend.dev>',
            to: process.env.EMAIL as string,
            subject: 'San Silvestre contact inquiry',
            react: EmailTemplate({ name, message }),
            text: ''
        })

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: error as string }, { status: 500 })
    }
}