'use client'

import { signIn, signOut } from "next-auth/react"

import { Button, buttonVariants } from "./button"
import Link from "next/link"

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

export const SignInButton = () => {
    return (
        <Button variant='default' asChild onClick={() => signIn()}>
            <Link href='/login' scroll={false}>
                Sign In
            </Link>
        </Button>
    )
}