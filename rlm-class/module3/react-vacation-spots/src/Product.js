import React from 'react'

function Product(props) {
    return (
        <div className="container">
            <h1 className="place">{props.product.place}</h1>
            <h2 className="price">${props.product.price}</h2>
            <p className="season">{props.product.timeToGo}</p>
        </div>
    )
}

export default Product