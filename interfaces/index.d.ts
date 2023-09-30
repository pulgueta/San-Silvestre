import { Customer } from "@prisma/client";
import { NextMiddleware, NextResponse } from "next/server";

export interface Layout {
    children?: React.ReactNode,
}

export interface InterceptLayout {
    children: React.ReactNode,
    modal: React.ReactNode
}

export interface Credentials {
    id: string | number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    age: number,
    address: string,
    state: string,
    city: string,
    zip: string,
    phoneNumber: string,
    orders: Orders,
    createdAt: string,
    updatedAt: string,
}

export interface Order {
    id: string,
    customer: Customer,
    createdAt: string,
    updatedAt: string,
}

export type MiddlewareFactory = (middleware: NextMiddleware | NextResponse<unknown>) => NextMiddleware;