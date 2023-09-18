import { Metadata, NextPage } from 'next'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CheckCircleIcon, XIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const metadata: Metadata = {
    title: 'Pricing'
}

const Pricing: NextPage = () => {

    return (
        <div className='min-h-[calc(100vh-344px)] bg-neutral-100 dark:bg-neutral-950 flex flex-col items-center justify-start p-4'>
            <h1 className='text-center text-3xl font-bold mt-8 mb-16'>We have 3 plans if you want to become a seller with us</h1>
            <section className='flex flex-col lg:flex-row gap-4'>
                <Card className='max-w-sm bg-neutral-50 dark:bg-neutral-900'>
                    <CardHeader className='text-center'>
                        <CardTitle className='text-3xl font-bold'>Standard</CardTitle>
                        <CardDescription>For starters</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h1 className='font-black text-center text-5xl mb-4'>Free</h1>
                        <Separator className='mb-4' />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nulla explicabo tempore temporibus animi magnam cumque nostrum omnis quos nobis suscipit laboriosam, rerum soluta nam amet totam dolorem voluptas. Sit.</p>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Acquire</Button>
                    </CardFooter>
                </Card>
                <Card className='max-w-sm border-purple-500 border-4 bg-neutral-50 dark:bg-neutral-900'>
                    <CardHeader className='text-center'>
                        <CardTitle className='text-3xl font-bold'>Professional</CardTitle>
                        <CardDescription>Most popular plan</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h1 className='font-black text-center text-5xl mb-4'>$29.99/mo</h1>
                        <Separator className='mb-4' />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nulla explicabo tempore temporibus animi magnam cumque nostrum omnis quos nobis suscipit laboriosam, rerum soluta nam amet totam dolorem voluptas. Sit.</p>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Acquire</Button>
                    </CardFooter>
                </Card>
                <Card className='max-w-sm bg-neutral-50 dark:bg-neutral-900'>
                    <CardHeader className='text-center'>
                        <CardTitle className='text-3xl font-bold'>Business</CardTitle>
                        <CardDescription>For serious competitors</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <h1 className='font-black text-center text-5xl mb-4'>$59.99/mo</h1>
                        <Separator className='mb-4' />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nulla explicabo tempore temporibus animi magnam cumque nostrum omnis quos nobis suscipit laboriosam, rerum soluta nam amet totam dolorem voluptas. Sit.</p>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Acquire</Button>
                    </CardFooter>
                </Card>
            </section>
            <div className='my-16'>
                <h1 className='text-4xl font-bold text-center mb-12'>Check our plans features:</h1>
                
                {/* <Table className='w-[1280px] mb-16'>
                    <TableHeader>
                        <TableRow className='text-3xl'>
                            <TableHead />
                            <TableHead className='text-center font-bold'>Standard</TableHead>
                            <TableHead className='text-center font-bold'>Pro Plan</TableHead>
                            <TableHead className='text-center font-bold'>Luxury</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className='text-center text-lg'>
                            <TableCell className='font-semibold'>Stores</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>Unlimited</TableCell>
                        </TableRow>
                        <TableRow className='text-center text-lg'>
                            <TableCell className='font-semibold'>Online payments</TableCell>
                            <TableCell><CheckCircleIcon className='ml-32 text-green-500' /></TableCell>
                            <TableCell><CheckCircleIcon className='ml-32 text-green-500' /></TableCell>
                            <TableCell><CheckCircleIcon className='ml-32 text-green-500' /></TableCell>
                        </TableRow>
                        <TableRow className='text-center text-lg'>
                            <TableCell className='font-semibold'>Admin dashboard</TableCell>
                            <TableCell><CheckCircleIcon className='ml-32 text-green-500' /></TableCell>
                            <TableCell><CheckCircleIcon className='ml-32 text-green-500' /></TableCell>
                            <TableCell><CheckCircleIcon className='ml-32 text-green-500' /></TableCell>
                        </TableRow>
                        <TableRow className='text-center text-lg'>
                            <TableCell className='font-semibold'>IT Support 24/7</TableCell>
                            <TableCell><XIcon className='ml-32 text-red-500' /></TableCell>
                            <TableCell><CheckCircleIcon className='ml-32 text-green-500' /></TableCell>
                            <TableCell><CheckCircleIcon className='ml-32 text-green-500' /></TableCell>
                        </TableRow>
                        <TableRow className='text-center text-lg'>
                            <TableCell />
                            <TableCell>
                                <Button className='w-full'>Acquire</Button>
                            </TableCell>
                            <TableCell>
                                <Button className='w-full'>Acquire</Button>
                            </TableCell>
                            <TableCell>
                                <Button className='w-full'>Acquire</Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table> */}

                <h1 className='text-4xl lg:text-5xl font-bold text-center mb-12'>Frequently Asked Questions (FAQ)</h1>
                <Accordion type="single" collapsible className='max-w-3xl mx-auto'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-xl text-left'>What payment processors do you use?</AccordionTrigger>
                        <AccordionContent className='text-md'>
                            We use Stripe and MercadoPago for all payment handling and security that it requires.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='text-xl text-left'>How is IT Support provided?</AccordionTrigger>
                        <AccordionContent className='text-md'>
                            We provide support through a phone number dedicated to our specialists. They will help you with any concern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='text-xl text-left'>How are prices charged?</AccordionTrigger>
                        <AccordionContent className='text-md'>
                            We charge our prices monthly. With a competitive price, we are the best option available to have your store online.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className='text-xl text-left'>Can I get all the analytics in my dashboard?</AccordionTrigger>
                        <AccordionContent className='text-md'>
                            Yes. You will have all the dashboard features no matter which plan you have.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className='dark:bg-neutral-900 bg-neutral-200 rounded-xl p-8 w-full flex flex-col items-center justify-around gap-4 mt-16 mb-0'>
                    <h1 className='text-3xl font-bold text-center'>Cannot find a plan that fits you?</h1>
                    <p className='text-lg'>Send us an email!</p>
                    <div className='flex gap-4 items-center'>
                        <Input type='email' placeholder='Your email' size={32} />
                        <Button>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing