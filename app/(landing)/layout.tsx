import { FC } from 'react'

import { Layout } from '@/interfaces'
import LandingNavbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

const LandingLayout: FC<Layout> = ({ children }) => {

    return (
        <>
            <LandingNavbar />
            {children}
            <Footer />
        </>
    )
}

export default LandingLayout