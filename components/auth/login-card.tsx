'use client'

import Link from "next/link"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import { Loader2Icon } from "lucide-react"

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

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
        console.log(data)
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
                    <span>Do not have an account? <Link href='/register' className={buttonVariants({ variant: 'link' })}>Sign Up</Link></span>
                    <Link href='/forgot-password' className={buttonVariants({ variant: 'link' })}>Forgot my password</Link>
                </div>
            </CardContent>
        </Card>
    )
}
export default LoginCard