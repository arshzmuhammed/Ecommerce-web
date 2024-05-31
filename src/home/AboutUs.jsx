import React, { useState } from 'react';
import Ratting from '../components/Ratting';
import { Link } from 'react-router-dom';

import img01 from '../../public/images/categoryTab/01.jpg';
import img02 from '../../public/images/categoryTab/02.jpg';
import img03 from '../../public/images/categoryTab/03.jpg';
import img04 from '../../public/images/categoryTab/04.jpg';
import img05 from '../../public/images/categoryTab/05.jpg';
import img06 from '../../public/images/categoryTab/06.jpg';
import img07 from '../../public/images/categoryTab/07.jpg';
import img08 from '../../public/images/categoryTab/08.jpg';
import author01 from '../../public/images/course/author/01.jpg';
import author02 from '../../public/images/course/author/02.jpg';
import author04 from '../../public/images/course/author/04.jpg';
import author05 from '../../public/images/course/author/05.jpg';
import author06 from '../../public/images/course/author/06.jpg';
import apple from '../../public/images/categoryTab/brand/apple.png';

const title = "Our Products";

const ProductData = [
  {
    imgUrl: img01,
    cate: 'Shoes',
    title: 'Nike Premier X',
    author: author01,
    brand: 'Nike',
    price: '$199.00',
    id: 1,
  },
  {
    imgUrl: img02,
    cate: 'Bags',
    title: 'Asthetic Bags',
    author: author02,
    brand: 'D&J Bags',
    price: '$199.00',
    id: 2,
  },
  {
    imgUrl: img03,
    cate: 'Phones',
    title: 'iPhone 12',
    author: apple,
    brand: 'Apple',
    price: '$199.00',
    id: 3,
  },
  {
    imgUrl: img04,
    cate: 'Bags',
    title: 'Hiking Bag 15 Nh100',
    author: author04,
    brand: 'Gucci',
    price: '$199.00',
    id: 4,
  },
  {
    imgUrl: img05,
    cate: 'Shoes',
    title: 'Outdoor Sports Shoes',
    author: author05,
    brand: 'Nike',
    price: '$199.00',
    id: 5,
  },
  {
    imgUrl: img06,
    cate: 'Beauty',
    title: 'COSRX Snail Mucin',
    author: author06,
    brand: 'Zaara',
    price: '$199.00',
    id: 6,
  },
  {
    imgUrl: img07,
    cate: 'Bags',
    title: 'Look Less Chanel Bag ',
    author: author01,
    brand: 'Gucci',
    price: '$199.00',
    id: 7,
  },
  {
    imgUrl: img08,
    cate: 'Shoes',
    title: 'Casual Sneakers',
    author: author02,
    brand: 'Bata',
    price: '$199.00',
    id: 8,
  },
];

const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = (cateItem) => {
    const updateItem = ProductData.filter((curElem) => {
      return curElem.cate === cateItem;
    });
    setItems(updateItem);
  };

  return (
    <div className="course-section style-3 padding-tb">
      <div className="course-shape one">
        <img src="../../public/images/shape-img/icon/01.png" alt="" />
      </div>
      <div className="course-shape two">
        <img src="../../public/images/shape-img/icon/02.png" alt="" />
      </div>
      <div className="container">
        <div className="section-header">
          <h2 className="title">{title}</h2>
          <div className="course-filter-group">
            <ul className="lab-ul">
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Bags")}>Bags</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-col-lg-3 row-col-1 course-filter">
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={product.imgUrl} alt="" />
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{product.cate}</a>
                        </div>
                        <div className="course-reiew">
                          <Ratting />
                        </div>
                      </div>
                    </div>
                    <div className="course-content">
                      <Link to={`/shop/${product.id}`}>
                        <h5>{product.title}</h5>
                      </Link>
                      <div className="course-footer">
                        <div className="course-author">
                          <Link to={"/"} className="ca-name">
                            {product.brand}
                          </Link>
                        </div>
                        <div className="course-price">{product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
