import React from 'react'

function BillTable (probs) {

    let netTotal = 0;
    probs.gloceryItems.forEach(_gloceryItem => {
        netTotal += _gloceryItem.amount
    });

    return (
        <div className='bill-table'>
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
                ))}
                <tr>
                    <th colSpan="2">Grand Total</th>
                    <th colSpan="2">Rs.{netTotal}</th>
                </tr>
            </table>
        </div>
    )
}

export default BillTable;