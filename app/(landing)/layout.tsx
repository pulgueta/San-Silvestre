import { FC } from 'react'

import LandingNavbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import { InterceptLayout } from '@/interfaces'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/next-auth'
import UserNavbar from '@/components/navbar/user-navbar'

const LandingLayout: FC<InterceptLayout> = async ({ children, modal }) => {
    const user = await getServerSession(authOptions)

    return (
        <>
            {user ? <UserNavbar /> : <LandingNavbar />}
            {children}
            {modal}
            {!user && <Footer />}
        </>
    )
}

export default LandingLayout