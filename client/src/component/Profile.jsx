// import { useState, useEffect  } from "react"
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux"



export const Profile = () => {


    // eslint-disable-next-line no-unused-vars
    // const { userData } = useSelector((state) => state.user)


    // const [user, setUser] = useState(null);

    // // const userId = "668b9a2b28d4399d04a32bfe";

    // const { id } = useParams();


    // const fetchUser = async () => {
    //     try {
    //         const res = await fetch(`http://localhost:7000/api/${id}/user`);

    //         if (!res.ok) {
    //             throw new Error('Failed to fetch user');
    //         }
    //         const userData = await res.json();

    //         setUser(userData.user)
    //         console.log(userData);
    //     } catch (error) {
    //         console.error("Error", error)
    //     }
    // }

    // useEffect(() => {
    //     fetchUser();
    // })

    return (
        <div>
            <h1>Profile</h1>

            <div>
                <label>Name</label>
                {/* <label>{user}</label> */}
            </div>
        </div>
    )
}