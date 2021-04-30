import React from 'react'

function AddItemForm (probs) {
    return (
        <div>
            <div>
                <input name="item" placeholder="Item" onChange={probs.handleChange}/>
                <p>{probs.error.itemError}</p>
                <input name="quantity" placeholder="Quantity" onChange={probs.handleChange}/>
                <p>{probs.error.quantityError}</p>
                <input name="price" placeholder="Price per Item" onChange={probs.handleChange}/>
                <p>{probs.error.priceError}</p>
            </div>
            <button onClick={probs.handleAddClick}>+</button>
        </div>
    )
}

export default AddItemForm;