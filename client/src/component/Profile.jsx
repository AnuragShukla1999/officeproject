/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect  } from "react"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"


export const Profile = () => {
    const { userData } = useSelector((state) => state.user);
    console.log(userData)

    const [user, setUser] = useState(null);

    const params = useParams();

    const fetchUser = async () => {
        try {
            const res = await fetch(`http://localhost:7000/api/user/${params.id}`);
            if (!res.ok) {
                throw new Error('Failed to fetch user');
            }
            const data = await res.json();
            setUser(data)
            console.log(data);
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [params.id])

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <label>Name</label>
                <label>{user}</label>
            </div>
        </div>
    )
}