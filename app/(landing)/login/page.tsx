import { NextPage } from "next"

import LoginCard from "@/components/auth/login-card"

const LoginPage: NextPage = () => {

    return (
        <main className="h-[calc(100vh-80px)] flex items-center justify-center">
            <LoginCard />
        </main>
    )
}
export default LoginPage