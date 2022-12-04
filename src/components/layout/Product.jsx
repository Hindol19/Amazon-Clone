import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import "../style/Product.css";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  // var [totPrice, setTotPrice] = useState(0);

  // function totalPrice() {
  //    setTotPrice(
  //     basket.reduce((acc, curr) => {
  //       return (acc + curr.price);
  //     })
  //   );
  // }
  // console.log(totPrice);
  const addToBasket = () => {
    //Dispatch item into the data layer:

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((item) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
