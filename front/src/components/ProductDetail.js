import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [product,setProduct] = useState(null)
  const [quantity,setQuantity] = useState(0)
  const id = useParams().product
  
  useEffect(()=>{
    axios.get("http://localhost:3003/api/products/product/"+id).then(result=>setProduct(result.data))
  },[product])

  const changeQuantity = (plus) => {
    if(plus){
        setQuantity(quantity+1)
    } else {
        if(quantity !== 0){
            setQuantity(quantity-1)
        }
    }
  }

  return (
    <div className="product-detail-container">{product && 
        <div className="product-detail">
            <img src={`http://localhost:3003/${product.id}.png`}/>
            <div className="product-detail-info">
                <p className="name">{product.name}</p>
                <p className="price">${product.price}</p>
                <div className="quantity">
                    <p>Quantity: </p>
                    <button className="minus" onClick={()=>changeQuantity(false)}>-</button>
                    <p>{quantity}</p>
                    <button className="plus" onClick={()=>changeQuantity(true)}>+</button>
                </div>
                <button className="to-cart"><i className="icon-shopping-cart" style={{marginRight: "10px"}}></i>Add to cart</button>
            </div>
        </div>
        }
    </div>
  )
}

export default ProductDetail