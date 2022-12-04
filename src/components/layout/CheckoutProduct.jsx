import React from "react";
import "../style/CheckoutProduct.css";
import { StateProvider, useStateValue } from "../../StateProvider";

function CheckoutProduct({ image, id, title, rating, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(hideButton);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image"
        src={image}
        alt="checkoutProduct"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((item, ind) => {
              return <p>⭐</p>;
            })}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
