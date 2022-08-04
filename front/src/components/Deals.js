import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Deals = ({baseUrl}) => {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    const getProducts = async() =>{
        await axios.get(baseUrl + "api/products/deals")
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
                        return  <Link to={"/product/"+product.id} key={i}><div className="product-grid" >
                            <div className="info">
                                <img className="info-img" src={`${baseUrl + product.id}.png`}></img>
                                <p className="info-name">{product.name}</p>
                                <div className="price">
                                    <p className="info-price">${product.price}</p>
                                    <span className="price-deal">${product.dealPrice}</span>
                                </div>
                            </div>
                            <button className="info-btn">BUY</button>
                        </div></Link>
                    })}
                </div>
        </div>
    </div>
  )
}

export default Deals