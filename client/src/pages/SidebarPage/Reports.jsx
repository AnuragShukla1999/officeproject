
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

export const Reports = () => {
    const [productDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const res = await fetch('http://localhost:7000/api/getproductdetails');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                console.log(data);
                if (data.success && data.data.length > 0) {
                    setProductDetails(data.data); 
                } else {
                    console.error('Error fetching data:', data.message);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchDetails();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p> 
            ) : (
                <div>
                    {productDetails.map((el) => (
                        <div key={el._id}>
                            <h1>{el.fullName}</h1>
                            <p>Email: {el.email}</p>
                            <p>Order Date: {el.orderDate}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
