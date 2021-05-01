import React from 'react'

function UsersData (probs) {

    if (probs.userState.user) return (
        <div>
        <p>Name: {probs.userState.user.userName}</p>
        <p>Street: {probs.userState.user.streetAddress}</p>
        <p>City: {probs.userState.user.city}</p>
        <p>State: {probs.userState.user.state}</p>
        <p>Country: {probs.userState.user.country}</p>
        <p>PIN Code: {probs.userState.user.postcode}</p>
        <p>Email: {probs.userState.user.email}</p>
        <p>Date of Birth: {probs.userState.user.dateString}</p>
        <p>Phone Number: {probs.userState.user.phone}</p>
        <p>Cell: {probs.userState.user.cell}</p>
        { <img src={probs.userState.user.photo} alt="Image not Found"/> }
    </div>
    )
}

export default UsersData;