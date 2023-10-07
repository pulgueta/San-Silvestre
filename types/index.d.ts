import { NextMiddleware, NextResponse } from 'next/server'

export type Layout = {
    children?: React.ReactNode,
}

export type InterceptLayout = {
    children: React.ReactNode,
    modal: React.ReactNode
}

export type MiddlewareFactory = (middleware: NextMiddleware | NextResponse<unknown>) => NextMiddleware;

export type ModalType = {
    type: 'createStore'
}