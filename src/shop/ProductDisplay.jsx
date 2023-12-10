import React, { useState } from 'react'
import { Link, json } from 'react-router-dom';


const desc = "Energistia an deliver atactia metrcs after avsionary Apropria transition enterprice an sources applications emerging psd tempelate"
const ProductDisplay = ({item}) => {
    // console.log(item)
    const{name,id,price,seller,ratingsCount,quantity,img} = item;
    const [preQuantity,setQuantity] =useState(quantity)
    const [coupon,setCoupon] = useState('')
    const [size,setSize] = useState('Select Size')
    const [color,setColor] = useState('Select Color')
    const handleSizeChange = (e)=> {
    setSize(e.target.value)
    }
    const handleColorChange=(e) => {
        setColor(e.target.value)
    }
    const handleDecrese = () => {
    if(preQuantity >1){
    setQuantity(preQuantity -1 )
    }
    }
    const handleIncrease = () =>{
      setQuantity(preQuantity + 1 )
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      const product = {
      id:id,
      img:img,
      name:name,
      price:price,
      quantity:preQuantity,
      size:size,
      color:color,
      coupon:coupon
    }
    // console.log(product)
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProuctIndex = existingCart.findIndex((item) => item.id === id)

    if(existingProuctIndex !== -1){
    existingCart[existingProuctIndex].quantity += preQuantity;
  }else{
    existingCart.push(product);

    localStorage.setItem("cart",JSON.stringify(existingCart));
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  }
    }
  return (
    <div className=''>
      <div>
        <h4>{name}</h4>
        <p className='rating'>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <span>{ratingsCount} review</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
            <div className="select-product size">
                <select value={size} onChange={handleSizeChange}>
                    <option>Select Size</option>
                    <option value="SM">SM</option>
                    <option value="MD">MD</option>
                    <option value="LG">LG</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                <i className="icofont-rounded-down"></i>
            </div>

            <div className="select-product color">
                <select value={color} onChange={handleColorChange}>
                    <option>Select Color</option>
                    <option>Pink</option>
                    <option>Ash</option>
                    <option>Red</option>                               
                    <option>White</option>
                    <option>Blue</option>
                </select>
                <i className="icofont-rounded-down"></i>
            </div>
      
        <div className="cart-plus-minus">
          <div className='dec qtybutton' onClick={handleDecrese}>-</div>
          <input className='cart-plus-minus-box' type="text"name='qtybutton' id='qtybutton' value={preQuantity} onChange={(e)=>setQuantity(parseInt(e.target.value ,10))} />
          <div className='inc qtybutton'  onClick={handleIncrease}>+</div>
        </div>
        <div className="discount-code mb-2">
          <input type="text" placeholder='Enter Discount Code' onChange={(e)=> setCoupon(e.target.value)}/>
        </div>

        <button className="lab-btn" type='submit'><span>Add to Cart</span></button>
        <Link to='/cart-page' className="lab-btn bg-primary" type='submit'><span>Check Out</span></Link>
        </form>
      </div>
    </div>
  )
}

export default ProductDisplay
