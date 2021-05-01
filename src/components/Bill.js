import React from 'react'
import AddItemForm from './AddItemForm'
import BillTable from './BillTable'
import getUser from '../server/users';
import generatePDF from '../Utils/pdf'
import UsersData from './UsersData'


function Bill (probs) {
    const [gloceryItems, setGloceryItems] = React.useState([])
    const [itemDetails, setItem] = React.useState({item: '',quantity: '',price: ''})
    const [error, setError] = React.useState([{itemError:"", quantityError:"",priceError:""}])

    const [userState, setUserState] = React.useState({user:null,isPending:true,error:null});

    React.useEffect(() => {
        async function fetchData() {
            try {
                const jsonOBJ = await getUser()
                setUserState({
                    user:jsonOBJ,
                    isPending:false,
                    error:null
                })
            } catch (e) {
                setUserState({
                    user:null,
                    isPending:false,
                    error:e
                })
            }
        }
        if(probs.isUser === true) fetchData()
        else setUserState({user: null, isPending: false, error: null})
    },[probs.isUser])

    const handleChange = event => {
        setItem((itemDetails) => ({
            ...itemDetails,
            [event.target.name]: event.target.value
        }))
    }

    const isValid = () => {
        if (!(itemDetails.item)) {
            setError({itemError: "Please enter item Name"});
            return false;
        } else if (!(itemDetails.quantity)) {
            setError({quantityError: "Please enter item Quantity"});
            return false;
        } else if (!(itemDetails.price)) {
            setError({priceError: "Please enter item Price"});
            return false;
        } else if(itemDetails.item && 
            Number.isInteger(parseInt(itemDetails.quantity)) && 
            Number.isInteger(parseInt(itemDetails.price))) {
                return true;
        } else if(!Number.isInteger(parseInt(itemDetails.quantity))) {
            setError({quantityError: "Qunatity should be an integer"});
            return false;
        } else if (!Number.isInteger(parseInt(itemDetails.price))) {
            setError({priceError: "Price should be an integer"});
            return false;
        } else return false;
    }

    const handleAddClick = () => {
        if(isValid()) {
            const itemDetailswithAmount = ({
                ...itemDetails,
                amount: (itemDetails.quantity) * (itemDetails.price)
            })
            const newGloceryItems = [...gloceryItems, itemDetailswithAmount]
            setGloceryItems(newGloceryItems)
            setError({itemError:"", quantityError:"",priceError:""})
            setItem({item: '',quantity: '',price: ''})
        }
    }

    if(gloceryItems.length !== 0) {
        return (
            <div>
                {probs.isUser && <UsersData 
                    userState={userState}/>}
                <BillTable gloceryItems={gloceryItems}/>
                <AddItemForm 
                    handleChange={handleChange}
                    handleAddClick ={handleAddClick}
                    itemDetails={itemDetails}
                    error={error}/>
                <button onClick={() => generatePDF(gloceryItems, userState.user, probs.isUser)}>Generate Invoice</button>
            </div>
        )
    } else {
        return (
            <div>
                {probs.isUser && <UsersData 
                    userState={userState}/>}
                <AddItemForm 
                handleChange={handleChange}
                handleAddClick ={handleAddClick}
                itemDetails={itemDetails}
                error={error}/>
            </div>
        )
    }

}

export default Bill;