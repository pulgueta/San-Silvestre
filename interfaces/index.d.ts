import { NextMiddleware, NextResponse } from "next/server";

export interface Layout {
    children?: React.ReactNode,
}

export type MiddlewareFactory = (middleware: NextMiddleware | NextResponse<unknown>) => NextMiddleware;