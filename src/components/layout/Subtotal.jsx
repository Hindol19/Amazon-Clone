import React, { useState } from "react";
import "../style/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const navigate = useNavigate();
  // console.log(basket[0].price);
  var totPrice = 0.0;
  basket.forEach((element) => {
    totPrice += element.price;
  });

  // var totPrice = basket?.reduce((acc, curr) => {
  //   return acc + curr.price;
  // });

  // console.log(totPrice);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <div>
              <p>
                Subtotal ({basket?.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </div>
          );
        }}
        decimalScale={2}
        value={totPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={() => {
          navigate("/payment");
        }}
        type="submit"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
