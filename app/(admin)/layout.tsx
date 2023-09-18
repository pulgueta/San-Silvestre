import { FC } from 'react'

import type { Metadata } from 'next'

import { Layout } from '@/interfaces'
import AdminNavbar from '@/components/navbar/admin-navbar'

export const metadata: Metadata = {
    title: 'Admin Dashboard',
    description: 'This is your dashboard as an admin',
}

const AdminLayout: FC<Layout> = ({ children }) => {

    return (
        <>
            <AdminNavbar />
            {children}
        </>
    )
}

export default AdminLayout