import { useSelector } from "react-redux"



export const Profile = () => {


    // eslint-disable-next-line no-unused-vars
    const { userData } = useSelector((state) => state.user)

    return (
        <div>
            <h1>Profile</h1>

            <div>
                <label>Name</label>
                <label>{userData}</label>
            </div>
        </div>
    )
}