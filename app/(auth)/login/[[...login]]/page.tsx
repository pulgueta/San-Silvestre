import { SignIn } from "@clerk/nextjs"

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-500 to-violet-500">
        <SignIn />
    </div>
  )
}
export default Login