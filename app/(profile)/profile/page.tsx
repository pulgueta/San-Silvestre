import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/next-auth"

const Profile = async () => {
    const user = await getServerSession(authOptions)

    return (
        <p className="text-center">{JSON.stringify(user)}</p>
    )
}
export default Profile