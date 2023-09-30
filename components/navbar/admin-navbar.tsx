import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CheckIcon, ChevronsUpDownIcon, StoreIcon } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import StoreSwitcher from "./store-switcher"
import { ThemeSwitcher } from "./theme-swithcer"

const AdminNavbar = async () => {

    return (
        <nav className='h-20 border-b-2 flex items-center justify-between px-4 lg:px-0 lg:justify-around bg-white dark:bg-black'>
            <StoreSwitcher />
            <div className="flex items-center gap-4">
                <ThemeSwitcher />
            </div>
        </nav>
    )
}
export default AdminNavbar