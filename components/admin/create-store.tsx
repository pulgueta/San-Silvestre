import { PlusCircleIcon } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import CreateStoreModal from "@/components/modal/create-store"

const CreateStore = () => {
    return (
        <Card className="w-full max-w-[500px] flex items-center justify-center">
            <CardContent className="flex flex-col items-center justify-center gap-4">
                <PlusCircleIcon className="w-12 h-12 mt-4" />
                <CreateStoreModal />
            </CardContent>
        </Card>
    )
}
export default CreateStore