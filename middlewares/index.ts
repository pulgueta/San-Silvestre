import { NextResponse, type NextMiddleware } from "next/server";

import { MiddlewareFactory } from "@/types";

export const middleware = (functions: MiddlewareFactory[], index = 0): NextMiddleware => {
    const current = functions[index];

    if (current) {
        const next = middleware(functions, index + 1);

        return current(next);
    }

    return () => NextResponse.next();
}