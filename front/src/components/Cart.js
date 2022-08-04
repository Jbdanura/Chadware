import React from 'react'

const Cart = ({baseUrl,cart,cartPrice, changeQuantity}) => {
  console.log(cart)
  return (
    <div className="cart-detail">
      {cart.length > 0 ? cart.map((product,i)=>{
        return <div className="cart-detail-product" key={i}>
          <img className="img" src={`${baseUrl + product.id}.png`}/>
          <div className="info">
            <h5>{product.name}</h5>
            <div className="quantity-container">
              <div className="quantity-item">
                <p className="quantity">Quantity: <button onClick={()=>changeQuantity(product.id, false)} className="minus">-</button>{product.quantity}
                <button onClick={()=>changeQuantity(product.id, true)} className="plus">+</button></p>
              </div>
              <span className="price-item">
                Price per unit: <span style={{textDecoration:"underline", color: 'rgba(0, 73, 0, 0.699)', display:"block", marginLeft: "5px"}}>${product.price}</span></span>
            </div>
          </div>
        </div>
      }) : <p style={{fontSize:"20px",color:"black",margin: "20px"}}>No items in cart</p>}
      {cart.length > 0 && <div className="cart-checkout">
        <h5>Total: <span style={{textDecoration:"underline"}}>${cartPrice}</span></h5>
        <button onClick={()=>alert("Since this is a fake e-commerce, you cannot buy these items! :P")}>Checkout</button>
        </div>}
    </div>
  )
}

export default Cart