import { Link } from "react-router-dom"


 export const Frontpage = () => {
    return (
        <>
            <h1 className="text-5xl bg-gray-500">Front Page .......</h1>

            <Link to={'/auth/sign-in'}>
                Sign In
            </Link>
        </>
    )
}