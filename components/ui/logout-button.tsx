'use client'

import { signOut } from "next-auth/react"

import { Button } from "./button"

export const MobileLogOut = () => {
    return (
        <Button onClick={() => signOut()} variant='destructive'>Log Out</Button>
    )
}

export const NavbarLogOut = () => {
    return (
        <Button className='hidden md:block' onClick={() => signOut()} variant='destructive'>Log Out</Button>
    )
}