import React from "react";

const Cart = ({ cart }) => {
  return (
    <div style={{ paddingTop: "500px" }}>
      {cart.map((ca) => {
        return (
          <ul>
            <li>{ca.id}</li>
            <li>{ca.item}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Cart;
