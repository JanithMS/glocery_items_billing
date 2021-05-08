import React from 'react'

function UsersData (probs) {
//console.log(probs.userState)

    if (probs.userState.isPending) return (<div>Loading...</div>)
    if (probs.userState.errorUser) return (<div>{probs.userState.errorUser}</div>)
    if (!probs.userState.user && !probs.userState.isPending && !probs.userState.errorUser) return(<div>No Data Found</div>)
    if (probs.userState.user) return (
        <div className='userData'>
            <div>
                <p>{probs.userState.user.userName}</p>
                <p>Date of Birth: {probs.userState.user.dateString}</p>
                <p>Address: {probs.userState.user.streetAddress}, {probs.userState.user.city} - {probs.userState.user.postcode}</p>
                <p>State: {probs.userState.user.state}, Country: {probs.userState.user.country}</p>
                <div className='mail'>
                    <p>Mail:</p>
                    <a className='App-link' href={'mailto:'+probs.userState.user.email}>{probs.userState.user.email}</a>
                </div>
                <div className='phone-num'>
                    <p>Phone Number:</p>
                    <a className='App-link' href={'tel:'+probs.userState.user.phone}>{probs.userState.user.phone}, </a>
                    <a className='App-link' href={'tel:'+probs.userState.user.cell}>{probs.userState.user.cell}</a>
                </div> 
            </div>
            <div>
                { <img src={probs.userState.user.photo} alt="Source not Found"/> }
            </div>

        </div>
    )
}

export default UsersData;