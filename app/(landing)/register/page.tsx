import { NextPage } from "next"

import RegisterCard from "@/components/auth/register-card"

const LoginPage: NextPage = () => {

    return (
        <main className="h-[calc(100vh-80px)] flex items-center justify-center">
            <RegisterCard />
        </main>
    )
}
export default LoginPage