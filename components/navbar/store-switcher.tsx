'use client'

import { useState } from 'react'

import { CheckIcon, ChevronsUpDownIcon, StoreIcon } from 'lucide-react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'

const StoreSwitcher = () => {
    const [open, setOpen] = useState<boolean>(false)

    const onStoreSelect = () => {
        setOpen(false);
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    role='combobox'
                    aria-expanded={true}
                    aria-label='Select a store'
                    className='w-[240px] justify-between'
                >
                    <StoreIcon className='mr-2 h-4 w-4' />
                    Store name
                    <ChevronsUpDownIcon className='ml-auto h-4 w-4 shrink-0 opacity-50' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[240px] p-0'>
                <Command>
                    <CommandInput placeholder='Search a store...' />
                    <CommandEmpty>No stores found.</CommandEmpty>
                    <CommandGroup heading='Stores'>
                        <CommandItem onSelect={onStoreSelect}>
                            <CheckIcon
                                className='mr-2 h-4 w-4'
                            />
                            Alkomprar
                        </CommandItem>
                        <CommandItem>
                            <CheckIcon
                                className='mr-2 h-4 w-4'
                            />
                            Jumbo
                        </CommandItem>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
export default StoreSwitcher