'use client'

import Link from "next/link"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { Loader2Icon } from "lucide-react"
import axios, { AxiosError } from 'axios'
import { toast } from "sonner"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"

const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})

const LoginCard = () => {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        await axios.post('/api/login', data)
            .then(async ({ data: axiosRes }) => {
                await signIn('credentials', {
                    callbackUrl: '/profile',
                    redirect: true,
                    email: data.email,
                    password: data.password,
                })
                toast.success('Login', {
                    dismissible: true,
                    description: 'Welcome back!'
                })
            })
            .catch((error) => {
                if (error instanceof AxiosError) {
                    toast.error(error.response?.status === 401 && 'Error', {
                        dismissible: true,
                        description: 'Invalid credentials'
                    })
                }
            })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to have access to your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-80 lg:w-96">
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-base'>Your email</FormLabel>
                                    <FormControl>
                                        <Input placeholder='Your email address' type='email' disabled={form.formState.isSubmitting} {...field} />
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
                                        <Input placeholder='Your password' type='password' disabled={form.formState.isSubmitting} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
                            {form.formState.isSubmitting ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                </Form>
                <div className="flex flex-col items-center justify-end mt-4">
                    <span>Do not have an account? <Link href='/register' scroll={false} className={buttonVariants({ variant: 'link' })}>Sign Up</Link></span>
                    <Link href='/forgot-password' className={buttonVariants({ variant: 'link' })}>Forgot my password</Link>
                </div>
            </CardContent>
        </Card>
    )
}
export default LoginCard