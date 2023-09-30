import { PlusCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const CreateStore = () => {
    return (
        <Card className="w-full max-w-[500px] flex items-center justify-center">
            <CardContent className="flex flex-col items-center justify-center gap-4">
                <PlusCircleIcon className="w-12 h-12" />
                <Button>Create a new store</Button>
            </CardContent>
        </Card>
    )
}
export default CreateStore