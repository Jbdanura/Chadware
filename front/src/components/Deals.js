import React, { useEffect, useState } from 'react'
import axios from "axios"

const Deals = () => {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    const getProducts = async() =>{
        await axios.get("http://localhost:3003/api/products/deals")
        .then(result=>setProducts(result.data))
    }
    getProducts()
  },[])

  return (
    <div className="content">
        <h3 className="title">Best deals</h3>
            <div className="deals-products">
                <div className="product-grid-container">
                    {products.map((product,i)=>{
                        return  <div className="product-grid" key={i}>
                            <div className="info">
                                <img className="info-img" src={`http://localhost:3003/${product.id}.png`}></img>
                                <p className="info-name">{product.name}</p>
                                <div className="price">
                                    <p className="info-price">${product.price}</p>
                                    <span className="price-deal">${product.dealPrice}</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
        </div>
    </div>
  )
}

export default Deals