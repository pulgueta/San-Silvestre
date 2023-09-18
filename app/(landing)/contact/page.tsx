'use client'

import { NextPage } from 'next'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Loader2Icon } from 'lucide-react'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'

const contactSchema = z.object({
    name: z.string().min(4, {
        message: 'Name must be at least 4 characters long'
    }),
    email: z.string().email({
        message: 'Invalid email address'
    }).min(6),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters long'
    })
})

const Contact: NextPage = () => {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const onSubmit = async (data: z.infer<typeof contactSchema>) => {
        try {
            const email = await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(data)
            })

            if (email.status === 200) toast({
                title: 'Email sent',
                description: 'Your email was successfully sent',
                variant: 'default',
                duration: 2500,
            })

            form.reset()
        } catch (error) {
            toast({
                title: 'Error!',
                description: 'Something went wrong',
                variant: 'destructive',
            })
        }
    }

    return (
        <div className='min-h-[calc(100vh-344px)] bg-neutral-100 dark:bg-neutral-950 flex flex-col items-center justify-start p-4'>
            <h1 className='text-4xl font-bold mt-4 mb-8'>Contact Us</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-96 lg:w-[540px] p-6 bg-white dark:bg-neutral-900 rounded-lg lg:mb-8 mb-16'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-lg'>Your name</FormLabel>
                                <FormControl>
                                    <Input placeholder='Harold' type='text' disabled={form.formState.isSubmitting} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-lg'>Your email</FormLabel>
                                <FormControl>
                                    <Input placeholder='something@out.com' type='email' disabled={form.formState.isSubmitting} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-lg'>Your message</FormLabel>
                                <FormControl>
                                    <Textarea disabled={form.formState.isSubmitting} placeholder='Ask what would you like to know' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type='submit' className='w-full' disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting && <Loader2Icon className='animate-spin mr-2' />}
                        {form.formState.isSubmitting ? 'Sending email...' : 'Send'}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default Contact