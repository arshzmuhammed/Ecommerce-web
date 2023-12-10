import React from 'react'
import Data from '../products.json'
const ShopCatagory = ({filterItem,setItem,meanuItem,setProducts,selectedCategory}) => {
  return (
    <>
        <div className="widget-header">
            <h5 className="ms-2">
                All Catagories
            </h5>
        </div>
        <div>
        <button onClick={()=>setProducts(Data)} className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""} `} >All</button>
            {
            meanuItem.map((val,i)=>{
            return(
              <button 
              className={`m-2 ${selectedCategory === val ? "bg-warning" : ""} `} 
              key={i}
              onClick={()=>filterItem(val)}>{val}
              </button>
            
            )
            
            })
            }
        </div>
    </>
  )
}

export default ShopCatagory
