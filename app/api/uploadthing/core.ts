import { NextResponse } from 'next/server'

import { getServerSession } from 'next-auth'
import { createUploadthing, type FileRouter } from 'uploadthing/next'

import { authOptions } from '@/lib/next-auth'

const f = createUploadthing()

const auth = () => {
    const session = getServerSession(authOptions)

    if (!session) {
        return NextResponse.json('User is unauthorized', { status: 401 })
    }

    return session as any
}

export const fileRouter = {
    serverImage: f({
        image: {
            maxFileCount: 1,
            maxFileSize: '2MB'
        }
    })
        .middleware(() => auth())
        .onUploadComplete(() => { }),
    messageFile: f(['image'])
        .middleware(() => auth())
        .onUploadComplete(() => { })
} satisfies FileRouter

export type SSFileRouter = typeof fileRouter