'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FileUpload } from '@/components/uploadthing/upload'

const storeSchema = z.object({
    storeName: z.string().min(4, 'The store name must be at least 4 characters long'),
    storeCategory: z.enum(['Clothing', 'Groceries', 'Beauty']),
    storeImageUrl: z.string().min(1, 'Store image is required')
})

const CreateStoreModal = () => {
    const { data: session } = useSession()

    const form = useForm<z.infer<typeof storeSchema>>({
        resolver: zodResolver(storeSchema)
    })

    const onSubmit = (data: z.infer<typeof storeSchema>) => {
        console.log({
            zodData: {
                ...data,
                ownerEmail: session?.user?.email,
            }
        });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Create store</Button>
            </DialogTrigger>
            <DialogContent className='max-w-xs md:max-w-xl'>
                <DialogHeader>
                    <DialogTitle>Create a new store</DialogTitle>
                    <DialogDescription>You are about to add a new store, please fill all the fields correctly.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name='storeName'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md'>Store name</FormLabel>
                                        <FormControl>
                                            <Input placeholder='Your store name' type='text' disabled={form.formState.isSubmitting} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='storeCategory'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-md'>Store category</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={storeSchema.shape.storeCategory.Values.Clothing} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.values(storeSchema.shape.storeCategory._def.values).map((category) => (
                                                        <SelectItem key={category} value={category}>{category}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='md:col-span-2'>
                                <FormField
                                    control={form.control}
                                    name='storeImageUrl'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='text-md'>Store image (384x192)</FormLabel>
                                            <FormControl>
                                                <FileUpload endpoint='serverImage' onChange={field.onChange} value={field.value} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <Button type='submit'>Create store</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
export default CreateStoreModal