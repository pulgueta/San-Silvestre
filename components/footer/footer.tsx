import { FC } from 'react'

import Link from 'next/link'

const Footer: FC = () => {
    return (
        <footer className='bg-neutral-200 dark:bg-neutral-900 py-8 px-4 text-black dark:text-white'>
            <div className='max-w-6xl flex flex-col gap-4 w-full justify-center mx-auto'>
                <div className='space-y-4 flex flex-col lg:flex-row lg:justify-between'>
                    <Link href='/' className='font-bold text-4xl'>
                        <h1>
                            San Silvestre
                        </h1>
                        <span className='text-lg font-semibold'>Shopping Mall</span>
                    </Link>
                    <nav>
                        <ul className='flex flex-col gap-4 text-right'>
                            <li>
                                <Link href='/stores'>Stores</Link>
                            </li>
                            <li>
                                <Link href='/pricing'>Pricing</Link>
                            </li>
                            <li>
                                <Link href='/about'>About</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <span className='text-center'>
                    {`${new Date().getFullYear()} San Silvestre Mall ©`}
                </span>
            </div>
        </footer>
    )
}
export default Footer