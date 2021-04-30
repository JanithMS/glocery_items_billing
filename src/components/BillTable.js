import React from 'react'

function BillTable (probs) {

    let netTotal = 0;
    probs.gloceryItems.forEach(_gloceryItem => {
        netTotal += _gloceryItem.amount
    });

    return (
        <div>
        <table>
            <tr>
                <th>Quantity</th>
                <th>Item</th>
                <th>Price</th>
                <th>Amount</th>
            </tr>
        
            {probs.gloceryItems.map((_gloceryItem, index) => (
                <tr key={index}>
                    <td>{_gloceryItem.item}</td>
                    <td>{_gloceryItem.quantity}</td>
                    <td>Rs.{_gloceryItem.price}</td>
                    <td>Rs.{_gloceryItem.amount}</td>
                </tr>
            ))
        }
        <tr>
            <td colSpan="2">Grand Total</td>
            <td colSpan="2">Rs.{netTotal}</td>
        </tr>
        </table>
    </div>
    )
}

export default BillTable;