import { FC } from 'react'

import Link from 'next/link'

import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeSwitcher } from './theme-swithcer'
import { UserButton, currentUser } from '@clerk/nextjs'

const LandingNavbar: FC = async () => {
    const user = await currentUser()

    const routes = [
        {
            label: 'Stores',
            href: '/stores',
        },
        {
            label: 'Pricing',
            href: '/pricing',
        },
        {
            label: 'About',
            href: '/about',
        },
        {
            label: 'Contact Us',
            href: '/contact',
        }
    ]

    return (
        <nav className='h-20 border-b-2 sticky top-0 flex items-center justify-between px-4 lg:px-0 lg:justify-around bg-white/80 dark:bg-black/80 backdrop-blur z-10'>
            <Link href='/' className='font-bold text-4xl'>San Silvestre</Link>
            <ul className='hidden lg:flex md:items-center md:gap-4'>
                {routes.map(route => (
                    <li key={route.href}>
                        <Link href={route.href} className='font-medium text-lg hover:text-neutral-400 transition-colors duration-300'>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-4'>
                    <div className='hidden md:flex md:items-center md:gap-4'>
                        {
                            user
                                ? <UserButton afterSignOutUrl='/' />
                                : <>
                                    <Button asChild>
                                        <Link href='/login' className='font-medium text-lg'>
                                            Sign In
                                        </Link>
                                    </Button>
                                    <Button asChild variant='outline'>
                                        <Link href='/register' className='font-medium text-lg'>
                                            Sign Up
                                        </Link>
                                    </Button>
                                </>
                        }
                    </div>
                    <ThemeSwitcher />
                </div>
                <div className='flex items-center lg:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size='icon'>
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <ul className='flex flex-col space-y-4 mt-8'>
                                {routes.map(route => (
                                    <li key={route.href}>
                                        <Link href={route.href} className='font-medium text-lg hover:text-neutral-400 transition-colors duration-300'>
                                            {route.label}
                                        </Link>
                                    </li>
                                ))}
                                <div className='flex flex-col space-y-4 md:hidden'>
                                    {
                                        user
                                            ? <UserButton afterSignOutUrl='/' />
                                            : <>
                                                <Button asChild>
                                                    <Link href='/login' className='font-medium text-lg'>
                                                        Sign In
                                                    </Link>
                                                </Button>
                                                <Button asChild variant='outline'>
                                                    <Link href='/register' className='font-medium text-lg'>
                                                        Sign Up
                                                    </Link>
                                                </Button>
                                            </>
                                    }
                                </div>
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav >
    )
}
export default LandingNavbar