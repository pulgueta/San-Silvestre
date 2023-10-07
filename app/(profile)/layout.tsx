import { FC } from 'react'

import { getServerSession } from 'next-auth'

import UserNavbar from '@/components/navbar/user-navbar'
import { Layout } from '@/types'
import { authOptions } from '@/lib/next-auth'
import { redirect } from 'next/navigation'

const LoggedUserLayout: FC<Layout> = async ({ children }) => {
    const user = await getServerSession(authOptions)

    if (!user) return redirect('/login')

    return (
        <>
            <UserNavbar />
            {children}
        </>
    )
}

export default LoggedUserLayout