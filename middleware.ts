import { middleware as Middleware } from "@/middlewares"
import { clerk } from "@/middlewares/clerk"

export default Middleware([clerk])

export const config = {
    matcher: [
        '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'
    ],
}