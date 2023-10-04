import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/next-auth"
import { redirect } from "next/navigation"

const Profile = async () => {
    const user = await getServerSession(authOptions)

    if (!user) {
        redirect('/login')
    }

    return (
        <p>{JSON.stringify(user)}</p>
    )
}
export default Profile