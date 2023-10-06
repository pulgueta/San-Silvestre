import { NextPage } from 'next'
import { redirect } from 'next/navigation'

import { getServerSession } from 'next-auth'

import LoginCard from '@/components/auth/login-card'
import { authOptions } from '@/lib/next-auth'

const LoginPage: NextPage = async () => {
    const session = await getServerSession(authOptions)

    if (session?.user) {
        redirect('/profile')
    }

    return (
        <main className='h-[calc(100vh-80px)] flex items-center justify-center'>
            <LoginCard />
        </main>
    )
}
export default LoginPage