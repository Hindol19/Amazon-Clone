import React from "react";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { StateProvider, useStateValue } from "../../StateProvider";
import "../style/Checkout.css";
import userEvent from "@testing-library/user-event";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout_banner"
        />
        <div>
          <h3>Hello {user?.email.split('@')[0]}!</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((ele) => {
            return (
              <CheckoutProduct
                id={ele.id}
                price={ele.price}
                title={ele.title}
                rating={ele.rating}
                image={ele.image}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
