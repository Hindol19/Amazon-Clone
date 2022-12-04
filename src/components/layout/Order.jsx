import React from "react";
import "../style/Order.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import moment from "moment";

function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {/* //This is a time-stamp */}
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={true}
        />
      ))}

      <CurrencyFormat
        renderText={(value) => {
          return <h3 className="order_total">Order Total: {value}</h3>;
        }}
        decimalScale={2}
        value={(order.data.amount || order.data.amoutn) / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
