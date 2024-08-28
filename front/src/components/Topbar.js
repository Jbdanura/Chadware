import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img.png"

const Topbar = ({setNavMobile,navMobile,cartItems,cartPrice}) => {
  return (
    <>
        <div className="mobile-menu">
            <div className="hamburger" onClick={()=>setNavMobile(!navMobile)}>
                  <div className='line'></div>
                  <div className='line'></div>
                  <div className='line'></div>
            </div>
            <Link to="/cart"><div className="cart">
                  <span className="cart-items"><i className="icon-shopping-cart" style={{marginRight:"5px"}}></i>{cartItems} items</span>
                  <span className="cart-money">${cartPrice}</span>
            </div></Link>
         </div>
         <div className="intro">
            <img className="logo" src={logo}></img>
            <hr style={{marginTop: "20px", borderColor: "grey"}}></hr>
         </div>
    </>
  )
}

export default Topbar