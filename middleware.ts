import { middleware as Middleware } from "@/middlewares"

export default Middleware([])

export const config = {
    matcher: [
        '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'
    ],
}