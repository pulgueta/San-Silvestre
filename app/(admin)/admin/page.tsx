import { NextPage } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CreateStore from "@/components/admin/create-store"

const AdminPage: NextPage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] p-4">
      <div className="grid grid-cols-3 gap-4 min-w-[75%] row-auto max-w-md mx-auto">
        <Card className="w-full max-w-[500px]">
          <CardHeader>
            <CardTitle>Store 1</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src='https://www.meloyalvarez.com/images/projects/web_cc-san-silvestre_1669758630_n34LA.webp'
              alt="Sansil"
              width={500}
              height={500}
              priority
              quality={100}
              className="rounded-sm"
            />
          </CardContent>
          <CardFooter className="justify-end">
            <Button>Manage</Button>
          </CardFooter>
        </Card>
        <CreateStore />
      </div>
    </div>
  )
}
export default AdminPage