import Link from 'next/link'

import { MenuIcon } from 'lucide-react'
import { getServerSession } from 'next-auth'

import { ThemeSwitcher } from './theme-swithcer'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MobileLogOut, NavbarLogOut } from '@/components/ui/logout-button'
import { authOptions } from '@/lib/next-auth'

const UserNavbar = async () => {

    const user = await getServerSession(authOptions)

    console.log(user);

    const routes = [
        {
            label: 'Stores',
            href: '/stores',
        },
        {
            label: 'Profile',
            href: '/profile',
        },
        {
            label: 'Orders',
            href: '/orders',
        },
    ]

    return (
        <nav className='h-20 border-b-2 sticky top-0 flex items-center justify-between px-4 lg:px-0 lg:justify-around bg-white/80 dark:bg-black/80 backdrop-blur z-10'>
            <Link href='/' className='font-bold text-4xl'>San Silvestre</Link>
            <ul className='hidden lg:flex md:items-center md:gap-8'>
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
                    {
                        user
                            ? <NavbarLogOut />
                            : <div className='hidden md:flex md:items-center md:gap-4'>
                                <Link className={buttonVariants({ variant: 'default' })} href='/login' scroll={false}>Sign In</Link>
                                <Link className={buttonVariants({ variant: 'outline' })} href='/register' scroll={false}>Sign Up</Link>
                            </div>
                    }
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
                                            ? <MobileLogOut />
                                            : <>
                                                <Link className={buttonVariants({ variant: 'default' })} href='/login' scroll={false}>Sign In</Link>
                                                <Link className={buttonVariants({ variant: 'outline' })} href='/register' scroll={false}>Sign Up</Link>
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
export default UserNavbar