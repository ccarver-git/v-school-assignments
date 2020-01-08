import React from 'react'

function Product(props) {
    return (
        <div>
            <h1>{props.product.place}</h1>
            <h2>{props.product.price}</h2>
            <p>{props.product.timeToGo}</p>
        </div>
    )
}

export default Product