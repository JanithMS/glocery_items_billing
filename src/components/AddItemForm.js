import React from 'react'

function AddItemForm (probs) {
    return (
        <div className='item-form'>
            {/* <div> */}
                <input name="item" placeholder="Item" value={probs.itemDetails.item} onChange={probs.handleChange}/>
                <p>{probs.error.itemError}</p>
                <input name="quantity" placeholder="Quantity" value={probs.itemDetails.quantity} onChange={probs.handleChange}/>
                <p>{probs.error.quantityError}</p>
                <input name="price" placeholder="Price per Item" value={probs.itemDetails.price} onChange={probs.handleChange}/>
                <p>{probs.error.priceError}</p>
            {/* </div> */}
            <button onClick={probs.handleAddClick}>+</button>
        </div>
    )
}

export default AddItemForm;