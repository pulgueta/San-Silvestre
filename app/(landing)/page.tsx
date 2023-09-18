import { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

import Sanilvestre from '@/public/sansil.webp'
import autoSpeed from '@/public/auto-speed.svg'
import croftsAccountant from '@/public/crofts-accountants.svg'
import fastBanana from '@/public/fast-banana.svg'
import spaceCube from '@/public/space-cube.svg'

const stores = [
    {
        id: 1,
        storeName: 'Auto Speed',
        storeLogo: autoSpeed,
    },
    {
        id: 2,
        storeName: 'Crofts Accountant',
        storeLogo: croftsAccountant,
    },
    {
        id: 3,
        storeName: 'Fast Banana',
        storeLogo: fastBanana,
    },
    {
        id: 4,
        storeName: 'Space Cube',
        storeLogo: spaceCube,
    }
]

const Landing: NextPage = () => {
    return (
        <main className='min-h-[calc(100vh-80px)] bg-neutral-100 dark:bg-neutral-950 flex flex-col items-center justify-start p-4'>
            <Image
                src={Sanilvestre}
                alt='San Silvestre Mall'
                width={800}
                height={800}
                priority
                className='my-4 rounded-xl'
            />
            <h1 className='text-center text-4xl md:text-5xl font-bold my-2'>Welcome to San Silvestre Mall</h1>
            <p className='text-lg text-center drop-shadow-sm my-4'>The best mall in all Barrancabermeja</p>
            <h2 className='text-2xl font-semibold text-center drop-shadow-sm my-4'>Always with a smile, we offer the best products and customer service</h2>

            <section className='my-16'>
                <h2 className="text-3xl text-center font-bold text-black dark:text-white">Our most famous stores:</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 md:gap-24 lg:gap-32 place-items-center mt-8'>
                    {
                        stores.map((store) => (
                            <Image
                                key={store.id}
                                src={store.storeLogo}
                                alt={store.storeName}
                                width={250}
                                height={250}
                                priority
                                className={`grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer ${store.id === 4 && 'lg:col-span-3 xl:col-span-1'}`}
                            />
                        ))
                    }
                </div>
            </section>
            <div className='dark:bg-neutral-900 bg-neutral-200 rounded-xl p-8 w-full flex flex-col xl:flex-row items-center justify-around gap-8 my-8'>
                <Image
                    src='https://img.freepik.com/premium-photo/portrait-smiling-african-american-businessman-signs-contract-sit-table-meeting-office-with-notebook-with-pen-laptop_183314-5976.jpg'
                    alt='Smiling man'
                    width={650}
                    height={650}
                    priority
                    className="rounded-lg"
                />
                <div className='max-w-2xl xl:max-w-xl space-y-8 text-black dark:text-white'>
                    <h1 className='text-3xl text-center xl:text-left font-bold'>We are the top mall in town</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus minus in consequuntur eum accusamus perspiciatis nobis magni sunt! Deleniti consectetur a laudantium sunt autem quasi veritatis vitae ad qui?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam necessitatibus minus in consequuntur eum accusamus perspiciatis nobis magni sunt! Deleniti consectetur a laudantium sunt autem quasi veritatis vitae ad qui?</p>
                    <Button color='primary' size='lg' className='w-full' asChild>
                        <Link href='/contact'>
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}
export default Landing