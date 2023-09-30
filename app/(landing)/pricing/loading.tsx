import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <div className='min-h-[calc(100vh-80px)] bg-neutral-100 dark:bg-neutral-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center p-4'>
            {
                Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="w-[20rem] h-[30rem] mb-4 bg-neutral-200" />
                ))
            }
        </div>
    )
}
export default Loading