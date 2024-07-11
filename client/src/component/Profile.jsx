import { useState, useEffect  } from "react"
import { useSelector } from "react-redux"



export const Profile = () => {


    // eslint-disable-next-line no-unused-vars
    // const { userData } = useSelector((state) => state.user)


    const [user, setUser] = useState(null);

    const userId = "",


    const fetchUser = async () => {
        try {
            const res = await fetch('http://localhost:7000/api/')
        } catch (error) {
            
        }
    }

    useEffect(() => {

    })

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