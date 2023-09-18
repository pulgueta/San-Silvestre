import { SignUp } from "@clerk/nextjs"

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-violet-500">
        <SignUp />
    </div>
  )
}
export default Register