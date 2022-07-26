import React, { useState } from 'react';
import logo from "./img.png"

const App = () =>{

   return(
      <div>
         <img className="logo" src={logo}></img>
         <div className="container">
            <div className="sidebar">
                  <div className="cart">
                        <span className="cart-items"><i class="icon-shopping-cart" style={{marginRight:"5px"}}></i>69 items</span>
                        <span className="cart-money">$420</span>
                  </div>
                  <div className="categories">
                        <h4>Categories</h4>
                  </div>
                  <div className="pages">
                        pages
                  </div>
            </div>
            <div className="content">
                  content
            </div>
         </div>
      </div>
      );

}
export default App;