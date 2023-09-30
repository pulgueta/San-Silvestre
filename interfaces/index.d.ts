import { NextMiddleware, NextResponse } from "next/server";

export interface Layout {
    children?: React.ReactNode,
}

export interface InterceptLayout {
    children: React.ReactNode,
    modal: React.ReactNode
}

export type MiddlewareFactory = (middleware: NextMiddleware | NextResponse<unknown>) => NextMiddleware;