import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../../public/images/shop/del.png"
import CheckOut from './CheckOut';

const CartPage = () => {
    const [cartItems,setCardItems] = useState([])
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCardItems(storedCart)
    },[])

    const calculatedTotalPrice = (item) => {
      return item.price * item.quantity
    }

    const handleIncrese = (item) =>{
       item.quantity +=1;
       setCardItems([...cartItems])
       localStorage.setItem("cart", JSON.stringify(cartItems))
     }
     const handleDecrease = (item)=>{
       if(item.quantity >1){
       item.quantity -= 1;
       setCardItems([...cartItems])
       localStorage.setItem("cart", JSON.stringify(cartItems))
    }
    }

    const handleRemoveItem = (item) =>{
     const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

     setCardItems(updateCart)
     updateLocalStorage(updateCart)
    }
    const updateLocalStorage = (cart) =>{
     localStorage.setItem("cart",JSON.stringify(cart))
    }
    const cartSubTotal = cartItems.reduce((total,item) => {
      return total +calculatedTotalPrice(item)
    },0)
    const orderTotal = cartSubTotal
   return (
    <div>
    <PageHeader title={"Shop Cart"} curPage={"Cart Page"}/>
      

      <div className="shop-cart padding-tb">
        <div className="container">
            <div className="section-wrapper">
                <div className="cart-top">
                    <table>
                        <thead>
                            <tr>
                               <th className='cat-product'>Product</th>
                               <th className='cat-price'>Price</th>
                               <th className='cat-quantity'>Quantity</th>
                               <th className='cat-toprice'>Total</th>
                               <th className='cat-edit'>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            cartItems.map((item,index) => (
                              <tr key={index}>
                                <td className="product-item cat-product">
                                    <div className="p-thumb">
                                    <Link to='/shop'><img src={item.img} alt="" /></Link>
                                    </div>
                                    <div className="p-content">
                                        <Link to="/shop">{item.name}</Link>
                                    </div>
                                </td>
                                <td className='cat-price'>${item.price}</td>
                                <td className="cat-wuantity">
                                      <div className="cart-plus-minus">
                                        <div className="dec qtybutton" onClick={()=>handleDecrease(item)}>-</div>
                                        <input type="text" className="cart-plus-minus-box"
                                        name='qtybutton' value={item.quantity} />
                                          <div className="inc qtybutton" onClick={()=>handleIncrese(item)}>+</div>
                                      </div>
                                </td>
                                <td className='cat-toprice'>${calculatedTotalPrice(item)}</td>
                                <td className='cat-edit'>
                                    <a href="" onClick={()=>handleRemoveItem(item)}>
                                        <img src={delImgUrl} alt="" />
                                    </a>
                                </td>
                              </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="cart-bottom">
                    <div className="cart-checkout-box">
                        <form action="" className="coupon">
                            <input type="text" className="cart-page-input-text"
                            name='coupon' id='coupon' placeholder='Coupon Code ....' />
                            <input type="submit" value={"Apply Coupon"}/>
                        </form>
                        <form className='cart-checkout'>
                           <input type="submit" value="Update Cart" />
                             <div>
                                <CheckOut/>
                             </div>
                        </form>
                    </div>
                    <div className="shiping-box">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="calculate-shiping">
                                    <h3>Calculate Shipping</h3>
                                    <div className="outline-select">
                                        <select>
                                            <option value="uk">United Kingdom (UK)</option>
                                            <option value="usa">United States (USA)</option>
                                            <option value="bd">Bangladesh</option>
                                            <option value="pak">Pakisthan</option>
                                            <option value="ind">India</option>
                                            <option value="np">Nepal</option>
                                        </select>
                                        <span className='select-icon'>
                                            <i className="icofont-rounded-down"></i>
                                        </span>
                                    </div>
                                    <div className="outline-select shipping-select">
                                    <select>
                                            <option value="uk">New York</option>
                                            <option value="usa">London</option>
                                            <option value="bd">Dhaka</option>
                                            <option value="pak">Korachi</option>
                                            <option value="ind">New Delhi</option>
                                        </select>
                                        <span className='select-icon'>
                                            <i className="icofont-rounded-down"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="cart-page-input-text"
                                    name='postalCode' id='postalCode' placeholder='postcode/ZIP *' />
                                    <button type='submit'>Update Adress</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="cart-overview">
                                    <h3>Cart Totals</h3>
                                    <ul className='lab-ul'>
                                        <li>
                                            <span className='pull-left'>Cart Subtotal</span>
                                             <p className="pull-right">${cartSubTotal}</p>
                                        </li>
                                        <li>
                                            <span className='pull-left'>Shipping and Handeling</span>
                                             <p className="pull-right">Free Shipping</p>
                                        </li>
                                        <li>
                                            <span className='pull-left'>Order Total</span>
                                             <p className="pull-right">${orderTotal.toFixed(2)}</p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
