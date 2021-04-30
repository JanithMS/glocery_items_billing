import React, { useState, useEffect } from 'react'
import getUser from '../server/users';

function UsersData (probs) {
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const jsonOBJ = await getUser()
                setUser(jsonOBJ)
                setIsPending(false)
            } catch (e) {
                setError(e)
                setIsPending(false)
            }
        }
        fetchData()
    }, [probs.temp])

    if (isPending) return (<div>Loading...</div>)
    if (error) return (<div>{error}</div>)
    if (!user && !isPending && !error) return(<div>No Data Found</div>)
    if (user) return (
        <div>
        <p>Name: {user.userName}</p>
        <p>Street: {user.streetAddress}</p>
        <p>City: {user.city}</p>
        <p>State: {user.state}</p>
        <p>Country: {user.country}</p>
        <p>PIN Code: {user.postcode}</p>
        <p>Email: {user.email}</p>
        <p>Date of Birth: {user.dateString}</p>
        <p>Phone Number: {user.phone}</p>
        <p>Cell: {user.cell}</p>
        { <img src={user.photo} alt="Image not Found"/> }
    </div>
    )
}

export default UsersData;