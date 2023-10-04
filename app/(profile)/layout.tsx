import { FC } from 'react'

import UserNavbar from '@/components/navbar/user-navbar'
import { Layout } from '@/interfaces'

const LoggedUserLayout: FC<Layout> = ({ children }) => {

    return (
        <>
            <UserNavbar />
            {children}
        </>
    )
}

export default LoggedUserLayout