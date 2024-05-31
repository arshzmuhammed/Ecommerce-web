import React, { useState } from 'react'
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectedCatagory from '../components/SelectedCatagory';

const title = (
    <h2> Search Your One From <span>Thousand</span>  Of Products</h2>
 )
 const desc = "We have largest collections of products"

 const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More than 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];

const Banner = () => {
    const [searchInput,setsearchInput] = useState('')
    const [filteredProducts,setfilteredProducts] = useState(productData)
    // console.log(productData)

    const handleSearch = e =>{
    //    console.log(e.target.value)
       const searchTerm = e.target.value
       setsearchInput(searchTerm)

       const filtered = productData.filter((product) => product.name.toLowerCase(searchTerm.toLowerCase()));
       setfilteredProducts(filtered)
    }
  return (
    <div className="banner-section style-4">
       <div className="container">
        <div className="banner-content">
            {title} 
            <form>
            <SelectedCatagory select={"all"}/>
                <input type="text" name="Search" placeholder="Search Your Products" value={searchInput}
                    onChange={handleSearch}
                />
                <button type="submit">
                 <i className="icofont-search"></i>
                </button>
            </form>
            <p>{desc}</p>
            <ul className="lab-ul">
{
    searchInput && filteredProducts.map((product,i)=><li key={i}>
        <Link to={`/shop/${product.id}`}>{product.name}</Link>
    </li>)

}
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Banner
