import React from 'react'
import logo from "../img.png"

const Topbar = ({setNavMobile,navMobile}) => {
  return (
    <>
        <div className="mobile-menu">
            <div className="hamburger" onClick={()=>setNavMobile(!navMobile)}>
                  <div className='line'></div>
                  <div className='line'></div>
                  <div className='line'></div>
            </div>
            <div className="cart">
                  <span className="cart-items"><i className="icon-shopping-cart" style={{marginRight:"5px"}}></i>69 items</span>
                  <span className="cart-money">$420</span>
            </div>
         </div>
         <div className="intro">
            <img className="logo" src={logo}></img>
            <hr style={{marginTop: "20px", borderColor: "grey"}}></hr>
         </div>
    </>
  )
}

export default Topbar