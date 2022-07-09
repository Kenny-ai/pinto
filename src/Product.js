import React from 'react'
import { useHistory } from 'react-router-dom';
import "./Product.css"
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const handleAddToCart = () => {
    if (user) {
      addToBasket();
    } else {
      alert('you need to sign in to add to cart');
      history.push("/login");
    }
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };

  return (
    <div className="product">

      <div className="product-info">

        <p>{title}</p>
        <p className="product-price">
          <strong>${price}</strong>
        </p>
        
        <div className="product-rating">
          {Array(rating).fill().map((_, i) => (
            <p key = {i}>★</p>
          ))} 
        </div>

      </div>
      
      <img src={image} alt="" />
      
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  )
}

export default Product