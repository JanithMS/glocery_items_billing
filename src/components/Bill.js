import React from 'react'
import AddItemForm from './AddItemForm'
import BillTable from './BillTable'


function Bill () {
    const [gloceryItems, setGloceryItems] = React.useState([])
    const [itemDetails, setItem] = React.useState([])
    const [error, setError] = React.useState([{itemError:"", quantityError:"",priceError:""}])

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
        }
    }

    if(gloceryItems.length !== 0) {
        return (
            <div>
                <BillTable gloceryItems={gloceryItems}/>
                <AddItemForm 
                    handleChange={handleChange}
                    handleAddClick ={handleAddClick}
                    error={error}/>
            </div>
        )
    } else {
        return (
            <AddItemForm 
            handleChange={handleChange}
            handleAddClick ={handleAddClick}
            error={error}/>
        )
    }

}

export default Bill;