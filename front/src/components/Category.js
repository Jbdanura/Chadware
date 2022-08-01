import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"

const Category = () => {
  const category = useParams().category
  const [products,setProducts] = useState([])

  useEffect(()=>{
    const getProducts = async () => {
      axios.get("http://localhost:3003/api/products/category/"+category).then(result=>setProducts(result.data))
    }
    getProducts()
  },[category])

  return (
    <div className="category-container">
      <p className="title">{category}</p>
        <div className="product-grid-container category-grid">
            {products.map((product,i)=>{
                return  <div className="product-grid" key={i}>
                    <div className="info">
                        <img className="info-img" src={`http://localhost:3003/${product.id}.png`}></img>
                        <p className="info-name">{product.name}</p>
                        <div className="price">
                            {product.deal ? <>
                              <p className="info-price">${product.price}</p>
                              <span className="price-deal">${product.dealPrice}</span>
                            </> : <p className="normal-price">${product.price}</p>}

                        </div>
                    </div>
                </div>
            })}
          </div>
    </div>
  )
}

export default Category