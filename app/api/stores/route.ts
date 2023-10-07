import { db } from "@/database/db"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
    if (req.method !== 'POST') return NextResponse.json('Method not allowed', { status: 405 })

    const body = await req.json()
    const { storeName, storeCategory, storeImageUrl, ownerEmail, ownerId } = body

    if (!storeName) return new NextResponse('Store name is missing', { status: 400 })
    if (!storeCategory) return new NextResponse('Store category is missing', { status: 400 })
    if (!storeImageUrl) return new NextResponse('Store image URL is missing', { status: 400 })
    if (!ownerEmail) return new NextResponse('Store owner email is missing', { status: 400 })

    const owner = await db.owner.findUnique({
        where: {
            id: parseInt(ownerId)
        }
    })

    const store = await db.store.create({
        data: {
            storeName,
            storeCategory,
            storeImageUrl,
            owner: {
                connect: {
                    id: parseInt(ownerId)
                }
            }
        }
    })

    return NextResponse.json({
        store
    }, { status: 201 })
}