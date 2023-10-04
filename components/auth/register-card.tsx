'use client'

import { useState } from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2Icon } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"

const registerSchema = z.object({
    firstName: z.string().min(3, 'First name must be at least 3 characters'),
    lastName: z.string().min(3, 'Last name must be at least 3 characters'),
    email: z.string().min(4, 'Email must be at least 4 characters long').email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
})

const RegisterCard = () => {
    const [password, setPassword] = useState<{ first: boolean, second: boolean }>({
        first: false,
        second: false,
    })

    const router = useRouter()

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
        }
    })

    const onSubmit = async ({ confirmPassword, ...rest }: z.infer<typeof registerSchema>) => {
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rest)
            })

            if (res.ok) {
                toast({
                    title: 'Success!',
                    variant: 'default',
                    description: 'Your account has been created.'
                })

                router.push('/profile')
            }

        } catch (error) {
            if (error instanceof Error) {
                toast({
                    title: 'Error!',
                    variant: 'destructive',
                    description: error.message
                })
            }

        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Create a new account.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-80 lg:w-96">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name='firstName'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-base'>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Your first name' type='text' disabled={form.formState.isSubmitting} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='lastName'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-base'>Last name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Your last name' type='text' disabled={form.formState.isSubmitting} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base'>Your email address</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Your email' type='email' disabled={form.formState.isSubmitting} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base'>Your password</FormLabel>
                                    <FormControl>
                                        <Input className="relative" placeholder='Your password' type={password.first ? 'text' : 'password'} disabled={form.formState.isSubmitting} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="my-1">
                            <Checkbox checked={password.first} onCheckedChange={() => setPassword({ ...password, first: !password.first })} className="mr-2" />
                            <label htmlFor="seePassword">See password</label>
                        </div>
                        <FormField
                            control={form.control}
                            name='confirmPassword'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base'>Confirm password</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Confirm your password' type={password.second ? 'text' : 'password'} disabled={form.formState.isSubmitting} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="my-1">
                            <Checkbox checked={password.second} onCheckedChange={() => setPassword({ ...password, second: !password.second })} className="mr-2" />
                            <label htmlFor="seePassword">See password</label>
                        </div>
                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
                            {form.formState.isSubmitting ? 'Creating account...' : 'Create account'}
                        </Button>
                    </form>
                </Form>
                <div className="mt-4 w-full flex items-center justify-center">
                    <span>Already have an account? <Link href='/login' scroll={false} className={buttonVariants({ variant: 'link' })}>Sign In</Link></span>
                </div>
            </CardContent>
        </Card>
    )
}

export default RegisterCard