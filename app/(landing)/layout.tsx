import { FC } from 'react'

import LandingNavbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import { InterceptLayout } from '@/interfaces'

const LandingLayout: FC<InterceptLayout> = ({ children, modal }) => {

    return (
        <>
            <LandingNavbar />
            {children}
            {modal}
            <Footer />
        </>
    )
}

export default LandingLayout