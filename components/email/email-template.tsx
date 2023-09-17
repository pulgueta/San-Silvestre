import { FC } from "react"

interface IEmail {
    name: string,
    message: string,
}

export const EmailTemplate: FC<Readonly<IEmail>> = ({ name, message }) => (
    <div className="bg-slate-500 p-4">
        <h1 className="text-2xl font-bold">Message from: {name}</h1>
        <p>
            Message: {message}
        </p>
    </div>
)