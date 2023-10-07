'use client'

import { FC } from 'react'

import Image from 'next/image'

import { FileIcon, X } from 'lucide-react'

import { UploadDropzone } from './uploadthing-buttons'

import '@uploadthing/react/styles.css'

type FileUploadProps = {
    onChange: (url?: string) => void
    value: string
    endpoint: 'serverImage'
}

export const FileUpload: FC<FileUploadProps> = ({ onChange, value, endpoint }) => {
    const fileType = value?.split('.').pop()

    if (value && fileType !== 'pdf') {
        return (
            <div className='relative h-48 w-96 mx-auto'>
                <Image
                    priority
                    width={384}
                    height={192}
                    quality={100}
                    src={value}
                    alt='Upload'
                    className='rounded-xl h-48 object-cover object-center'
                />
                <button
                    onClick={() => onChange('')}
                    className='bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm'
                    type='button'
                >
                    <X className='h-4 w-4' />
                </button>
            </div>
        )
    }

    if (value && fileType === 'pdf') {
        return (
            <div className='relative flex items-center p-2 mt-2 rounded-md bg-background/10'>
                <FileIcon className='h-10 w-10 fill-indigo-200 stroke-indigo-400' />
                <a
                    href={value}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline'
                >
                    {value}
                </a>
                <button
                    onClick={() => onChange('')}
                    className='bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm'
                    type='button'
                >
                    <X className='h-4 w-4' />
                </button>
            </div>
        )
    }

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url)
            }}
            onUploadError={(error: Error) => {
                console.log(error)
            }}
        />
    )
}